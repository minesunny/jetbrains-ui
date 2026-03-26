import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EmbeddedProps = IconProps;

const EmbeddedLight: React.FC<SvgProps> = ({
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
      d="M7.668 12.99a5 5 0 1 1 5.321-5.322c-.308.145-.64.247-.99.297A4 4 0 1 0 7.966 12c-.05.349-.152.681-.297.99"
      fill="#6C707E"
    />
    <circle cx="11.5" cy="4.5" r="3" fill="#FFF4EB" stroke="#E66D17" />
    <circle cx="4.5" cy="11.5" r="3" fill="#FFF4EB" stroke="#E66D17" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 5v-5h5v5z"
      fill="#6C707E"
    />
    <path fill="#55A76A" d="M11 11H14V14H11z" />
  </svg>
);

const EmbeddedDark: React.FC<SvgProps> = ({
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
      d="M7.668 12.99a5 5 0 1 1 5.321-5.322c-.308.145-.64.247-.99.297A4 4 0 1 0 7.966 12c-.05.349-.152.681-.297.99"
      fill="#CED0D6"
    />
    <circle cx="11.5" cy="4.5" r="3" fill="#45322B" stroke="#C77D55" />
    <circle cx="4.5" cy="11.5" r="3" fill="#45322B" stroke="#C77D55" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 5v-5h5v5z"
      fill="#CED0D6"
    />
    <path fill="#57965C" d="M11 11H14V14H11z" />
  </svg>
);

export const Embedded: React.FC<EmbeddedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EmbeddedLight : EmbeddedDark;

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
