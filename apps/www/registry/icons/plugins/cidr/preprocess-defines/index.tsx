/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const PreprocessDefines = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.432 6 .445-2H7.9l-.444 2h1.975l.445-2H10.9l-.444 2H11.5v1h-1.266L9.79 9H11v1H9.568l-.445 2H8.1l.444-2H6.568l-.445 2H5.1l.444-2H4.5V9h1.266l.444-2H5V6zm.358 3h1.976l.444-2H7.234z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default PreprocessDefines;
