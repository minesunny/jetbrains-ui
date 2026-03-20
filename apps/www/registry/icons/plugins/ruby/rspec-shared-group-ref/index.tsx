import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RspecSharedGroupRefProps = IconProps;

const RspecSharedGroupRefLight: React.FC<SvgProps> = ({
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
      d="M15 9v3.133C15 13.164 14.216 14 13.25 14H2.75C1.784 14 1 13.164 1 12.133V3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8 3.513c.003.38.15.758.44 1.048.292.293.676.439 1.06.439H11v2.5A1.5 1.5 0 0 0 12.5 9z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#6C707E"
    />
    <path
      d="M15 9v3.133C15 13.164 14.216 14 13.25 14H2.75C1.784 14 1 13.164 1 12.133V3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8 3.513c.003.38.15.758.44 1.048.292.293.676.439 1.06.439H8.094L6.038 3H2.75c-.354 0-.75.326-.75.867v8.266c0 .54.396.867.75.867h10.5c.354 0 .75-.326.75-.867V9z"
      fill="#208A3C"
    />
  </svg>
);

const RspecSharedGroupRefDark: React.FC<SvgProps> = ({
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
      d="M15 9v3.133C15 13.164 14.216 14 13.25 14H2.75C1.784 14 1 13.164 1 12.133V3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8 3.513c.003.38.15.758.44 1.048.292.293.676.439 1.06.439H11v2.5A1.5 1.5 0 0 0 12.5 9z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#CED0D6"
    />
    <path
      d="M15 9v3.133C15 13.164 14.216 14 13.25 14H2.75C1.784 14 1 13.164 1 12.133V3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8 3.513c.003.38.15.758.44 1.048.292.293.676.439 1.06.439H8.094L6.038 3H2.75c-.354 0-.75.326-.75.867v8.266c0 .54.396.867.75.867h10.5c.354 0 .75-.326.75-.867V9z"
      fill="#57965C"
    />
  </svg>
);

export const RspecSharedGroupRef: React.FC<RspecSharedGroupRefProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RspecSharedGroupRefLight : RspecSharedGroupRefDark;

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
