/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RepositoriesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RepositoriesLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.803 4.717.29.283H13a1 1 0 0 1 1 1v5h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H3v-1h-.25c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-2.45-1a2.5 2.5 0 0 0 4.9 0h2.55a.5.5 0 0 0 0-1h-2.55a2.5 2.5 0 0 0-4.9 0H5.5a.5.5 0 0 0 0 1z"
      fill="#6C707E"
    />
  </svg>
);

const RepositoriesDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.803 4.717.29.283H13a1 1 0 0 1 1 1v5h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H3v-1h-.25c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-2.45-1a2.5 2.5 0 0 0 4.9 0h2.55a.5.5 0 0 0 0-1h-2.55a2.5 2.5 0 0 0-4.9 0H5.5a.5.5 0 0 0 0 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const Repositories: FC<RepositoriesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RepositoriesLight : RepositoriesDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Repositories;
