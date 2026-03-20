import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AbstractTypeAliasProps = IconProps;

const AbstractTypeAliasLight: React.FC<SvgProps> = ({
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
    <path d="M12.949 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9" fill="#FAF5FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.913 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303 5.97 5.97 0 0 0-3.303-1.683l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.073 7.06l-.988-.155A6.97 6.97 0 0 1 3.049 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01a6.97 6.97 0 0 0 1.964 3.855 6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.073 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      fill="#834DF0"
    />
    <path
      d="M8.461 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      fill="#834DF0"
    />
  </svg>
);

const AbstractTypeAliasDark: React.FC<SvgProps> = ({
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
    <path d="M12.949 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9" fill="#2F2936" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.913 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303 5.97 5.97 0 0 0-3.303-1.683l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.073 7.06l-.988-.155A6.97 6.97 0 0 1 3.049 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01a6.97 6.97 0 0 0 1.964 3.855 6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.073 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      fill="#B589EC"
    />
    <path
      d="M8.461 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      fill="#B589EC"
    />
  </svg>
);

export const AbstractTypeAlias: React.FC<AbstractTypeAliasProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AbstractTypeAliasLight : AbstractTypeAliasDark;

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
