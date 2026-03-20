import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AbstractClassObjectScalaProps = IconProps;

const AbstractClassObjectScalaLight: React.FC<SvgProps> = ({
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
      d="M9 14.93V10a1.5 1.5 0 0 1 1.35-1.493L15 8.043V8H1a7 7 0 0 0 8 6.93"
      fill="#FFF4EB"
    />
    <path d="M15 8H1a7 7 0 0 1 14 0" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.086 9.095A6.97 6.97 0 0 0 3.05 12.95a6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.303-1.684A5.97 5.97 0 0 1 2.074 8.94z"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.915 6.905-.988.155a5.97 5.97 0 0 0-1.684-3.303A5.97 5.97 0 0 0 8.94 2.074l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.965 3.855m-8.01-5.82.156.989c-1.21.19-2.37.75-3.303 1.683A5.97 5.97 0 0 0 2.074 7.06l-.988-.155A6.97 6.97 0 0 1 3.05 3.05a6.97 6.97 0 0 1 3.855-1.964"
      fill="#3574F0"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB3B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11.395a3.6 3.6 0 0 1-.868.105c-1.919 0-3.345-1.494-3.345-3.5s1.426-3.5 3.345-3.5c1.49 0 2.766.9 3.08 2.175h-1.015c-.315-.73-1.093-1.252-2.065-1.252-1.339 0-2.306 1.074-2.306 2.577s.967 2.577 2.306 2.577c.313 0 .605-.054.868-.152z"
      fill="#6C707E"
    />
  </svg>
);

const AbstractClassObjectScalaDark: React.FC<SvgProps> = ({
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
      d="M9 14.93V10a1.5 1.5 0 0 1 1.35-1.493L15 8.043V8H1a7 7 0 0 0 8 6.93"
      fill="#45322B"
    />
    <path d="M15 8H1a7 7 0 0 1 14 0" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.086 9.095A6.97 6.97 0 0 0 3.05 12.95a6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.303-1.684A5.97 5.97 0 0 1 2.074 8.94z"
      fill="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.915 6.905-.988.155a5.97 5.97 0 0 0-1.684-3.303A5.97 5.97 0 0 0 8.94 2.074l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.965 3.855m-8.01-5.82.156.989c-1.21.19-2.37.75-3.303 1.683A5.97 5.97 0 0 0 2.074 7.06l-.988-.155A6.97 6.97 0 0 1 3.05 3.05a6.97 6.97 0 0 1 3.855-1.964"
      fill="#548AF7"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11.395a3.6 3.6 0 0 1-.868.105c-1.919 0-3.345-1.494-3.345-3.5s1.426-3.5 3.345-3.5c1.49 0 2.766.9 3.08 2.175h-1.015c-.315-.73-1.093-1.252-2.065-1.252-1.339 0-2.306 1.074-2.306 2.577s.967 2.577 2.306 2.577c.313 0 .605-.054.868-.152z"
      fill="#CED0D6"
    />
  </svg>
);

export const AbstractClassObjectScala: React.FC<
  AbstractClassObjectScalaProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? AbstractClassObjectScalaLight
      : AbstractClassObjectScalaDark;

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
