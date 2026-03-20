import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TraitObjectScalaProps = IconProps;

const TraitObjectScalaLight: React.FC<SvgProps> = ({
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
    <path d="M15 8A7 7 0 1 0 1 8z" fill="#F2FCF3" />
    <path d="M14 8h1A7 7 0 1 0 1 8h1a6 6 0 1 1 12 0" fill="#208A3C" />
    <path
      d="M15 8.043V8H1a7 7 0 0 0 8 6.93V10a1.5 1.5 0 0 1 1.35-1.493z"
      fill="#FFF4EB"
    />
    <path
      d="M9 14.93Q8.51 15 8 15a7 7 0 0 1-7-7h1a6 6 0 0 0 7 5.917z"
      fill="#E66D17"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB3B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6H5V5h6v1H8.5v6h-1z"
      fill="#6C707E"
    />
  </svg>
);

const TraitObjectScalaDark: React.FC<SvgProps> = ({
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
    <path d="M15 8A7 7 0 1 0 1 8z" fill="#253627" />
    <path d="M14 8h1A7 7 0 1 0 1 8h1a6 6 0 1 1 12 0" fill="#57965C" />
    <path
      d="M15 8.043V8H1a7 7 0 0 0 8 6.93V10a1.5 1.5 0 0 1 1.35-1.493z"
      fill="#45322B"
    />
    <path
      d="M9 14.93Q8.51 15 8 15a7 7 0 0 1-7-7h1a6 6 0 0 0 7 5.917z"
      fill="#C77D55"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6H5V5h6v1H8.5v6h-1z"
      fill="#CED0D6"
    />
  </svg>
);

export const TraitObjectScala: React.FC<TraitObjectScalaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? TraitObjectScalaLight : TraitObjectScalaDark;

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
