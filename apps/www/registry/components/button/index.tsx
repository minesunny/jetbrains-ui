'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded border font-sans text-[13px] leading-4 font-medium transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: cn(
          // Light
          'border-transparent bg-blue-4 text-gray-14',
          'hover:bg-blue-3 hover:text-gray-14',
          'active:bg-blue-2 active:text-gray-14',
          'focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14',
          'disabled:bg-blue-4 disabled:text-gray-14 disabled:opacity-50',
          // Dark
          'dark:border-transparent dark:bg-blue-6 dark:text-gray-14',
          'dark:hover:bg-blue-5 dark:hover:text-gray-14',
          'dark:active:bg-blue-4 dark:active:text-gray-14',
          'dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2',
          'dark:disabled:bg-gray-5 dark:disabled:text-gray-8 dark:disabled:opacity-100',
        ),
        secondary: cn(
          // Light
          'border-gray-9 bg-blue-4 text-gray-1',
          'hover:bg-blue-13 hover:text-gray-1 hover:border-gray-7',
          'active:bg-gray-13 active:text-gray-1 active:border-gray-7',
          'focus-visible:bg-gray-14 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14',
          'disabled:bg-blue-12 disabled:text-gray-8 disabled:border-transparent',
          // Dark
          'dark:border-transparent dark:bg-blue-5 dark:text-gray-12',
          'dark:hover:bg-blue-7 dark:hover:text-gray-12 dark:hover:border-transparent',
          'dark:active:bg-gray-2 dark:active:text-gray-1 dark:active:border-gray-7',
          'dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2',
          'dark:disabled:bg-blue-5 dark:disabled:text-gray-8 dark:disabled:border-transparent',
        ),
      },
      size: {
        default: 'h-7 min-w-[72px] gap-2 px-3',
        slim: 'h-6 min-w-[72px] gap-2 px-3',
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
  asChild?: boolean;
};

function Button({
  className,
  variant = 'primary',
  slim = false,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const size = slim ? 'slim' : 'default';

  return (
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
}

export { Button, buttonVariants, type ButtonProps };
