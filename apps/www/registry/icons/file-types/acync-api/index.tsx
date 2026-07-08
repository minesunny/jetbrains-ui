/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AcyncApiProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AcyncApi = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AcyncApiProps) => (
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
      d="M11.964 11A3.5 3.5 0 0 1 8.5 14h-1a3.5 3.5 0 0 1-3.465-3H3.027A4.5 4.5 0 0 0 7.5 15h1a4.5 4.5 0 0 0 4.472-4zM4.035 5A3.5 3.5 0 0 1 7.5 2h1a3.5 3.5 0 0 1 3.464 3h1.008A4.5 4.5 0 0 0 8.5 1h-1a4.5 4.5 0 0 0-4.473 4z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.688 10.39-5-4 .624-.78 5 4zm3 0-5-4 .624-.78 5 4z"
      className="fill-[#369650] dark:fill-[#57965C]"
    />
  </svg>
);

export default AcyncApi;
