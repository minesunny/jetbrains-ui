/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Operator = ({
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
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V8c0 1.127.812 2.055 1.951 2.055"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Operator;
