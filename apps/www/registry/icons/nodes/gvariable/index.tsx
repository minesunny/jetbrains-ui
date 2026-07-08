/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type GvariableProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Gvariable = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: GvariableProps) => (
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
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M7.5 11.37h1V13h-1zM7.5 3h1v1.64h-1zm.41 8.516q-.707 0-1.256-.257a2.1 2.1 0 0 1-.859-.727 1.93 1.93 0 0 1-.305-1.077h.994q0 .35.18.62.183.273.509.428.33.15.751.15.413 0 .728-.14t.485-.393a1 1 0 0 0 .175-.582q0-.417-.253-.713a1.07 1.07 0 0 0-.664-.374L7.27 8.262a2.1 2.1 0 0 1-.859-.344 1.77 1.77 0 0 1-.557-.65 1.9 1.9 0 0 1-.194-.854q0-.547.286-.984a1.94 1.94 0 0 1 .795-.684 2.6 2.6 0 0 1 1.154-.252q.66 0 1.174.247a1.9 1.9 0 0 1 .8.679q.286.431.286.99h-.994a.95.95 0 0 0-.16-.544 1 1 0 0 0-.441-.373 1.5 1.5 0 0 0-.65-.136 1.6 1.6 0 0 0-.66.13 1.03 1.03 0 0 0-.441.36.96.96 0 0 0-.155.543.9.9 0 0 0 .233.626q.232.261.616.33l1.125.189a2.03 2.03 0 0 1 1.47 1.081q.212.421.213.888 0 .566-.306 1.028-.3.456-.849.723-.547.261-1.246.261"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Gvariable;
