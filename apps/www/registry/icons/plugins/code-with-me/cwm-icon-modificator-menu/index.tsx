import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmIconModificatorMenuProps = IconProps;

const CwmIconModificatorMenuLight: React.FC<SvgProps> = ({
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
      d="M6.965 12.999a3.5 3.5 0 1 1 0-.998L7 12h3.5a.5.5 0 0 1 0 1H10v1.5a.5.5 0 0 1-1 0V13H7zM6 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      fill="#6C707E"
    />
  </svg>
);

const CwmIconModificatorMenuDark: React.FC<SvgProps> = ({
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
      d="M6.965 12.999a3.5 3.5 0 1 1 0-.998L7 12h3.5a.5.5 0 0 1 0 1H10v1.5a.5.5 0 0 1-1 0V13H7zM6 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      fill="#CED0D6"
    />
  </svg>
);

export const CwmIconModificatorMenu: React.FC<CwmIconModificatorMenuProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmIconModificatorMenuLight : CwmIconModificatorMenuDark;

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
