import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RhtmlProps = IconProps;

const RhtmlLight: React.FC<SvgProps> = ({
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
      d="M10.307 4.02h1.191L5.668 12H4.475zM5.975 7.736q-.559 0-1.003-.245a1.8 1.8 0 0 1-.69-.684 2 2 0 0 1-.245-.997q0-.559.245-.998a1.8 1.8 0 0 1 .69-.684q.444-.245 1.003-.245.57 0 1.009.245.444.246.69.684.25.439.25.998t-.25.997q-.246.439-.69.684a2.03 2.03 0 0 1-1.009.245m0-.923a.94.94 0 0 0 .49-.125.9.9 0 0 0 .337-.36 1.1 1.1 0 0 0 .12-.518 1.1 1.1 0 0 0-.12-.519.91.91 0 0 0-.827-.49.9.9 0 0 0-.484.131.87.87 0 0 0-.331.36 1.14 1.14 0 0 0-.114.518q0 .29.114.518.12.228.33.36a.95.95 0 0 0 .485.125M10 12.137q-.558 0-1.003-.245a1.8 1.8 0 0 1-.69-.679 2 2 0 0 1-.245-1.003q0-.559.245-.997a1.8 1.8 0 0 1 .69-.684q.445-.245 1.003-.245.57 0 1.015.245.45.245.695.684.251.439.251.997 0 .564-.25 1.003a1.73 1.73 0 0 1-.696.679 2.07 2.07 0 0 1-1.015.245m0-.918a1 1 0 0 0 .496-.125.9.9 0 0 0 .337-.36q.125-.233.125-.524t-.126-.519a.86.86 0 0 0-.336-.353.94.94 0 0 0-.496-.131.9.9 0 0 0-.484.131.87.87 0 0 0-.33.353 1.14 1.14 0 0 0-.115.52q0 .29.114.524.12.227.33.359a.95.95 0 0 0 .485.125"
      fill="#369650"
    />
    <path
      d="M2.5 10.5.5 8l2-2.5M13.5 5.5l2 2.5-2 2.5"
      stroke="#369650"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RhtmlDark: React.FC<SvgProps> = ({
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
      d="M10.307 4.02h1.191L5.668 12H4.475zM5.975 7.736q-.559 0-1.003-.245a1.8 1.8 0 0 1-.69-.684 2 2 0 0 1-.245-.997q0-.559.245-.998a1.8 1.8 0 0 1 .69-.684q.444-.245 1.003-.245.57 0 1.009.245.444.246.69.684.25.439.25.998t-.25.997q-.246.439-.69.684a2.03 2.03 0 0 1-1.009.245m0-.923a.94.94 0 0 0 .49-.125.9.9 0 0 0 .337-.36 1.1 1.1 0 0 0 .12-.518 1.1 1.1 0 0 0-.12-.519.91.91 0 0 0-.827-.49.9.9 0 0 0-.484.131.87.87 0 0 0-.331.36 1.14 1.14 0 0 0-.114.518q0 .29.114.518.12.228.33.36a.95.95 0 0 0 .485.125M10 12.137q-.558 0-1.003-.245a1.8 1.8 0 0 1-.69-.679 2 2 0 0 1-.245-1.003q0-.559.245-.997a1.8 1.8 0 0 1 .69-.684q.445-.245 1.003-.245.57 0 1.015.245.45.245.695.684.251.439.251.997 0 .564-.25 1.003a1.73 1.73 0 0 1-.696.679 2.07 2.07 0 0 1-1.015.245m0-.918a1 1 0 0 0 .496-.125.9.9 0 0 0 .337-.36q.125-.233.125-.524t-.126-.519a.86.86 0 0 0-.336-.353.94.94 0 0 0-.496-.131.9.9 0 0 0-.484.131.87.87 0 0 0-.33.353 1.14 1.14 0 0 0-.115.52q0 .29.114.524.12.227.33.359a.95.95 0 0 0 .485.125"
      fill="#57965C"
    />
    <path
      d="M2.5 10.5.5 8l2-2.5M13.5 5.5l2 2.5-2 2.5"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Rhtml: React.FC<RhtmlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RhtmlLight : RhtmlDark;

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
