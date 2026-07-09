'use client';

import { type ComponentProps } from 'react';
import { Label as LabelPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';

function Label({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    />
  );
}

export { Label };
