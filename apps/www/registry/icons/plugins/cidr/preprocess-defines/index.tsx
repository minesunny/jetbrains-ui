import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PreprocessDefinesProps = IconProps;

const PreprocessDefinesLight: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.432 6 .445-2H7.9l-.444 2h1.975l.445-2H10.9l-.444 2H11.5v1h-1.266L9.79 9H11v1H9.568l-.445 2H8.1l.444-2H6.568l-.445 2H5.1l.444-2H4.5V9h1.266l.444-2H5V6zm.358 3h1.976l.444-2H7.234z"
      fill="#208A3C"
    />
  </svg>
);

const PreprocessDefinesDark: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#253627"
      stroke="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.432 6 .445-2H7.9l-.444 2h1.975l.445-2H10.9l-.444 2H11.5v1h-1.266L9.79 9H11v1H9.568l-.445 2H8.1l.444-2H6.568l-.445 2H5.1l.444-2H4.5V9h1.266l.444-2H5V6zm.358 3h1.976l.444-2H7.234z"
      fill="#57965C"
    />
  </svg>
);

export const PreprocessDefines: React.FC<PreprocessDefinesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PreprocessDefinesLight : PreprocessDefinesDark;

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
