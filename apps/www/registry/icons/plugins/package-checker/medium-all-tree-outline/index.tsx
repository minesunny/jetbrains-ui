import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MediumAllTreeOutlineProps = IconProps;

const MediumAllTreeOutlineLight: React.FC<SvgProps> = ({
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
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      fill="#FFFAEB"
      stroke="#C27D04"
    />
    <path
      d="M5 5h1.35L8 9.6 9.65 5H11v6h-1V7l-1.409 4H7.5L6 7v4H5z"
      fill="#C27D04"
    />
  </svg>
);

const MediumAllTreeOutlineDark: React.FC<SvgProps> = ({
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
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      fill="#3D3223"
      stroke="#D6AE58"
    />
    <path
      d="M5 5h1.35L8 9.6 9.65 5H11v6h-1V7l-1.409 4H7.5L6 7v4H5z"
      fill="#D6AE58"
    />
  </svg>
);

export const MediumAllTreeOutline: React.FC<MediumAllTreeOutlineProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MediumAllTreeOutlineLight : MediumAllTreeOutlineDark;

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
