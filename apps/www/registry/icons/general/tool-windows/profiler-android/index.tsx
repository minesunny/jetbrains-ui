/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ProfilerAndroidProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ProfilerAndroid = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ProfilerAndroidProps) => (
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
      d="M1.5 10a6.5 6.5 0 0 1 13 0 1.5 1.5 0 0 1 .988.371q.012-.19.012-.371a7.5 7.5 0 0 0-15 0c0 1.16.377 2.68.866 3.73.079.168.25.27.435.27h5.615q.236-.537.584-1H2.14c-.37-.913-.64-2.11-.64-3"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M9.786 10.027a1.8 1.8 0 0 0-.095-.844l2.466-1.98a.6.6 0 1 0-.751-.936l-2.478 1.99A1.8 1.8 0 1 0 8 11.6h.003a1.5 1.5 0 0 1 .373-1.094.8.8 0 1 1 .278-.245l.074-.047c.33-.199.707-.255 1.058-.187"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.929 11.243a.5.5 0 0 0-.858.514l.596.993A4 4 0 0 0 8 16h8a4 4 0 0 0-1.667-3.25l.596-.993a.5.5 0 1 0-.858-.514l-.617 1.03A4 4 0 0 0 12 12a4 4 0 0 0-1.453.272zM10 14h1v1h-1zm4 0h-1v1h1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ProfilerAndroid;
