/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const NamespaceCpp = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      className="fill-[#F2FCF3] dark:fill-[#253627] stroke-[#208A3C] dark:stroke-[#57965C]"
    />
    <path
      d="M5.205 4.5H6.25l3.565 5.435V4.5h.98v7h-1.05l-3.56-5.435V11.5h-.98z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default NamespaceCpp;
