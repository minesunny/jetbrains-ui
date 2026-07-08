/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type FeatureAnswerProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const FeatureAnswer = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: FeatureAnswerProps) => (
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
      d="M7.592 8.521q.122-.275.297-.473.177-.198.473-.473.286-.258.451-.445.172-.187.286-.435.116-.253.116-.561 0-.346-.149-.616A1 1 0 0 0 8.66 5.1a1.2 1.2 0 0 0-.605-.148q-.38 0-.67.165a1.14 1.14 0 0 0-.52.612c-.106.28-.334.532-.633.532s-.55-.246-.49-.539a2.1 2.1 0 0 1 .245-.65q.297-.51.836-.792Q7.362 4 8.065 4q.672 0 1.183.258.512.26.792.732.28.468.275 1.078 0 .473-.149.836-.148.357-.363.6a7 7 0 0 1-.555.544q-.253.225-.396.38a1.5 1.5 0 0 0-.242.346 1 1 0 0 0-.044.11c-.088.274-.283.517-.572.517s-.54-.236-.5-.522a1.3 1.3 0 0 1 .098-.358"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <circle
      cx={8}
      cy={10.75}
      r={0.75}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default FeatureAnswer;
