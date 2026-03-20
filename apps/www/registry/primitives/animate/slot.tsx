'use client';

import * as React from 'react';
import { Slot as RadixSlot } from '@radix-ui/react-slot';

export type WithAsChild<T> = T & { asChild?: boolean };

export const Slot = React.forwardRef<HTMLElement, any>((props, ref) => {
  return <RadixSlot ref={ref} {...props} />;
});

Slot.displayName = 'Slot';
