/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantUnion = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M8.018 11.62q-.825 0-1.465-.35a2.5 2.5 0 0 1-.995-.99 2.9 2.9 0 0 1-.355-1.45V4.5h1.015v4.325q0 .55.225.98t.63.665q.41.235.945.235.525 0 .92-.235.4-.24.62-.665.22-.43.22-.98V4.5h1.015v4.33a2.9 2.9 0 0 1-.355 1.45 2.5 2.5 0 0 1-.98.99q-.625.35-1.44.35"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
  </svg>
);

export default CodeAssistantUnion;
