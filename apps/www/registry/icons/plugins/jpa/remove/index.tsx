import React from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type RemoveProps = SvgProps;

const RemoveLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 7.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0-.5.5"
      fill="#6C707E"
    />
  </svg>
);

const RemoveDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 7.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0-.5.5"
      fill="#CED0D6"
    />
  </svg>
);

export const Remove: React.FC<RemoveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RemoveLight : RemoveDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
