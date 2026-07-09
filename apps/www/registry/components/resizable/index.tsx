'use client';

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@workspace/ui/lib/utils';

const ResizablePanelGroup = forwardRef<
  ResizablePrimitive.GroupImperativeHandle,
  ComponentPropsWithoutRef<typeof ResizablePrimitive.Group>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Group
    groupRef={ref}
    data-slot="resizable-panel-group"
    className={cn(
      'flex h-full w-full overflow-hidden',
      props.orientation === 'vertical' && 'flex-col',
      className,
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = forwardRef<
  ResizablePrimitive.PanelImperativeHandle,
  ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>
>(({ className, children, ...props }, ref) => (
  <ResizablePrimitive.Panel panelRef={ref} {...props}>
    <div
      data-slot="resizable-panel"
      className={cn('h-full min-h-0 min-w-0', className)}
    >
      {children}
    </div>
  </ResizablePrimitive.Panel>
));
ResizablePanel.displayName = 'ResizablePanel';

function ResizableHandle({
  className,
  children,
  withHandle,
  ...props
}: ComponentPropsWithoutRef<typeof ResizablePrimitive.Separator> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      data-with-handle={withHandle ? 'true' : undefined}
      className={cn(
        'group relative flex w-px shrink-0 cursor-col-resize items-center justify-center bg-gray-10 outline-none transition-[background-color] duration-150 ease-in-out hover:bg-gray-8 active:bg-gray-7 dark:bg-gray-5 dark:hover:bg-gray-6 dark:active:bg-gray-7',
        // Hit area expansion
        'after:pointer-events-none after:absolute after:inset-block-0 after:inset-inline-start-1/2 after:w-1 after:-translate-x-1/2 after:content-[""]',
        // Horizontal orientation
        "aria-[orientation='horizontal']:h-px aria-[orientation='horizontal']:w-full aria-[orientation='horizontal']:cursor-row-resize aria-[orientation='horizontal']:after:inset-block-start-1/2 aria-[orientation='horizontal']:after:inset-inline-0 aria-[orientation='horizontal']:after:h-1 aria-[orientation='horizontal']:after:w-full aria-[orientation='horizontal']:after:-translate-x-0 aria-[orientation='horizontal']:after:-translate-y-1/2",
        className,
      )}
      {...props}
    >
      {children ??
        (withHandle ? (
          <div className="z-10 flex h-4 w-3 shrink-0 items-center justify-center rounded-[2px] border border-gray-8 bg-gray-12 transition-[border-color,background-color] duration-150 ease-in-out group-hover:border-gray-6 group-hover:bg-gray-11 group-active:border-gray-5 group-active:bg-gray-10 dark:border-gray-6 dark:bg-gray-3 dark:group-hover:border-gray-7 dark:group-hover:bg-gray-4 dark:group-active:border-gray-8 dark:group-active:bg-gray-5 before:block before:h-2.5 before:w-1 before:rounded-full before:bg-gray-7 before:content-[''] dark:before:bg-gray-8 dark:group-hover:before:bg-gray-9 dark:group-active:before:bg-gray-10" />
        ) : null)}
    </ResizablePrimitive.Separator>
  );
}
ResizableHandle.displayName = 'ResizableHandle';

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
