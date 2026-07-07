/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type AmazonEmrProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const AmazonEmrLight: FC<
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
      d="M7.995 1 1 4.043v2.775l6.995.5L15 6.478V4.043zM14 5.5v-.8L8.995 2.524V5.5z"
      fill="#6C707E"
    />
    <path
      d="m4 13.8-1-.6V8.304h1zM1 12l1 .6V8.304H1zM6 15l-1-.6V8.3h1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 12.565v-4.26H7V15zM8 13.65l6-1.826v-2.52H8z"
      fill="#6C707E"
    />
  </svg>
);

const AmazonEmrDark: FC<
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
      d="M7.995 1 1 4.043v2.775l6.995.5L15 6.478V4.043zM14 5.5v-.8L8.995 2.524V5.5z"
      fill="#CED0D6"
    />
    <path
      d="m4 13.8-1-.6V8.304h1zM1 12l1 .6V8.304H1zM6 15l-1-.6V8.3h1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 12.565v-4.26H7V15zM8 13.65l6-1.826v-2.52H8z"
      fill="#CED0D6"
    />
  </svg>
);

export const AmazonEmr: FC<AmazonEmrProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AmazonEmrLight : AmazonEmrDark;

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

export default AmazonEmr;
