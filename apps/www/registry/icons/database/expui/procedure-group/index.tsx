/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ProcedureGroupProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ProcedureGroup = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ProcedureGroupProps) => (
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
      d="M3.99902 4.97998H6.51882C6.92589 4.97998 7.28279 5.05451 7.58952 5.20358C7.89912 5.35265 8.13706 5.56478 8.30332 5.83998C8.47246 6.11518 8.55702 6.43338 8.55702 6.79458C8.55702 7.15865 8.47102 7.47828 8.29902 7.75348C8.12989 8.02868 7.88909 8.24225 7.57662 8.39418C7.26416 8.54611 6.90009 8.62208 6.48442 8.62208H4.97942V11H3.99902V4.97998ZM6.47582 7.77498C6.68796 7.77498 6.87429 7.73628 7.03482 7.65888C7.19536 7.57861 7.31862 7.46538 7.40462 7.31918C7.49062 7.17011 7.53362 6.99668 7.53362 6.79888C7.53362 6.60108 7.49062 6.42908 7.40462 6.28288C7.31862 6.13668 7.19536 6.02488 7.03482 5.94748C6.87429 5.86721 6.68796 5.82708 6.47582 5.82708H4.97942V7.77498H6.47582Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ProcedureGroup;
