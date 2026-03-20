import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type Kotlin_activityProps = IconProps;

const Kotlin_activityLight: React.FC<SvgProps> = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#834DF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.252 1.066a.5.5 0 0 1 .682.186l1.046 1.83A7.96 7.96 0 0 1 8 2c1.466 0 2.839.394 4.02 1.082l1.046-1.83a.5.5 0 1 1 .868.496l-1.08 1.892A8 8 0 0 1 15.747 8H11a1 1 0 1 0 0-2 1 1 0 0 0 0 2h-1a2 2 0 0 0-2 2H0a7.99 7.99 0 0 1 3.147-6.36L2.066 1.748a.5.5 0 0 1 .186-.682M6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#55A76A"
    />
  </svg>
);

const Kotlin_activityDark: React.FC<SvgProps> = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#A571E6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.252 1.066a.5.5 0 0 1 .682.186l1.046 1.83A7.96 7.96 0 0 1 8 2c1.466 0 2.839.394 4.02 1.082l1.046-1.83a.5.5 0 1 1 .868.496l-1.08 1.892A8 8 0 0 1 15.747 8H11a1 1 0 1 0 0-2 1 1 0 0 0 0 2h-1a2 2 0 0 0-2 2H0a7.99 7.99 0 0 1 3.147-6.36L2.066 1.748a.5.5 0 0 1 .186-.682M6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#57965C"
    />
  </svg>
);

export const Kotlin_activity: React.FC<Kotlin_activityProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? Kotlin_activityLight : Kotlin_activityDark;

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
