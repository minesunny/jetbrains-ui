import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AwsGlueProps = IconProps;

const AwsGlueLight: React.FC<SvgProps> = ({
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
    <path d="m12.773 5.144 1.23.37v1.59l-1.23-.089z" fill="#F58435" />
    <path
      d="M11.113 5.397v1.716l1.659-.098V5.144zM3.219 4.276 2 4.656v2.496l1.219-.098z"
      fill="#9D5025"
    />
    <path d="M4.887 4.53v2.622L3.22 7.054V4.276z" fill="#E66D17" />
    <path d="M13.999 8v2l-5.995 1.51V8.049z" fill="#F58435" />
    <path d="M2 8v2l6.005 1.51V8.049z" fill="#9D5025" />
    <path d="m8.004 1 1.768.848v4.914l-1.768-.156z" fill="#F58435" />
    <path d="m8.005 1-1.778.868v4.904l1.778-.166z" fill="#9D5025" />
    <path d="M9.762 12.446v1.716L8.004 15V13.1z" fill="#F58435" />
    <path d="M6.246 12.446v1.716L8.005 15V13.1z" fill="#9D5025" />
    <path d="m8.005 11.949 1.758.496-1.758.653-1.759-.653z" fill="#FEB57E" />
  </svg>
);

const AwsGlueDark: React.FC<SvgProps> = ({
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
    <path d="m12.773 5.144 1.23.37v1.59l-1.23-.089z" fill="#F58435" />
    <path
      d="M11.113 5.397v1.716l1.659-.098V5.144zM3.219 4.276 2 4.656v2.496l1.219-.098z"
      fill="#9D5025"
    />
    <path
      d="M4.887 4.53v2.622L3.22 7.054V4.276zM13.999 8v2l-5.995 1.51V8.049z"
      fill="#F58435"
    />
    <path d="M2 8v2l6.005 1.51V8.049z" fill="#9D5025" />
    <path d="m8.004 1 1.768.848v4.914l-1.768-.156z" fill="#F58435" />
    <path d="m8.005 1-1.778.868v4.904l1.778-.166z" fill="#9D5025" />
    <path d="M9.762 12.446v1.716L8.004 15V13.1z" fill="#F58435" />
    <path d="M6.246 12.446v1.716L8.005 15V13.1z" fill="#9D5025" />
    <path d="m8.005 11.949 1.758.496-1.758.653-1.759-.653z" fill="#FEB57E" />
  </svg>
);

export const AwsGlue: React.FC<AwsGlueProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AwsGlueLight : AwsGlueDark;

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
