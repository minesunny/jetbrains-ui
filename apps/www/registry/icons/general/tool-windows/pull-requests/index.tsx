/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type PullRequestsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const PullRequestsLight: FC<
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
    <circle cx={12.25} cy={12} r={2} stroke="#6C707E" />
    <path d="M12.25 10V5.6a1.6 1.6 0 0 0-1.6-1.6H8" stroke="#6C707E" />
    <path d="m9.75 6-2-2 2-2" stroke="#6C707E" strokeLinecap="round" />
    <circle cx={3.75} cy={12} r={2} stroke="#6C707E" />
    <path d="M3.75 6v4" stroke="#6C707E" />
    <circle cx={3.75} cy={4} r={2} stroke="#6C707E" />
  </svg>
);

const PullRequestsDark: FC<
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
    <circle cx={12.25} cy={12} r={2} stroke="#CED0D6" />
    <path d="M12.25 10V5.6a1.6 1.6 0 0 0-1.6-1.6H8" stroke="#CED0D6" />
    <path d="m9.75 6-2-2 2-2" stroke="#CED0D6" strokeLinecap="round" />
    <circle cx={3.75} cy={12} r={2} stroke="#CED0D6" />
    <path d="M3.75 6v4" stroke="#CED0D6" />
    <circle cx={3.75} cy={4} r={2} stroke="#CED0D6" />
  </svg>
);

export const PullRequests: FC<PullRequestsProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PullRequestsLight : PullRequestsDark;

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

export default PullRequests;
