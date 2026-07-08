/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const GoogleCloudSpanner = ({
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
      d="m.284 8.496 3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992"
      className="fill-[#4485F9]"
    />
    <path
      opacity={0.5}
      d="M14.902 9.921 9.467 4.486 8.46 4v.921L7.539 4l-1.007.486v1.497l.866.46v1.464l-1.27.732-.831-.52L4 8.87l.083 1.115.674.674-.214.123L8.763 15h2.657a1 1 0 0 0 .868-.504z"
      className="fill-[#417BDC]"
    />
    <path
      d="M7.398 6.444v1.463l-1.27.732-.831-.52L4 8.87l.083 1.115 1.069-.617.437.279.023.518-1.069.617.925.63 1.297-.75-.035-.98L8 8.95l1.27.733-.035.98 1.298.749.924-.63-1.07-.617.024-.518.437-.28 1.07.618L12 8.869l-1.297-.75-.832.52-1.27-.733V6.444l.866-.46V4.485L8.46 4v1.234l-.46.24-.461-.24V4l-1.007.486v1.497z"
      className="fill-[#fff]"
    />
  </svg>
);

export default GoogleCloudSpanner;
