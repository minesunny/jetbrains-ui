import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinModifierProps = IconProps;

const KotlinModifierLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M1 1h4.644l-1.97 1.97a.75.75 0 0 0 0 1.06L5.645 6H1z"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28L4.558 3.5l2.22 2.22A.75.75 0 0 1 6.248 7H1a1 1 0 0 1-1-1zm5.644 0H1v5h4.644l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#834DF0"
    />
  </svg>
);

const KotlinModifierDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M1 1h4.644l-1.97 1.97a.75.75 0 0 0 0 1.06L5.645 6H1z"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28L4.558 3.5l2.22 2.22A.75.75 0 0 1 6.248 7H1a1 1 0 0 1-1-1zm5.644 0H1v5h4.644l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#A571E6"
    />
  </svg>
);

export const KotlinModifier: React.FC<KotlinModifierProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? KotlinModifierLight : KotlinModifierDark;

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
