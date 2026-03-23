'use client';

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@workspace/ui/lib/utils';
import './index.css';

const PANEL_SIZE_EPSILON = 0.1;

type ResizablePanelGroupProps = React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.PanelGroup
>;

type ResizablePanelProps = Omit<
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>,
  'collapsible'
> & {
  collapsed?: boolean;
};

type ResizableHandleProps = React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.PanelResizeHandle
> & {
  withHandle?: boolean;
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

const ResizablePanelGroup = React.forwardRef<
  React.ComponentRef<typeof ResizablePrimitive.PanelGroup>,
  ResizablePanelGroupProps
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    data-slot="resizable-panel-group"
    className={cn(
      'jb-resizable-panel-group flex h-full w-full overflow-hidden data-[panel-group-direction=vertical]:flex-col',
      className,
    )}
    {...props}
  />
));

ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = React.forwardRef<
  React.ComponentRef<typeof ResizablePrimitive.Panel>,
  ResizablePanelProps
>(
  (
    {
      className,
      children,
      minSize,
      collapsedSize = 0,
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
    const resolvedCollapsedSize =
      typeof collapsedSize === 'number' &&
      Number.isFinite(collapsedSize) &&
      collapsedSize >= 0
        ? collapsedSize
        : undefined;
    const isCollapsible = typeof resolvedCollapsedSize === 'number';
    const collapseThreshold = (resolvedCollapsedSize ?? 0) + PANEL_SIZE_EPSILON;
    const [isCollapseModeEnabled, setIsCollapseModeEnabled] = React.useState(
      Boolean(isCollapsible && collapsed),
    );

    const mergedRef = React.useCallback(
      (value: React.ComponentRef<typeof ResizablePrimitive.Panel> | null) => {
        panelRef.current = value;
        assignRef(forwardedRef, value);
      },
      [forwardedRef],
    );

    const handleResize = React.useCallback(
      (nextSize: number, prevSize: number | undefined) => {
        if (isCollapsible && nextSize > collapseThreshold) {
          lastExpandedSizeRef.current = nextSize;
        }

        onResize?.(nextSize, prevSize);
      },
      [collapseThreshold, isCollapsible, onResize],
    );

    const handleCollapse = React.useCallback(() => {
      onCollapse?.();
    }, [onCollapse]);

    const handleExpand = React.useCallback(() => {
      const rememberedSize = lastExpandedSizeRef.current;
      if (
        isCollapsible &&
        typeof rememberedSize === 'number' &&
        rememberedSize > collapseThreshold
      ) {
        panelRef.current?.resize(rememberedSize);
      }

      onExpand?.();
    }, [collapseThreshold, isCollapsible, onExpand]);

    React.useEffect(() => {
      if (!isCollapsible) {
        setIsCollapseModeEnabled(false);
        return;
      }

      if (collapsed) {
        setIsCollapseModeEnabled(true);
      }
    }, [collapsed, isCollapsible]);

    React.useEffect(() => {
      if (
        !isCollapsible ||
        !isCollapseModeEnabled ||
        typeof collapsed !== 'boolean'
      ) {
        return;
      }

      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      if (!collapsed) {
        panel.expand();

        const frameId = window.requestAnimationFrame(() => {
          setIsCollapseModeEnabled(false);
        });

        return () => {
          window.cancelAnimationFrame(frameId);
        };
      }

      let frameId = 0;

      const collapsePanel = () => {
        try {
          panel.collapse();
        } catch {
          frameId = window.requestAnimationFrame(collapsePanel);
        }
      };

      frameId = window.requestAnimationFrame(collapsePanel);

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }, [collapsed, isCollapsible, isCollapseModeEnabled]);

    return (
      <ResizablePrimitive.Panel
        ref={mergedRef}
        data-slot="resizable-panel"
        className={cn('jb-resizable-panel min-h-0 min-w-0', className)}
        minSize={minSize}
        collapsible={isCollapseModeEnabled}
        collapsedSize={
          isCollapseModeEnabled ? resolvedCollapsedSize : undefined
        }
        defaultSize={defaultSize}
        onResize={handleResize}
        onCollapse={handleCollapse}
        onExpand={handleExpand}
        {...props}
      >
        {children}
      </ResizablePrimitive.Panel>
    );
  },
);

ResizablePanel.displayName = 'ResizablePanel';

function ResizableSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.PanelResizeHandle
>) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'jb-resizable-handle relative flex w-px shrink-0 items-center justify-center outline-none transition-[background-color,box-shadow] duration-150 ease-in-out',
        className,
      )}
      {...props}
    />
  );
}

function ResizableHandle({
  className,
  children,
  withHandle,
  ...props
}: ResizableHandleProps) {
  return (
    <ResizableSeparator
      data-with-handle={withHandle ? 'true' : undefined}
      className={className}
      {...props}
    >
      {children ??
        (withHandle ? (
          <div className="jb-resizable-handle__grip z-10 flex h-4 w-3 shrink-0 items-center justify-center rounded-[2px] border transition-[border-color,background-color] duration-150 ease-in-out" />
        ) : null)}
    </ResizableSeparator>
  );
}

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  type ResizableHandleProps,
  type ResizablePanelGroupProps,
  type ResizablePanelProps,
};
