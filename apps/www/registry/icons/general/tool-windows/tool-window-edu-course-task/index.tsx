/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ToolWindowEduCourseTask = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.22 2.086a.5.5 0 0 1 .466-.05l5 2A.5.5 0 0 1 7 4.5v9a.5.5 0 0 1-.686.464l-5-2A.5.5 0 0 1 1 11.5v-9a.5.5 0 0 1 .22-.414M2 3.239v7.923l4 1.6V4.839zM13.78 2.086A.5.5 0 0 1 14 2.5v9a.5.5 0 0 1-.314.464l-5 2A.5.5 0 0 1 8 13.5v-9a.5.5 0 0 1 .314-.464l5-2a.5.5 0 0 1 .466.05M9 4.839v7.922l4-1.6V3.24z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowEduCourseTask;
