import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ScalaHtmlProps = IconProps;

const ScalaHtmlLight: React.FC<SvgProps> = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB3B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.474 4.132a.6.6 0 0 1-.105.842L2.478 8l3.891 3.026a.6.6 0 0 1-.737.947L.523 8l5.11-3.974a.6.6 0 0 1 .841.106M9.527 4.132a.6.6 0 0 0 .105.842L13.523 8h1.955l-5.109-3.974a.6.6 0 0 0-.842.106"
      fill="#369650"
    />
  </svg>
);

const ScalaHtmlDark: React.FC<SvgProps> = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.474 4.132a.6.6 0 0 1-.105.842L2.478 8l3.891 3.026a.6.6 0 0 1-.737.947L.523 8l5.11-3.974a.6.6 0 0 1 .841.106M9.527 4.132a.6.6 0 0 0 .105.842L13.523 8h1.955l-5.109-3.974a.6.6 0 0 0-.842.106"
      fill="#57965C"
    />
  </svg>
);

export const ScalaHtml: React.FC<ScalaHtmlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScalaHtmlLight : ScalaHtmlDark;

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
