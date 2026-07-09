/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EjbCreateMethod = ({
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
      d="m12 8 1.113 2.812 2.887.244-2.2 1.981.672 2.963L12 14.412 9.528 16l.672-2.963L8 11.056l2.887-.244z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.726 9.945a7 7 0 1 0-5.988 5.017l.357-1.574-1.764-1.59a1 1 0 0 1 .585-1.739l2.27-.191.884-2.236a1 1 0 0 1 1.86 0l.884 2.236z"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M8.974 13.921a6 6 0 1 1 4.778-4.21l.062.157.912.077a7 7 0 1 0-5.988 5.017z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default EjbCreateMethod;
