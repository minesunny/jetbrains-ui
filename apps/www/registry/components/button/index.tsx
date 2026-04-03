'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/registry/components/tooltip';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded border text-ui-default transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-gray-12 disabled:text-gray-8 dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2 dark:disabled:bg-gray-4 dark:disabled:text-gray-7',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-blue-4 text-gray-14 hover:bg-blue-3 hover:text-gray-14 active:bg-blue-2 active:text-gray-14 dark:bg-blue-6 dark:hover:bg-blue-5 dark:hover:text-gray-14 dark:active:bg-blue-4 dark:active:text-gray-14',
        secondary:
          'border-gray-9 bg-transparent text-gray-1 hover:bg-gray-12 hover:text-gray-1 active:bg-gray-11 active:text-gray-1 dark:border-gray-5 dark:bg-gray-5 dark:text-gray-12 dark:hover:bg-gray-6 dark:hover:text-gray-12 dark:active:bg-gray-4 dark:active:text-gray-12',
      },
      size: {
        default: 'h-7 min-w-ui-button gap-ui-control px-ui-control',
        slim: 'h-6 min-w-ui-button gap-ui-control px-ui-control',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>['variant']
>;

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: ButtonVariant;
  slim?: boolean;
  tooltip?: string;
  asChild?: boolean;
};

function Button({
  className,
  variant = 'primary',
  slim = false,
  tooltip,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const size = slim ? 'slim' : 'default';

  const button = (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-slim={slim || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  );

  if (!tooltip) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export { Button, buttonVariants, type ButtonProps };
