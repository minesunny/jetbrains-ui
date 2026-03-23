'use client';

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@workspace/ui/lib/utils';
import './index.css';

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
        'jb-resizable-panel-group flex h-full w-full overflow-hidden',
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
          className={cn('jb-resizable-panel h-full min-h-0 min-w-0', className)}
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
        "jb-resizable-handle relative flex w-px shrink-0 cursor-col-resize items-center justify-center outline-none transition-[background-color,box-shadow] duration-150 ease-in-out after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:content-[''] after:-translate-x-1/2 focus-visible:z-[1] aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:cursor-row-resize aria-[orientation=horizontal]:after:top-1/2 aria-[orientation=horizontal]:after:bottom-auto aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 aria-[orientation=horizontal]:[&_.jb-resizable-handle__grip]:rotate-90",
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
          <div className="jb-resizable-handle__grip z-10 flex h-4 w-3 shrink-0 items-center justify-center rounded-[2px] border transition-[border-color,background-color,transform] duration-150 ease-in-out before:block before:h-2.5 before:w-1 before:rounded-full before:content-[''] before:transition-[background-color] before:duration-150 before:ease-in-out" />
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
