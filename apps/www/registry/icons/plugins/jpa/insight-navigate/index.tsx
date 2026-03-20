import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type InsightNavigateProps = IconProps;

const InsightNavigateLight: React.FC<SvgProps> = ({
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
      d="M10.146 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 6H5.76c-.68 0-1 .841-.491 1.293l4.134 3.675C10.597 12.028 9.847 14 8.252 14H2.5a.5.5 0 0 1 0-1h5.752c.676 0 .993-.835.488-1.284L4.605 8.04C3.41 6.978 4.161 5 5.761 5h6.532l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
  </svg>
);

const InsightNavigateDark: React.FC<SvgProps> = ({
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
      d="M10.146 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 6H5.76c-.68 0-1 .841-.491 1.293l4.134 3.675C10.597 12.028 9.847 14 8.252 14H2.5a.5.5 0 0 1 0-1h5.752c.676 0 .993-.835.488-1.284L4.605 8.04C3.41 6.978 4.161 5 5.761 5h6.532l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
  </svg>
);

export const InsightNavigate: React.FC<InsightNavigateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InsightNavigateLight : InsightNavigateDark;

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
