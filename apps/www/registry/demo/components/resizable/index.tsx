'use client';

import * as React from 'react';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/registry/components/resizable';
import { cn } from '@workspace/ui/lib/utils';

interface ResizableDemoProps {
  direction: 'horizontal' | 'vertical';
  collapsed?: boolean;
  collapsedSize?: number | string;
  defaultSize?: number;
  minSize?: number;
}

export default function ResizableDemo({
  direction,
  collapsed = false,
  collapsedSize = 0,
  defaultSize = 45,
  minSize = 20,
}: ResizableDemoProps) {
  const vertical = direction === 'vertical';
  const parsedCollapsedSize =
    collapsedSize === '' ? Number.NaN : Number(collapsedSize);
  const resolvedCollapsedSize =
    Number.isFinite(parsedCollapsedSize) && parsedCollapsedSize >= 0
      ? parsedCollapsedSize
      : undefined;
  const canCollapse =
    typeof resolvedCollapsedSize === 'number' &&
    Number.isFinite(resolvedCollapsedSize);
  const normalizedMinSize = Math.min(Math.max(minSize, 10), 40);
  const normalizedDefaultSize = Math.min(
    Math.max(defaultSize, normalizedMinSize),
    75,
  );
  const [isCollapsed, setIsCollapsed] = React.useState(
    collapsed && canCollapse,
  );

  React.useEffect(() => {
    setIsCollapsed(collapsed && canCollapse);
  }, [collapsed, canCollapse]);

  return (
    <div
      className={cn(
        'w-full space-y-3',
        vertical ? 'max-w-[320px]' : 'max-w-[440px]',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-muted-foreground text-xs">
          Set `collapsedSize` to `-1` to disable collapse.
        </p>
        <button
          type="button"
          disabled={!canCollapse}
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="border-border bg-background text-foreground hover:bg-accent disabled:pointer-events-none disabled:opacity-50 inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium transition-colors"
        >
          {isCollapsed ? 'Expand Panel A' : 'Collapse Panel A'}
        </button>
      </div>

      <ResizablePanelGroup
        direction={direction}
        className={cn('w-full rounded-lg border', vertical ? 'h-72' : 'h-48')}
      >
        <ResizablePanel
          defaultSize={normalizedDefaultSize}
          minSize={normalizedMinSize}
          collapsedSize={resolvedCollapsedSize}
          collapsed={isCollapsed}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
        >
          <div className="bg-muted/25 h-full min-h-0 min-w-0 p-3 text-sm">
            <p className="mb-2 font-medium">Panel A (collapsible)</p>
            <p className="text-muted-foreground mb-3 text-xs">
              This panel can collapse because `collapsedSize` is `0` or larger.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-background border-border truncate rounded-sm border px-2 py-1 text-xs"
                >
                  Item {index + 1}
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={100 - normalizedDefaultSize} minSize={25}>
          <div className="bg-muted/10 h-full p-3 text-sm">
            <p className="mb-2 font-medium">Panel B</p>
            <p className="text-muted-foreground text-xs">
              This panel remains resizable and keeps standard behavior.
            </p>
            <div className="mt-3 space-y-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-background border-border truncate rounded-sm border px-2 py-1 text-xs"
                >
                  Log row {index + 1}
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
