/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type FeedbackProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Feedback = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: FeedbackProps) => (
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
      d="M13 8.121V10a1 1 0 0 1-1 1H7a1 1 0 0 0-.568.177L3 13.547V5a1 1 0 0 1 1-1h4.879l1-1H4a2 2 0 0 0-2 2v9.5a.5.5 0 0 0 .784.412L7 12h5a2 2 0 0 0 2-2V7.121z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.412 1.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 6.293V9h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 4.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 5l-3 3H9V6.707z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Feedback;
