/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Web = ({
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
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M8 1.5c.245 0 .52.114.816.406.299.295.59.745.846 1.341.51 1.19.838 2.871.838 4.753s-.328 3.562-.838 4.753c-.255.596-.547 1.047-.846 1.34-.296.293-.57.407-.816.407-.245 0-.52-.114-.816-.406-.299-.294-.59-.745-.846-1.341C5.828 11.563 5.5 9.882 5.5 8s.328-3.562.838-4.753c.255-.596.547-1.046.846-1.34.296-.293.57-.407.816-.407ZM14.222 10.5H1.777M14.222 5.5H1.777"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Web;
