/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmCamAvatarOff = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.854 3.146a.5.5 0 1 0-.708.708l.309.308A1 1 0 0 0 3 5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .838-.455l1.308 1.309a.5.5 0 0 0 .708-.708l-3-3zM7 7.707 4.293 5H4v3h3z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M10 4.81v3.069l-1-1v-1.26l-.84.42L6.12 4H7a1 1 0 0 1 1 1l1.276-.638a.5.5 0 0 1 .724.447"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default CwmCamAvatarOff;
