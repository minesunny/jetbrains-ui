/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmCamAvatarOn = ({
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
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <circle
      cx="6.5"
      cy="6.5"
      r="6.5"
      className="fill-[#F7F8FA] dark:fill-[#2B2D30]"
    />
    <rect
      x="3.5"
      y="3.5"
      width="6"
      height="4"
      rx=".5"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#DFE1E6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
      className="fill-[#6C707E] dark:fill-[#DFE1E6]"
    />
  </svg>
);

export default CwmCamAvatarOn;
