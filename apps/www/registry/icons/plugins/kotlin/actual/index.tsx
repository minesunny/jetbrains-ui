import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ActualProps = IconProps;

const ActualLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <rect
      x=".293"
      y="8.071"
      width="11"
      height="11"
      rx=".5"
      transform="rotate(-45 .293 8.071)"
      fill="#FFF4EB"
      stroke="#E66D17"
    />
    <path
      d="m5.14 10.771 2.287-6.3h1.206l2.353 6.3H9.861l-.535-1.516H6.792l-.5 1.516zm1.931-2.394H9.02l-.905-2.529-.094-.391-.1.391z"
      fill="#E66D17"
    />
  </svg>
);

const ActualDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <rect
      x=".293"
      y="8.071"
      width="11"
      height="11"
      rx=".5"
      transform="rotate(-45 .293 8.071)"
      fill="#45322B"
      stroke="#C77D55"
    />
    <path
      d="m5.14 10.771 2.287-6.3h1.206l2.353 6.3H9.861l-.535-1.516H6.792l-.5 1.516zm1.931-2.394H9.02l-.905-2.529-.094-.391-.1.391z"
      fill="#C77D55"
    />
  </svg>
);

export const Actual: React.FC<ActualProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ActualLight : ActualDark;

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
