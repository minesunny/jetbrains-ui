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
    <circle
      cx={10}
      cy={8}
      r={5.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <circle
      cx={6}
      cy={8}
      r={5.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M3.999 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H4.98V11H4zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H4.979v1.948z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ProcedureGroup;
