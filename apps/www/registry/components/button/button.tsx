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
import './index.css';

const buttonVariants = cva(
  'jb-btn inline-flex items-center justify-center whitespace-nowrap rounded border text-[13px] leading-4 font-medium transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'jb-btn--primary',
        secondary: 'jb-btn--secondary',
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
      data-slot="jb-button"
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
