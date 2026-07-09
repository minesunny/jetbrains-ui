/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmVerified = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M6.293 1.414a1 1 0 0 1 1.414 0l.5.5a2 2 0 0 0 1.414.586h.879a1 1 0 0 1 1 1v.879a2 2 0 0 0 .586 1.414l.611.611a1 1 0 0 1 .074 1.332l-.833 1.04a2 2 0 0 0-.438 1.25v.474a1 1 0 0 1-1 1h-.879a2 2 0 0 0-1.414.586l-.5.5a1 1 0 0 1-1.414 0l-.5-.5a2 2 0 0 0-1.414-.586H3.5a1 1 0 0 1-1-1v-.474a2 2 0 0 0-.438-1.249l-.833-1.04a1 1 0 0 1 .074-1.333l.611-.611A2 2 0 0 0 2.5 4.379V3.5a1 1 0 0 1 1-1h.879c.53 0 1.039-.211 1.414-.586z"
      className="fill-[#F2FCF3] dark:fill-[#253627] stroke-[#208A3C] dark:stroke-[#57965C]"
    />
    <path
      d="m9.5 5.5-3 3L5 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#208A3C] dark:stroke-[#57965C]"
    />
  </svg>
);

export default CwmVerified;
