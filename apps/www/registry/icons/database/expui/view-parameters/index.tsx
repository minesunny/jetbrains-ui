/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ViewParametersProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ViewParameters = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ViewParametersProps) => (
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
      d="M8.57081 5C7.72702 5 7.06335 5.37098 6.68265 5.99832V5.12281H5.7002V12H6.70312V9.52032C7.08689 10.1272 7.74186 10.4854 8.57081 10.4854C10.0291 10.4854 11.0474 9.36988 11.0474 7.74269C11.0474 6.1155 10.0291 5 8.57081 5ZM8.36101 9.5848C7.38367 9.5848 6.70312 8.8326 6.70312 7.74269C6.70312 6.65278 7.38367 5.90058 8.36101 5.90058C9.33324 5.90058 10.0036 6.65278 10.0036 7.74269C10.0036 8.8326 9.33324 9.5848 8.36101 9.5848Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ViewParameters;
