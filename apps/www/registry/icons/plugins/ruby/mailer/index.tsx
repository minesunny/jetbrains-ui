import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MailerProps = IconProps;

const MailerLight: React.FC<SvgProps> = ({
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
      d="M14.93 9q.07-.49.07-1a7 7 0 1 0-8 6.93V11a2 2 0 0 1 2-2z"
      fill="#EDF3FF"
    />
    <path
      d="M13.917 9Q14 8.511 14 8a6 6 0 1 0-7 5.917v1.012A7.001 7.001 0 0 1 8 1a7 7 0 0 1 6.93 8z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.64 11H9.36L12 12.886zM9 11.972l2.71 1.935a.5.5 0 0 0 .58 0L15 11.972V15H9zM8 15v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"
      fill="#6C707E"
    />
    <path
      d="M7.111 10.34C6.33 9.944 5.826 9.084 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.586.891 2.852 2.213 3.312V11c0-.231.04-.453.111-.66"
      fill="#3574F0"
    />
  </svg>
);

const MailerDark: React.FC<SvgProps> = ({
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
      d="M14.93 9q.07-.49.07-1a7 7 0 1 0-8 6.93V11a2 2 0 0 1 2-2z"
      fill="#25324D"
    />
    <path
      d="M13.917 9Q14 8.511 14 8a6 6 0 1 0-7 5.917v1.012A7.001 7.001 0 0 1 8 1a7 7 0 0 1 6.93 8z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.64 11H9.36L12 12.886zM9 11.972l2.71 1.935a.5.5 0 0 0 .58 0L15 11.972V15H9zM8 15v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"
      fill="#CED0D6"
    />
    <path
      d="M7.111 10.34C6.33 9.944 5.826 9.084 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.586.891 2.852 2.213 3.312V11c0-.231.04-.453.111-.66"
      fill="#548AF7"
    />
  </svg>
);

export const Mailer: React.FC<MailerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MailerLight : MailerDark;

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
