/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ApacheDerbyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ApacheDerbyLight: FC<
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
      d="M7.318 9.203c5.754-4.583 7.654-2.42 7.654-2.42.04.107-.028.23-.028.23l-.003-.001c-.112.357-.985.837-2.34.891-1.16.046-2.164.166-2.81.26-.871.54-1.695 1.14-2.366 1.64-.045.033-.142.119-.28.24-.68.594-2.347 2.05-3.607 2.472-.978.327-1.8.39-2.229-.17a1.1 1.1 0 0 1-.255-.575C.782 10.039 3.169 9 3.169 9s.168.976.286 1.132c1.39-.096 3.174-.686 3.863-.929"
      fill="#6C707E"
    />
    <path
      d="M3.174 8.856s-.926-3.42 1.347-4.723c.76-.435 2.235-.91 2.969-1.007s2.463-.405 3.351 1.062c.325.535.748 1.483.837 1.826-.929 1.013-7.475 2.777-8.504 2.842"
      fill="#6C707E"
    />
  </svg>
);

const ApacheDerbyDark: FC<
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
      d="M7.318 9.203c5.754-4.583 7.654-2.42 7.654-2.42.04.107-.028.23-.028.23l-.003-.001c-.112.357-.985.837-2.34.891-1.16.046-2.164.166-2.81.26-.871.54-1.695 1.14-2.366 1.64-.045.033-.142.119-.28.24-.68.594-2.347 2.05-3.607 2.472-.978.327-1.8.39-2.229-.17a1.1 1.1 0 0 1-.255-.575C.782 10.039 3.169 9 3.169 9s.168.976.286 1.132c1.39-.096 3.174-.686 3.863-.929"
      fill="#EBECF0"
    />
    <path
      d="M3.174 8.856s-.926-3.42 1.347-4.723c.76-.435 2.235-.91 2.969-1.007s2.463-.405 3.351 1.062c.325.535.748 1.483.837 1.826-.929 1.013-7.475 2.777-8.504 2.842"
      fill="#EBECF0"
    />
  </svg>
);

export const ApacheDerby: FC<ApacheDerbyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ApacheDerbyLight : ApacheDerbyDark;

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

export default ApacheDerby;
