import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AliasFactoryProps = IconProps;

const AliasFactoryLight: React.FC<SvgProps> = ({
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
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
      fill="#6C707E"
    />
    <path d="M11 9h4.5v1H12v2h3v1h-3v3h-1z" fill="#3574F0" />
    <path
      d="M9 3.502v8.996a.5.5 0 0 0 .833.373l.167-.15V8h5a.5.5 0 0 0-.166-.373L9.833 3.13A.5.5 0 0 0 9 3.502"
      fill="#EBECF0"
    />
    <path
      d="M10 11.376h-.002V4.624L13.753 8H15a.5.5 0 0 0-.166-.373L9.833 3.13A.5.5 0 0 0 9 3.502v8.996a.5.5 0 0 0 .833.373l.167-.15z"
      fill="#6C707E"
    />
  </svg>
);

const AliasFactoryDark: React.FC<SvgProps> = ({
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
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
      fill="#CED0D6"
    />
    <path d="M11 9h4.5v1H12v2h3v1h-3v3h-1z" fill="#548AF7" />
    <path
      d="M9 3.502v8.996a.5.5 0 0 0 .833.373l.167-.15V8h5a.5.5 0 0 0-.166-.373L9.833 3.13A.5.5 0 0 0 9 3.502"
      fill="#43454A"
    />
    <path
      d="M10 11.376h-.002V4.624L13.753 8H15a.5.5 0 0 0-.166-.373L9.833 3.13A.5.5 0 0 0 9 3.502v8.996a.5.5 0 0 0 .833.373l.167-.15z"
      fill="#CED0D6"
    />
  </svg>
);

export const AliasFactory: React.FC<AliasFactoryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AliasFactoryLight : AliasFactoryDark;

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
