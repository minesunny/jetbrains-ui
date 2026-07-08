/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type SuggestedRefactoringBulbProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const SuggestedRefactoringBulb = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: SuggestedRefactoringBulbProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
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
      d="M4 14v-3l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L7 14zm1-1v-1.586l4.354-4.353 1.585 1.585L6.586 13zm6.646-5.06 1.35-1.35-1.586-1.586-1.35 1.35z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 9H0V0h3.035q1.053 0 1.728.36.675.354 1 .978.324.622.324 1.416 0 .795-.324 1.408-.325.614-.996.965-.167.086-.357.15l1.383 2.516-.813.813-1.698-3.137a6 6 0 0 1-.23.004H1zm2.017-4.51H1V1h2c.485 0 .875.04 1.17.189q.444.219.645.622.202.405.202.943 0 .54-.202.93a1.33 1.33 0 0 1-.64.596q-.438.21-1.158.21"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default SuggestedRefactoringBulb;
