import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinProps = IconProps;

const KotlinLight: React.FC<SvgProps> = ({
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
      d="M13.334 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.996a.5.5 0 0 1 .338.869L8.684 7.63a.5.5 0 0 0 0 .738z"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h9.996c.912 0 1.348 1.12.676 1.737L9.022 8l4.65 4.263c.672.616.236 1.737-.676 1.737H3a1 1 0 0 1-1-1zm10.996 0H3v10h9.996l-4.65-4.263a1 1 0 0 1 0-1.474z"
      fill="#834DF0"
    />
  </svg>
);

const KotlinDark: React.FC<SvgProps> = ({
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
      d="M13.334 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.996a.5.5 0 0 1 .338.869L8.684 7.63a.5.5 0 0 0 0 .738z"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h9.996c.912 0 1.348 1.12.676 1.737L9.022 8l4.65 4.263c.672.616.236 1.737-.676 1.737H3a1 1 0 0 1-1-1zm10.996 0H3v10h9.996l-4.65-4.263a1 1 0 0 1 0-1.474z"
      fill="#A571E6"
    />
  </svg>
);

export const Kotlin: React.FC<KotlinProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KotlinLight : KotlinDark;

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
