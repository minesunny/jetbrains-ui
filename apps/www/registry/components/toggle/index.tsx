'use client';

import * as React from 'react';
import { Toggle as TogglePrimitive } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-ui-control rounded-md text-ui-default hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-ui-item min-w-9',
        sm: 'h-8 px-ui-compact min-w-8',
        lg: 'h-10 px-ui-tab min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
