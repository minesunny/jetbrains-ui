import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AbstractFieldVariable1Props = IconProps;

const AbstractFieldVariable1Light: React.FC<SvgProps> = ({
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
    <path d="M12.949 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9" fill="#FFF7F7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.913 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303 5.97 5.97 0 0 0-3.303-1.683l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.073 7.06l-.988-.155A6.97 6.97 0 0 1 3.049 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01a6.97 6.97 0 0 0 1.964 3.855 6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.073 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      fill="#DB3B4B"
    />
    <path
      d="M7.547 11.4h.92l2.355-6H9.791l-1.746 4.705L6.24 5.4H5.18z"
      fill="#DB3B4B"
    />
  </svg>
);

const AbstractFieldVariable1Dark: React.FC<SvgProps> = ({
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
    <path d="M12.949 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9" fill="#402929" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.913 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303 5.97 5.97 0 0 0-3.303-1.683l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.073 7.06l-.988-.155A6.97 6.97 0 0 1 3.049 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01a6.97 6.97 0 0 0 1.964 3.855 6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.073 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      fill="#DB5C5C"
    />
    <path
      d="M7.547 11.4h.92l2.355-6H9.791l-1.746 4.705L6.24 5.4H5.18z"
      fill="#DB5C5C"
    />
  </svg>
);

export const AbstractFieldVariable1: React.FC<AbstractFieldVariable1Props> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AbstractFieldVariable1Light : AbstractFieldVariable1Dark;

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
