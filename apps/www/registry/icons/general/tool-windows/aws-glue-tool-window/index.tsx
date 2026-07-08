/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AwsGlueToolWindowProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AwsGlueToolWindow = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AwsGlueToolWindowProps) => (
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
      d="M8.005 6.606V1l1.746.848v4.914zM2 4.656l1.28-.38L5 4.529v2.623l-1.72-.098L2 7.152zM11 5.397v1.716l1.71-.098V5.144zM12.71 5.144v1.871l1.29.088V5.514zM8.005 1l-1.756.868v4.904l1.756-.166z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8v2l6 1.5 6-1.5V8zm7 1v1.22l4-1V9z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M8.005 13.099 10 12.5v1.716L8.005 15zM6 12.5v1.716L8.005 15v-1.901z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AwsGlueToolWindow;
