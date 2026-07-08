/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MavenBindChecksumProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const MavenBindChecksum = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MavenBindChecksumProps) => (
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
      d="M15.224 6.499c.358-1.563 0-3.298-2.062-3.298-1.577 0-2.539.588-3.677 1.561-.198-.867-.802-1.53-2.036-1.556-1.265-.07-2.372.46-3.321 1.207.1-.453-.113-.926-.629-1.03-.454-.093-.9.183-.996.616L1.775 7.26a3 3 0 0 1 1.766-.212l.197-.882.002-.003v.007c.71-.995 1.982-1.541 2.91-1.442.78.097 1.317.647 1.055 1.766l-.988 4.478.016.027h1.159a4 4 0 0 1 .164-.175l.556-.556.915-4.102c1.312-1.84 4.547-2.147 3.977.332l-.11.501c.56.003 1.12.135 1.632.397z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M1 12H5V15H1z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 0 1 2 0v1H2zm-1 5v-3h4v3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MavenBindChecksum;
