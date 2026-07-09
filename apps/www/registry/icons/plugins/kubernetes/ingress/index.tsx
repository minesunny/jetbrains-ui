/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Ingress = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="m12.293 11-1.646-1.647a.5.5 0 0 1 .707-.707l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707L12.293 12H9.5a.5.5 0 0 1-.393-.191L3.757 5H2.5a.5.5 0 0 1 0-1H4a.5.5 0 0 1 .393.191L9.743 11z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.647 6.646 12.293 5h-2.55L8.022 7.19l-.636-.809 1.72-2.19A.5.5 0 0 1 9.5 4h2.793l-1.646-1.646a.5.5 0 0 1 .707-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708M5.478 8.81 3.757 11H2.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .393-.191l1.721-2.19z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Ingress;
