'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

const Toolbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & {
    direction?: 'horizontal' | 'vertical' | 'floating';
  }
>(({ className, direction = 'horizontal', ...props }, ref) => {
  const orientation = direction === 'vertical' ? 'vertical' : 'horizontal';

  return (
    <div
      ref={ref}
      role="toolbar"
      aria-orientation={orientation}
      data-slot="toolbar"
      data-direction={direction}
      data-orientation={orientation}
      className={cn(
        'inline-flex shrink-0 rounded-[6px] border border-transparent bg-transparent text-[11px] leading-4 text-gray-6 shadow-none dark:text-gray-10 [font-family:var(--font-sans),sans-serif]',
        'data-[direction=floating]:border-gray-10 data-[direction=floating]:bg-[color-mix(in_srgb,var(--gray-14)_94%,transparent)] data-[direction=floating]:shadow-[0_3px_10px_rgba(39,40,46,0.12)]',
        'dark:data-[direction=floating]:border-gray-5 dark:data-[direction=floating]:bg-[color-mix(in_srgb,var(--gray-2)_94%,transparent)] dark:data-[direction=floating]:shadow-[0_6px_18px_rgba(0,0,0,0.32)]',
        orientation === 'horizontal'
          ? 'flex-row items-center gap-0 px-ui-tight py-ui-compact'
          : 'flex-col items-center gap-0 px-ui-compact py-ui-tight',
        className,
      )}
      {...props}
    />
  );
});
Toolbar.displayName = 'Toolbar';

const ToolbarItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'> & {
    separator?: 'horizontal' | 'vertical';
  }
>(({ className, separator, type = 'button', ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      data-slot="toolbar-item"
      data-separator={separator}
      className={cn(
        'relative inline-flex min-h-ui-toolbar-item min-w-ui-toolbar-item shrink-0 items-center justify-center gap-ui-tight rounded-[4px] border border-transparent px-ui-toolbar-item py-ui-toolbar-item text-ui-default text-gray-6 outline-none transition-[background-color,border-color,color,box-shadow,opacity] duration-150 ease-out',
        'hover:bg-gray-12 hover:text-gray-2',
        'focus-visible:z-[1] focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-1 focus-visible:ring-offset-white',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-gray-8',
        'dark:text-gray-10',
        'dark:hover:bg-gray-4 dark:hover:text-gray-12',
        'dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2',
        'dark:disabled:text-gray-7',
        '[&_svg]:size-4 [&_svg]:shrink-0',
        separator === 'vertical' && 'toolbar-item-separator-vertical',
        separator === 'horizontal' && 'toolbar-item-separator-horizontal',
        className,
      )}
      {...props}
    />
  );
});
ToolbarItem.displayName = 'ToolbarItem';

export { Toolbar, ToolbarItem };
