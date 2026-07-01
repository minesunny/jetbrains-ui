'use client';

import {
  forwardRef,
  useCallback,
  useRef,
  type ComponentRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';

const ScrollArea = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    /** Restrict to one axis. Omit for both. */
    orientation?: 'horizontal' | 'vertical';
  }
>(({ className, children, orientation, ...props }, ref) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const horizontalOnly = orientation === 'horizontal';

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!horizontalOnly) return;
      const el = viewportRef.current;
      if (!el) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    },
    [horizontalOnly],
  );

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn(
        'overflow-hidden',
        horizontalOnly &&
          '[&>[data-radix-scroll-area-scrollbar]]:top-0 [&>[data-radix-scroll-area-scrollbar]]:bottom-auto',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className="size-full rounded-[inherit]"
        onWheel={handleWheel}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {!orientation && <ScrollAreaPrimitive.Corner />}
      {(!orientation || orientation === 'horizontal') && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="horizontal"
          className="flex h-1 select-none touch-none flex-col data-[state=hidden]:animate-fd-fade-out"
        >
          <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-gray-4" />
        </ScrollAreaPrimitive.Scrollbar>
      )}
      {(!orientation || orientation === 'vertical') && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className="flex h-full w-1 select-none touch-none data-[state=hidden]:animate-fd-fade-out"
        >
          <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-gray-4" />
        </ScrollAreaPrimitive.Scrollbar>
      )}
    </ScrollAreaPrimitive.Root>
  );
});

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Scrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex select-none touch-none data-[state=hidden]:animate-fd-fade-out',
      orientation === 'vertical' && 'h-full w-1',
      orientation === 'horizontal' && 'h-1 flex-col',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-gray-4" />
  </ScrollAreaPrimitive.Scrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

const ScrollViewport = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cn('size-full rounded-[inherit]', className)}
    {...props}
  >
    {children}
  </ScrollAreaPrimitive.Viewport>
));
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

export { ScrollArea, ScrollBar, ScrollViewport };
