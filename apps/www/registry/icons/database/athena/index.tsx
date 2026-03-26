import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AthenaProps = IconProps;

const AthenaLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path d="M8 11.7v3.4l-7-3.5v-2z" fill="#9C5121" />
    <path d="M8 11.7v3.4l7-3.5v-2z" fill="#FB8835" />
    <path d="M8 11.7 1 9.6l7-.824 7 .824z" fill="#FFC39C" />
    <path d="M1.008 6.656v1.98l.893.175V6.656z" fill="#9C5121" />
    <path d="M2.441 6.656v2.098l-.54.057V6.656z" fill="#FB8835" />
    <path d="m2.436 8.915 1.123.219V4.138l-1.123.233z" fill="#9C5121" />
    <path d="m4.69 8.993-1.131.141V4.138l1.131.137z" fill="#FB8835" />
    <path d="m4.273 9.273 1.613.314V5.148l-1.613.168z" fill="#9C5121" />
    <path
      d="m6.914 9.41-1.028.177V5.148l1.028.086zM15.007 1.676v6.96l-.89.174V1.24z"
      fill="#FB8835"
    />
    <path d="M13.129 1.469v7.195l.989.146V1.24z" fill="#9C5121" />
    <path d="m13.628 8.905-1.205.234V1.646l1.205.476z" fill="#FB8835" />
    <path d="m11.328 9.005 1.095.134V1.646l-1.095.268z" fill="#9C5121" />
    <path d="m11.744 9.272-1.649.32V3.68l1.649.338z" fill="#FB8835" />
    <path
      d="m9.095 9.421 1 .171V3.68l-1 .142zM8 1.544V10l-1.088-.212V1.91z"
      fill="#9C5121"
    />
    <path d="M8 1.542V10l1.108-.216V1.89z" fill="#FB8835" />
  </svg>
);

const AthenaDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path d="M8 11.7v3.4l-7-3.5v-2z" fill="#9C5121" />
    <path d="M8 11.7v3.4l7-3.5v-2z" fill="#FB8835" />
    <path d="M8 11.7 1 9.6l7-.824 7 .824z" fill="#FFC39C" />
    <path d="M1.008 6.656v1.98l.893.175V6.656z" fill="#9C5121" />
    <path d="M2.441 6.656v2.098l-.54.057V6.656z" fill="#FB8835" />
    <path d="m2.436 8.915 1.123.219V4.138l-1.123.233z" fill="#9C5121" />
    <path d="m4.69 8.993-1.131.141V4.138l1.131.137z" fill="#FB8835" />
    <path d="m4.273 9.273 1.613.314V5.148l-1.613.168z" fill="#9C5121" />
    <path
      d="m6.914 9.41-1.028.177V5.148l1.028.086zM15.007 1.676v6.96l-.89.174V1.24z"
      fill="#FB8835"
    />
    <path d="M13.129 1.469v7.195l.989.146V1.24z" fill="#9C5121" />
    <path d="m13.628 8.905-1.205.234V1.646l1.205.476z" fill="#FB8835" />
    <path d="m11.328 9.005 1.095.134V1.646l-1.095.268z" fill="#9C5121" />
    <path d="m11.744 9.272-1.649.32V3.68l1.649.338z" fill="#FB8835" />
    <path
      d="m9.095 9.421 1 .171V3.68l-1 .142zM8 1.544V10l-1.088-.212V1.91z"
      fill="#9C5121"
    />
    <path d="M8 1.542V10l1.108-.216V1.89z" fill="#FB8835" />
  </svg>
);

export const Athena: FC<AthenaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AthenaLight : AthenaDark;

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
