import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DependencyProps = IconProps;

const DependencyLight: React.FC<SvgProps> = ({
  size,
  className,
  title,
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
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 15.076A7.03 7.03 0 0 1 12.528 9 7.03 7.03 0 0 1 16 15.072v.018c-2.066 1.194-4.73 1.237-7-.014m5-3.18a3.01 3.01 0 0 1-1.512 2.604 3.01 3.01 0 0 1-1.489-2.602v-.008c.886-.512 2.028-.53 3 .005"
      fill="#39207C"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8.03 8.03 0 0 1 4.032-6.868l.501-.286.498.29a8 8 0 0 1 1.793 1.429"
      fill="#FAF5FF"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8 8 0 0 1 .076-1H8a6 6 0 1 1 5.952-5.236q.468.37.872.801"
      fill="#834DF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.2 10.872a2 2 0 0 1-.418.316q-.52.3-1.202.3-.741 0-1.323-.357a2.45 2.45 0 0 1-.903-.998q-.326-.64-.326-1.46 0-.818.326-1.459t.903-.997Q6.84 5.86 7.58 5.86q.683 0 1.202.304.444.253.72.687v-2.84h.96v5.296c-.486.468-.91.994-1.261 1.565m.091-1.185q.173-.344.21-.77V8.43a2.1 2.1 0 0 0-.21-.77 1.66 1.66 0 0 0-.62-.687 1.7 1.7 0 0 0-.907-.247q-.51 0-.903.247a1.7 1.7 0 0 0-.615.687 2.3 2.3 0 0 0-.215 1.014q0 .572.215 1.013.22.44.615.688.393.246.903.246t.908-.246.62-.688"
      fill="#834DF0"
    />
  </svg>
);

const DependencyDark: React.FC<SvgProps> = ({
  size,
  className,
  title,
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
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 15.076A7.03 7.03 0 0 1 12.528 9 7.03 7.03 0 0 1 16 15.072v.018c-2.066 1.194-4.73 1.237-7-.014m5-3.18a3.01 3.01 0 0 1-1.512 2.604 3.01 3.01 0 0 1-1.489-2.602v-.008c.886-.512 2.028-.53 3 .005"
      fill="#fff"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8.03 8.03 0 0 1 4.032-6.868l.501-.286.498.29a8 8 0 0 1 1.793 1.429"
      fill="#2F2936"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8 8 0 0 1 .076-1H8a6 6 0 1 1 5.952-5.236q.468.37.872.801"
      fill="#A571E6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.2 10.872a2 2 0 0 1-.418.316q-.52.3-1.202.3-.741 0-1.323-.357a2.45 2.45 0 0 1-.903-.998q-.326-.64-.326-1.46 0-.818.326-1.459t.903-.997Q6.84 5.86 7.58 5.86q.683 0 1.202.304.444.253.72.687v-2.84h.96v5.296c-.486.468-.91.994-1.261 1.565m.091-1.185q.173-.344.21-.77V8.43a2.1 2.1 0 0 0-.21-.77 1.66 1.66 0 0 0-.62-.687 1.7 1.7 0 0 0-.907-.247q-.51 0-.903.247a1.7 1.7 0 0 0-.615.687 2.3 2.3 0 0 0-.215 1.014q0 .572.215 1.013.22.44.615.688.393.246.903.246t.908-.246.62-.688"
      fill="#A571E6"
    />
  </svg>
);

export const Dependency: React.FC<DependencyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DependencyLight : DependencyDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      title={title}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
