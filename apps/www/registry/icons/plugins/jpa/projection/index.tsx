/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Projection = ({
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
    <circle
      cx="8"
      cy="8"
      r="6.5"
      className="fill-[#F2FCF3] dark:fill-[#253627] stroke-[#208A3C] dark:stroke-[#57965C]"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.224.465.224.714.636.255.414.254.955 0 .546-.258.959-.255.413-.722.64a2.5 2.5 0 0 1-1.093.229H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.222.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.335q-.24-.12-.558-.12H6.98v1.947z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default Projection;
