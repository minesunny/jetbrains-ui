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
  withHandle?: boolean;
}

export default function ResizableDemo({
  direction,
  withHandle = true,
}: ResizableDemoProps) {
  const vertical = direction === 'vertical';

  return (
    <ResizablePanelGroup
      orientation={direction}
      className={cn('w-full rounded-lg border', vertical ? 'h-72' : 'h-48')}
    >
      <ResizablePanel defaultSize={45} minSize={20}>
        <div className="h-full min-h-0 min-w-0 p-3 text-sm">
          <p className="mb-2 font-medium">Panel A</p>
          <div className="grid grid-cols-1 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="truncate rounded-sm border px-2 py-1 text-xs"
              >
                Item {index + 1}
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle={withHandle} />

      <ResizablePanel defaultSize={55} minSize={25}>
        <div className="h-full p-3 text-sm">
          <p className="mb-2 font-medium">Panel B</p>
          <div className="mt-3 space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="truncate rounded-sm border px-2 py-1 text-xs"
              >
                Log row {index + 1}
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
