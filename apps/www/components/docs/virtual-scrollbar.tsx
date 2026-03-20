'use client';

import { cn } from '@workspace/ui/lib/utils';
import {
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const TOP_OFFSET = 96;
const BOTTOM_OFFSET = 24;
const MIN_THUMB_HEIGHT = 42;

type ScrollMetrics = {
  visible: boolean;
  trackHeight: number;
  thumbHeight: number;
  thumbTop: number;
  maxScroll: number;
};

type DragState = {
  startY: number;
  startScroll: number;
  maxScroll: number;
  availableHeight: number;
} | null;

const INITIAL_METRICS: ScrollMetrics = {
  visible: false,
  trackHeight: 0,
  thumbHeight: 0,
  thumbTop: 0,
  maxScroll: 0,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function VirtualScrollbar() {
  const [metrics, setMetrics] = useState<ScrollMetrics>(INITIAL_METRICS);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<DragState>(null);
  const frameRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add('docs-scrollbar-hidden');
    return () => {
      document.documentElement.classList.remove('docs-scrollbar-hidden');
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, []);

  useEffect(() => {
    const updateMetrics = () => {
      const root = document.documentElement;
      const viewportHeight = window.innerHeight;
      const scrollHeight = Math.max(
        root.scrollHeight,
        document.body.scrollHeight,
      );
      const maxScroll = Math.max(scrollHeight - viewportHeight, 0);
      const trackHeight = Math.max(
        viewportHeight - TOP_OFFSET - BOTTOM_OFFSET,
        0,
      );

      if (maxScroll <= 0 || trackHeight <= 0) {
        setMetrics({
          visible: false,
          trackHeight,
          thumbHeight: 0,
          thumbTop: 0,
          maxScroll,
        });
        return;
      }

      const thumbHeight = Math.max(
        (viewportHeight / scrollHeight) * trackHeight,
        MIN_THUMB_HEIGHT,
      );
      const availableHeight = Math.max(trackHeight - thumbHeight, 0);
      const progress = clamp(window.scrollY / maxScroll, 0, 1);
      const thumbTop = progress * availableHeight;

      setMetrics({
        visible: true,
        trackHeight,
        thumbHeight,
        thumbTop,
        maxScroll,
      });
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateMetrics();
      });
    };

    updateMetrics();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;

      const deltaY = event.clientY - drag.startY;
      const scrollPerPixel =
        drag.availableHeight > 0 ? drag.maxScroll / drag.availableHeight : 0;
      const nextScroll = drag.startScroll + deltaY * scrollPerPixel;

      window.scrollTo({ top: nextScroll, behavior: 'auto' });
    };

    const onEnd = () => {
      dragRef.current = null;
      setDragging(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
    };
  }, [dragging]);

  const handleThumbPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    dragRef.current = {
      startY: event.clientY,
      startScroll: window.scrollY,
      maxScroll: metrics.maxScroll,
      availableHeight: Math.max(metrics.trackHeight - metrics.thumbHeight, 0),
    };
    setDragging(true);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'ns-resize';
  };

  const handleTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.target === thumbRef.current) return;

    const trackRect = trackRef.current?.getBoundingClientRect();
    if (!trackRect) return;

    const availableHeight = Math.max(
      metrics.trackHeight - metrics.thumbHeight,
      0,
    );
    if (availableHeight <= 0) return;

    const clickY = event.clientY - trackRect.top;
    const thumbStart = clamp(
      clickY - metrics.thumbHeight / 2,
      0,
      availableHeight,
    );
    const progress = thumbStart / availableHeight;
    window.scrollTo({ top: progress * metrics.maxScroll, behavior: 'auto' });
  };

  if (!metrics.visible) return null;

  return (
    <div
      className="fixed right-2 top-24 bottom-6 z-[80] hidden lg:flex items-center"
      aria-hidden
    >
      <div
        ref={trackRef}
        className="relative h-full w-2 rounded-full bg-border/45"
        onPointerDown={handleTrackPointerDown}
      >
        <div
          ref={thumbRef}
          className={cn(
            'absolute left-0 right-0 rounded-full bg-neutral-500/70 dark:bg-neutral-300/65 transition-colors duration-150',
            dragging
              ? 'bg-neutral-700/90 dark:bg-neutral-100/85'
              : 'hover:bg-neutral-600/80 dark:hover:bg-neutral-200/75',
          )}
          style={{
            height: metrics.thumbHeight,
            transform: `translateY(${metrics.thumbTop}px)`,
          }}
          onPointerDown={handleThumbPointerDown}
        />
      </div>
    </div>
  );
}
