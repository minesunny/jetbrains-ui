'use client';

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@workspace/ui/lib/utils';

const PANEL_SIZE_EPSILON = 0.1;

type ResizableOrientation = NonNullable<
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Group>['orientation']
>;

type ResizablePanelGroupProps = Omit<
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Group>,
  'groupRef' | 'orientation'
> & {
  direction?: ResizableOrientation;
};

type ResizablePanelProps = Omit<
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>,
  'collapsible' | 'panelRef' | 'onResize'
> & {
  collapsed?: boolean;
  onCollapse?: () => void;
  onExpand?: () => void;
  onResize?: (size: number, prevSize: number | undefined) => void;
};

type ResizableHandleProps = React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.Separator
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
  ResizablePrimitive.GroupImperativeHandle,
  ResizablePanelGroupProps
>(({ className, direction = 'horizontal', ...props }, forwardedRef) => {
  const mergedRef = React.useCallback(
    (value: ResizablePrimitive.GroupImperativeHandle | null) => {
      assignRef(forwardedRef, value);
    },
    [forwardedRef],
  );

  return (
    <ResizablePrimitive.Group
      groupRef={mergedRef}
      orientation={direction}
      data-slot="resizable-panel-group"
      className={cn(
        'resizable-panel-group flex h-full w-full overflow-hidden',
        direction === 'vertical' && 'flex-col',
        className,
      )}
      {...props}
    />
  );
});

ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = React.forwardRef<
  ResizablePrimitive.PanelImperativeHandle,
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
      React.useRef<ResizablePrimitive.PanelImperativeHandle | null>(null);
    const lastExpandedSizeRef = React.useRef<number | null>(
      typeof defaultSize === 'number' ? defaultSize : null,
    );
    const lastCollapsedStateRef = React.useRef(false);
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
      (value: ResizablePrimitive.PanelImperativeHandle | null) => {
        panelRef.current = value;
        assignRef(forwardedRef, value);
      },
      [forwardedRef],
    );

    const handleResize = React.useCallback(
      (
        nextSize: ResizablePrimitive.PanelSize,
        _id: string | number | undefined,
        prevSize: ResizablePrimitive.PanelSize | undefined,
      ) => {
        const nextPercentage = nextSize.asPercentage;
        const prevPercentage = prevSize?.asPercentage;

        if (isCollapsible && nextPercentage > collapseThreshold) {
          lastExpandedSizeRef.current = nextPercentage;
        }

        if (isCollapsible) {
          const isNowCollapsed =
            Math.abs(nextPercentage - resolvedCollapsedSize) <=
            PANEL_SIZE_EPSILON;
          const wasCollapsed =
            typeof prevPercentage === 'number'
              ? Math.abs(prevPercentage - resolvedCollapsedSize) <=
                PANEL_SIZE_EPSILON
              : lastCollapsedStateRef.current;

          if (isNowCollapsed && !wasCollapsed) {
            onCollapse?.();
          } else if (!isNowCollapsed && wasCollapsed) {
            onExpand?.();
          }

          lastCollapsedStateRef.current = isNowCollapsed;
        } else {
          lastCollapsedStateRef.current = false;
        }

        onResize?.(nextPercentage, prevPercentage);
      },
      [
        collapseThreshold,
        isCollapsible,
        onCollapse,
        onExpand,
        onResize,
        resolvedCollapsedSize,
      ],
    );

    React.useEffect(() => {
      if (!isCollapsible) {
        setIsCollapseModeEnabled(false);
        lastCollapsedStateRef.current = false;
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
        const rememberedSize = lastExpandedSizeRef.current;

        const frameId = window.requestAnimationFrame(() => {
          if (
            typeof rememberedSize === 'number' &&
            rememberedSize > collapseThreshold
          ) {
            panel.resize(rememberedSize);
          }

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
        panelRef={mergedRef}
        minSize={minSize}
        collapsible={isCollapseModeEnabled}
        collapsedSize={
          isCollapseModeEnabled ? resolvedCollapsedSize : undefined
        }
        defaultSize={defaultSize}
        onResize={handleResize}
        {...props}
      >
        <div
          data-slot="resizable-panel"
          data-panel-collapsible={isCollapseModeEnabled ? 'true' : undefined}
          className={cn('resizable-panel h-full min-h-0 min-w-0', className)}
        >
          {children}
        </div>
      </ResizablePrimitive.Panel>
    );
  },
);

ResizablePanel.displayName = 'ResizablePanel';

function ResizableSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Separator>) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        'resizable-handle group relative flex w-px shrink-0 cursor-col-resize items-center justify-center bg-gray-10 dark:bg-gray-5 outline-none transition-[background-color,box-shadow] duration-150 ease-in-out hover:bg-gray-8 dark:hover:bg-gray-6 active:bg-gray-7 dark:active:bg-gray-7 focus-visible:z-[1] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
        /* Hit area expansion for vertical (default) orientation */
        'after:pointer-events-none after:absolute after:inset-block-0 after:inset-inline-start-1/2 after:w-1 after:-translate-x-1/2 after:content-[""]',
        /* Horizontal orientation: switch to row-resize cursor and dimensions */
        "aria-[orientation='horizontal']:h-px aria-[orientation='horizontal']:w-full aria-[orientation='horizontal']:cursor-row-resize aria-[orientation='horizontal']:after:inset-block-start-1/2 aria-[orientation='horizontal']:after:inset-inline-0 aria-[orientation='horizontal']:after:h-1 aria-[orientation='horizontal']:after:w-full aria-[orientation='horizontal']:after:-translate-x-0 aria-[orientation='horizontal']:after:-translate-y-1/2",
        /* Separator interaction states */
        "[&[data-separator='hover']]:bg-gray-8 dark:[&[data-separator='hover']]:bg-gray-6 [&[data-separator='drag']]:bg-gray-7 dark:[&[data-separator='drag']]:bg-gray-7",
        "[&[data-separator='hover']_.resizable-handle__grip]:border-gray-6 dark:[&[data-separator='hover']_.resizable-handle__grip]:border-gray-7 [&[data-separator='hover']_.resizable-handle__grip]:bg-gray-11 dark:[&[data-separator='hover']_.resizable-handle__grip]:bg-gray-4 [&[data-separator='hover']_.resizable-handle__grip::before]:bg-gray-5 dark:[&[data-separator='hover']_.resizable-handle__grip::before]:bg-gray-9",
        "[&[data-separator='drag']_.resizable-handle__grip]:border-gray-5 dark:[&[data-separator='drag']_.resizable-handle__grip]:border-gray-8 [&[data-separator='drag']_.resizable-handle__grip]:bg-gray-10 dark:[&[data-separator='drag']_.resizable-handle__grip]:bg-gray-5 [&[data-separator='drag']_.resizable-handle__grip::before]:bg-gray-4 dark:[&[data-separator='drag']_.resizable-handle__grip::before]:bg-gray-10",
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
          <div className="resizable-handle__grip z-10 flex h-4 w-3 shrink-0 items-center justify-center rounded-[2px] border border-gray-8 dark:border-gray-6 bg-gray-12 dark:bg-gray-3 transition-[border-color,background-color,transform] duration-150 ease-in-out before:block before:h-2.5 before:w-1 before:rounded-full before:bg-gray-7 dark:before:bg-gray-8 before:content-[''] before:transition-[background-color] before:duration-150 before:ease-in-out group-hover:border-gray-6 dark:group-hover:border-gray-7 group-hover:bg-gray-11 dark:group-hover:bg-gray-4 group-hover:before:bg-gray-5 dark:group-hover:before:bg-gray-9 group-active:border-gray-5 dark:group-active:border-gray-8 group-active:bg-gray-10 dark:group-active:bg-gray-5 group-active:before:bg-gray-4 dark:group-active:before:bg-gray-10" />
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
