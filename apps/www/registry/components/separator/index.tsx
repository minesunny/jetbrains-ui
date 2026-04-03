'use client';

import * as React from 'react';
import { Separator as SeparatorPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal'
          ? 'h-ui-hairline w-full'
          : 'h-full w-ui-hairline',
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
