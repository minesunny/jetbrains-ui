import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type Scala16Props = IconProps;

const Scala16Light: React.FC<SvgProps> = ({
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
      d="M13 9.542V2.105a1 1 0 0 0-1.1-.995l-8 .8a1 1 0 0 0-.9.995v10.99a1 1 0 0 0 1.1.995l8-.8a1 1 0 0 0 .9-.995V9.542M4 2.905v2.992l8-.8V2.105zm8 3.197-8 .8v2.995l8-.8zm0 4-8 .8v2.993l8-.8z"
      fill="#DB3B4B"
    />
    <path
      d="M4 5.898V2.905l8-.8v2.993zM4 6.902l8-.8v2.996l-8 .8zM4 10.903l8-.8v2.992l-8 .8z"
      fill="#FFF7F7"
    />
  </svg>
);

const Scala16Dark: React.FC<SvgProps> = ({
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
      d="M13 9.542V2.105a1 1 0 0 0-1.1-.995l-8 .8a1 1 0 0 0-.9.995v10.99a1 1 0 0 0 1.1.995l8-.8a1 1 0 0 0 .9-.995V9.542M4 2.905v2.992l8-.8V2.105zm8 3.197-8 .8v2.995l8-.8zm0 4-8 .8v2.993l8-.8z"
      fill="#DB5C5C"
    />
    <path
      d="M4 5.898V2.905l8-.8v2.993zM4 6.902l8-.8v2.996l-8 .8zM4 10.903l8-.8v2.992l-8 .8z"
      fill="#402929"
    />
  </svg>
);

export const Scala16: React.FC<Scala16Props> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? Scala16Light : Scala16Dark;

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
