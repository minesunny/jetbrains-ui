/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RefreshMaterializedView = ({
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
      d="M2.474 3.342a.5.5 0 0 0-.948 0l-1.5 4.5a.5.5 0 1 0 .948.316L2 5.081l2.526 7.577a.5.5 0 0 0 .948 0L8 5.081l.642 1.926c.42.039.789.251 1.036.564q.087-.045.177-.088l-1.38-4.141a.5.5 0 0 0-.95 0L5 10.919zM12.303 7.01q.517.03 1 .162L14 5.082l.964 2.89a5 5 0 0 1 .603.524.5.5 0 0 0 .408-.654l-1.5-4.5a.5.5 0 0 0-.95 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M8.5 8a.5.5 0 0 1 .5.5v.826l.181-.164A4 4 0 0 1 12.001 8a4.005 4.005 0 0 1 3.96 3.43.5.5 0 1 1-.991.14 2.97 2.97 0 0 0-.849-1.691A3 3 0 0 0 12.002 9c-.83 0-1.579.335-2.122.879l-.009.009-.124.112h.754a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5M8.465 12.005a.5.5 0 0 1 .566.424c.093.656.4 1.244.848 1.692A3 3 0 0 0 12 15c.829 0 1.578-.335 2.122-.879l.008-.009.119-.112H13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.834l-.176.167A4 4 0 0 1 12 16a4 4 0 0 1-2.828-1.172 4 4 0 0 1-1.131-2.257.5.5 0 0 1 .424-.566"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default RefreshMaterializedView;
