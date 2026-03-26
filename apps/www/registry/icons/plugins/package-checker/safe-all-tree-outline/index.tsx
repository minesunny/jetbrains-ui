import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SafeAllTreeOutlineProps = IconProps;

const SafeAllTreeOutlineLight: React.FC<SvgProps> = ({
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
      d="m8 1 6 2.5v5.679c0 1.766-.892 3.057-2.032 4.079-.839.751-1.86 1.395-2.797 1.987-.31.196-.613.387-.896.573L8 16l-.275-.182a53 53 0 0 0-.896-.573c-.937-.592-1.958-1.236-2.797-1.987C2.892 12.236 2 10.945 2 9.178V3.5z"
      fill="#F2FCF3"
    />
    <path
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      stroke="#208A3C"
    />
    <path
      d="M5.5 8.5 7 10l3.5-3.5"
      stroke="#208A3C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SafeAllTreeOutlineDark: React.FC<SvgProps> = ({
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
      d="m8 1 6 2.5v5.679c0 1.766-.892 3.057-2.032 4.079-.839.751-1.86 1.395-2.797 1.987-.31.196-.613.387-.896.573L8 16l-.275-.182a53 53 0 0 0-.896-.573c-.937-.592-1.958-1.236-2.797-1.987C2.892 12.236 2 10.945 2 9.178V3.5z"
      fill="#253627"
    />
    <path
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      stroke="#57965C"
    />
    <path
      d="M5.5 8.5 7 10l3.5-3.5"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SafeAllTreeOutline: React.FC<SafeAllTreeOutlineProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SafeAllTreeOutlineLight : SafeAllTreeOutlineDark;

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
