import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RubyGemsProps = IconProps;

const RubyGemsLight: React.FC<SvgProps> = ({
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
      d="M7.256 1.001a1.5 1.5 0 0 1 1.488 0l5 2.857a1.5 1.5 0 0 1 .756 1.303v5.678a1.5 1.5 0 0 1-.756 1.303l-5 2.857a1.5 1.5 0 0 1-1.488 0l-5-2.857a1.5 1.5 0 0 1-.756-1.303V5.16a1.5 1.5 0 0 1 .756-1.303z"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M5.9 4.5h4.198c.129 0 .253.05.346.14l1.994 1.913L8 12.41 3.55 6.553l2.006-1.914A.5.5 0 0 1 5.9 4.5ZM12 6.5H4"
      stroke="#DB3B4B"
    />
  </svg>
);

const RubyGemsDark: React.FC<SvgProps> = ({
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
      d="M7.256 1.001a1.5 1.5 0 0 1 1.488 0l5 2.857a1.5 1.5 0 0 1 .756 1.303v5.678a1.5 1.5 0 0 1-.756 1.303l-5 2.857a1.5 1.5 0 0 1-1.488 0l-5-2.857a1.5 1.5 0 0 1-.756-1.303V5.16a1.5 1.5 0 0 1 .756-1.303z"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M5.9 4.5h4.198c.129 0 .253.05.346.14l1.994 1.913L8 12.41 3.55 6.553l2.006-1.914A.5.5 0 0 1 5.9 4.5ZM12 6.5H4"
      stroke="#DB5C5C"
    />
  </svg>
);

export const RubyGems: React.FC<RubyGemsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RubyGemsLight : RubyGemsDark;

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
