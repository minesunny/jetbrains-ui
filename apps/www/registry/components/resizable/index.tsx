'use client';

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from '@/registry/components/scroll-area';
import { cn } from '@workspace/ui/lib/utils';

const PANEL_SIZE_EPSILON = 0.1;

type ResizablePanelProps = React.ComponentProps<
  typeof ResizablePrimitive.Panel
> & {
  contentClassName?: string;
  enableMinSizeScroll?: boolean;
  collapse?: boolean;
  collapsed?: boolean;
};

function assignRef<T>(ref: React.ForwardedRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
}

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        'flex size-full overflow-hidden data-[panel-group-direction=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  );
}

const ResizablePanel = React.forwardRef<
  React.ComponentRef<typeof ResizablePrimitive.Panel>,
  ResizablePanelProps
>(
  (
    {
      className,
      children,
      contentClassName,
      enableMinSizeScroll = true,
      minSize,
      collapsible,
      collapsedSize = 0,
      collapse,
      collapsed,
      onResize,
      onCollapse,
      onExpand,
      defaultSize,
      ...props
    },
    forwardedRef,
  ) => {
    const panelRef =
      React.useRef<React.ComponentRef<typeof ResizablePrimitive.Panel>>(null);
    const lastExpandedSizeRef = React.useRef<number | null>(
      typeof defaultSize === 'number' ? defaultSize : null,
    );
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [isAtMinSize, setIsAtMinSize] = React.useState(false);

    const mergedRef = React.useCallback(
      (value: React.ComponentRef<typeof ResizablePrimitive.Panel> | null) => {
        panelRef.current = value;
        assignRef(forwardedRef, value);
      },
      [forwardedRef],
    );

    const collapseThreshold = collapsedSize + PANEL_SIZE_EPSILON;
    const collapsedState = collapse ?? collapsed;

    const handleResize = React.useCallback(
      (nextSize: number, prevSize: number | undefined) => {
        if (nextSize > collapseThreshold) {
          lastExpandedSizeRef.current = nextSize;
        }

        if (typeof minSize === 'number') {
          setIsAtMinSize(nextSize <= minSize + PANEL_SIZE_EPSILON);
        }

        onResize?.(nextSize, prevSize);
      },
      [collapseThreshold, minSize, onResize],
    );

    const handleCollapse = React.useCallback(() => {
      setIsCollapsed(true);
      setIsAtMinSize(false);
      onCollapse?.();
    }, [onCollapse]);

    const handleExpand = React.useCallback(() => {
      setIsCollapsed(false);

      if (typeof minSize === 'number') {
        const rememberedSize = lastExpandedSizeRef.current;
        if (typeof rememberedSize === 'number') {
          setIsAtMinSize(rememberedSize <= minSize + PANEL_SIZE_EPSILON);
        }
      }

      const rememberedSize = lastExpandedSizeRef.current;
      if (
        collapsible &&
        typeof rememberedSize === 'number' &&
        rememberedSize > collapseThreshold
      ) {
        panelRef.current?.resize(rememberedSize);
      }

      onExpand?.();
    }, [collapsible, collapseThreshold, minSize, onExpand]);

    React.useEffect(() => {
      if (!collapsible || typeof collapsedState !== 'boolean') {
        return;
      }

      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      if (collapsedState) {
        if (!panel.isCollapsed()) {
          panel.collapse();
        }
        return;
      }

      if (panel.isCollapsed()) {
        panel.expand();
      }
    }, [collapsible, collapsedState]);

    const shouldEnableScroll =
      enableMinSizeScroll && !isCollapsed && isAtMinSize;

    return (
      <ResizablePrimitive.Panel
        ref={mergedRef}
        data-slot="resizable-panel"
        data-min-size-reached={shouldEnableScroll ? 'true' : 'false'}
        className={cn('min-h-0 min-w-0', className)}
        minSize={minSize}
        collapsible={collapsible}
        collapsedSize={collapsedSize}
        defaultSize={defaultSize}
        onResize={handleResize}
        onCollapse={handleCollapse}
        onExpand={handleExpand}
        {...props}
      >
        {enableMinSizeScroll ? (
          <ScrollArea className="size-full">
            <ScrollViewport
              className={cn(
                'size-full',
                shouldEnableScroll ? 'overflow-auto' : 'overflow-hidden',
                contentClassName,
              )}
            >
              {children}
            </ScrollViewport>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          children
        )}
      </ResizablePrimitive.Panel>
    );
  },
);

ResizablePanel.displayName = 'ResizablePanel';

function ResizableHandle({
  className,
  withHandle,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'bg-border relative flex w-px shrink-0 items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div
          className={cn(
            'bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border',
          )}
        >
          <span className="bg-border-foreground/40 block h-2.5 w-1 rounded-full" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
