/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ThreadsProps = SvgProps;

const ThreadsLight: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="m11.5 10.5 2 3h-11l2-3v-5l-2-3h11l-2 3z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path d="M4.5 5.5h7m-7 5h7" stroke="#6C707E" strokeLinejoin="round" />
  </svg>
);

const ThreadsDark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="m11.5 10.5 2 3h-11l2-3v-5l-2-3h11l-2 3z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path d="M4.5 5.5h7m-7 5h7" stroke="#CED0D6" strokeLinejoin="round" />
  </svg>
);

export const Threads: FC<ThreadsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ThreadsLight : ThreadsDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Threads;
