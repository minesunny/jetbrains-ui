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
}

export default function ResizableDemo({ direction }: ResizableDemoProps) {
  const vertical = direction === 'vertical';
  const [collapse, setCollapse] = React.useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs">
          Collapse keeps the previous size. Dragging to min size enables
          internal scroll.
        </p>
        <button
          type="button"
          onClick={() => setCollapse((prev) => !prev)}
          className="border-border bg-background text-foreground hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium transition-colors"
        >
          {collapse ? 'Expand Panel A' : 'Collapse Panel A'}
        </button>
      </div>

      <ResizablePanelGroup
        direction={direction}
        className={
          vertical
            ? 'h-72 w-[360px] rounded-lg border'
            : 'h-48 w-[560px] rounded-lg border'
        }
      >
        <ResizablePanel
          defaultSize={45}
          minSize={20}
          collapsible
          collapse={collapse}
          collapsedSize={0}
          onCollapse={() => setCollapse(true)}
          onExpand={() => setCollapse(false)}
        >
          <div
            className={cn(
              'bg-muted/25 h-full p-3 text-sm',
              vertical ? 'min-h-[340px]' : 'min-w-[600px]',
            )}
          >
            <p className="mb-2 font-medium">Panel A (collapsible)</p>
            <p className="text-muted-foreground mb-3 text-xs">
              Resize this panel close to its minimum size to trigger inner
              scrolling.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-background border-border rounded-sm border px-2 py-1 text-xs"
                >
                  Item {index + 1}
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={55} minSize={25}>
          <div className="bg-muted/10 h-full p-3 text-sm">
            <p className="mb-2 font-medium">Panel B</p>
            <p className="text-muted-foreground text-xs">
              This panel remains resizable and keeps standard behavior.
            </p>
            <div className="mt-3 space-y-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-background border-border rounded-sm border px-2 py-1 text-xs"
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
