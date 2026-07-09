/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AwsGlue = ({
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
      d="m12.773 5.144 1.23.37v1.59l-1.23-.089z"
      className="fill-[#F58435] dark:hidden"
    />
    <path
      d="M11.113 5.397v1.716l1.659-.098V5.144zM3.219 4.276 2 4.656v2.496l1.219-.098z"
      className="fill-[#9D5025] dark:hidden"
    />
    <path
      d="M4.887 4.53v2.622L3.22 7.054V4.276z"
      className="fill-[#E66D17] dark:hidden"
    />
    <path
      d="M13.999 8v2l-5.995 1.51V8.049z"
      className="fill-[#F58435] dark:hidden"
    />
    <path d="M2 8v2l6.005 1.51V8.049z" className="fill-[#9D5025] dark:hidden" />
    <path
      d="m8.004 1 1.768.848v4.914l-1.768-.156z"
      className="fill-[#F58435] dark:hidden"
    />
    <path
      d="m8.005 1-1.778.868v4.904l1.778-.166z"
      className="fill-[#9D5025] dark:hidden"
    />
    <path
      d="M9.762 12.446v1.716L8.004 15V13.1z"
      className="fill-[#F58435] dark:hidden"
    />
    <path
      d="M6.246 12.446v1.716L8.005 15V13.1z"
      className="fill-[#9D5025] dark:hidden"
    />
    <path
      d="m8.005 11.949 1.758.496-1.758.653-1.759-.653z"
      className="fill-[#FEB57E] dark:hidden"
    />
    <path
      d="m12.773 5.144 1.23.37v1.59l-1.23-.089z"
      className="fill-[#F58435] hidden dark:block"
    />
    <path
      d="M11.113 5.397v1.716l1.659-.098V5.144zM3.219 4.276 2 4.656v2.496l1.219-.098z"
      className="fill-[#9D5025] hidden dark:block"
    />
    <path
      d="M4.887 4.53v2.622L3.22 7.054V4.276zM13.999 8v2l-5.995 1.51V8.049z"
      className="fill-[#F58435] hidden dark:block"
    />
    <path
      d="M2 8v2l6.005 1.51V8.049z"
      className="fill-[#9D5025] hidden dark:block"
    />
    <path
      d="m8.004 1 1.768.848v4.914l-1.768-.156z"
      className="fill-[#F58435] hidden dark:block"
    />
    <path
      d="m8.005 1-1.778.868v4.904l1.778-.166z"
      className="fill-[#9D5025] hidden dark:block"
    />
    <path
      d="M9.762 12.446v1.716L8.004 15V13.1z"
      className="fill-[#F58435] hidden dark:block"
    />
    <path
      d="M6.246 12.446v1.716L8.005 15V13.1z"
      className="fill-[#9D5025] hidden dark:block"
    />
    <path
      d="m8.005 11.949 1.758.496-1.758.653-1.759-.653z"
      className="fill-[#FEB57E] hidden dark:block"
    />
  </svg>
);

export default AwsGlue;
