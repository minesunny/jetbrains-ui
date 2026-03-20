import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RspecRunConfigurationProps = IconProps;

const RspecRunConfigurationLight: React.FC<SvgProps> = ({
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
      d="M1.384 8.419a.6.6 0 0 1 0-.81l4.072-4.465a.6.6 0 0 1 1.043.404v8.91a.6.6 0 0 1-1.042.404z"
      fill="#FAD4D8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.086 2.807C5.763 2.065 7 2.544 7 3.548v8.91c0 1.002-1.233 1.482-1.911.742L1.016 8.757a1.1 1.1 0 0 1-.002-1.484zm.79.642a.1.1 0 0 0-.051.032L1.753 7.946a.1.1 0 0 0 0 .135l4.072 4.444c.02.022.038.029.051.031a.1.1 0 0 0 .06-.006.1.1 0 0 0 .047-.035.1.1 0 0 0 .016-.058V3.548a.1.1 0 0 0-.016-.058.1.1 0 0 0-.048-.035.1.1 0 0 0-.059-.006"
      fill="#DB3B4B"
    />
    <path
      d="M14.695 8.318a.6.6 0 0 0-.067-.723l-4.086-4.458a.6.6 0 0 0-1.042.406v4.664c.274-.135.577-.207.887-.207h3.226c.386 0 .761.112 1.082.318"
      fill="#F2FCF3"
    />
    <path
      d="M10 8.038V3.543q.002-.045.016-.058a.1.1 0 0 1 .048-.036.1.1 0 0 1 .059-.006c.013.003.03.01.05.032l4.087 4.457a.1.1 0 0 1 0 .136l-.028.03c.271.088.523.234.737.431l.115.106a1.1 1.1 0 0 0-.087-1.378l-4.086-4.458C10.233 2.06 9 2.54 9 3.543v5.015l.031-.029c.274-.251.61-.42.97-.491"
      fill="#208A3C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.893 11.367-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 14.69 2.819-3.578-1.206-1.11h-3.226l-1.206 1.11zm3.893-3.323-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#3574F0"
    />
  </svg>
);

const RspecRunConfigurationDark: React.FC<SvgProps> = ({
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
      d="M1.384 8.419a.6.6 0 0 1 0-.81l4.072-4.465a.6.6 0 0 1 1.043.404v8.91a.6.6 0 0 1-1.042.404z"
      fill="#5E3838"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.086 2.807C5.763 2.065 7 2.544 7 3.548v8.91c0 1.002-1.233 1.482-1.911.742L1.016 8.757a1.1 1.1 0 0 1-.002-1.484zm.79.642a.1.1 0 0 0-.051.032L1.753 7.946a.1.1 0 0 0 0 .135l4.072 4.444c.02.022.038.029.051.031a.1.1 0 0 0 .06-.006.1.1 0 0 0 .047-.035.1.1 0 0 0 .016-.058V3.548a.1.1 0 0 0-.016-.058.1.1 0 0 0-.048-.035.1.1 0 0 0-.059-.006"
      fill="#DB5C5C"
    />
    <path
      d="M14.695 8.318a.6.6 0 0 0-.067-.723l-4.086-4.458a.6.6 0 0 0-1.042.406v4.664c.274-.135.577-.207.887-.207h3.226c.386 0 .761.112 1.082.318"
      fill="#375239"
    />
    <path
      d="M10 8.038V3.543q.002-.045.016-.058a.1.1 0 0 1 .048-.036.1.1 0 0 1 .059-.006c.013.003.03.01.05.032l4.087 4.457a.1.1 0 0 1 0 .136l-.028.03c.271.088.523.234.737.431l.115.106a1.1 1.1 0 0 0-.087-1.378l-4.086-4.458C10.233 2.06 9 2.54 9 3.543v5.015l.031-.029c.274-.251.61-.42.97-.491"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.893 11.367-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 14.69 2.819-3.578-1.206-1.11h-3.226l-1.206 1.11zm3.893-3.323-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#548AF7"
    />
  </svg>
);

export const RspecRunConfiguration: React.FC<RspecRunConfigurationProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RspecRunConfigurationLight : RspecRunConfigurationDark;

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
