/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Interceptors = ({
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
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M10.526 5.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 5.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425m-.707.707c.699.7 1.086 1.468 1.165 2.162a2.2 2.2 0 0 1-.399 1.556L6.112 5.405a2.23 2.23 0 0 1 1.543-.391c.7.075 1.472.454 2.164 1.146m-4.415-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Interceptors;
