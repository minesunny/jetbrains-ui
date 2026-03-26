import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EjbPrimaryKeyClassProps = IconProps;

const EjbPrimaryKeyClassLight: React.FC<SvgProps> = ({
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
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
    <path
      d="M14.777 6.24A3.5 3.5 0 0 0 12 12.663v1.082a7 7 0 1 1 2.777-7.505"
      fill="#EDF3FF"
    />
    <path
      d="M8 1a7 7 0 0 1 6.777 5.24 3.5 3.5 0 0 0-1.117-.236 6 6 0 1 0-1.799 6.59q.069.035.139.069v1.082A7 7 0 1 1 8 1"
      fill="#3574F0"
    />
    <path
      d="M8.133 10.577c.81 0 1.487-.364 1.871-.908.019.395.103.773.242 1.123a3.4 3.4 0 0 1-2.113.708 3.4 3.4 0 0 1-1.332-.265C5.59 10.721 4.788 9.505 4.788 8c0-2.006 1.426-3.5 3.345-3.5.458 0 .896.085 1.291.24.62.242 1.137.656 1.468 1.183l-.782.577a2.1 2.1 0 0 0-1.183-.951 2.5 2.5 0 0 0-.794-.126c-1.34 0-2.306 1.074-2.306 2.577 0 1.093.511 1.959 1.305 2.35a2.25 2.25 0 0 0 1.001.227"
      fill="#3574F0"
    />
  </svg>
);

const EjbPrimaryKeyClassDark: React.FC<SvgProps> = ({
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
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
    <path
      d="M14.777 6.24A3.5 3.5 0 0 0 12 12.663v1.082a7 7 0 1 1 2.777-7.505"
      fill="#25324D"
    />
    <path
      d="M8 1a7 7 0 0 1 6.777 5.24 3.5 3.5 0 0 0-1.117-.236 6 6 0 1 0-1.799 6.59q.069.035.139.069v1.082A7 7 0 1 1 8 1"
      fill="#548AF7"
    />
    <path
      d="M8.133 10.577c.81 0 1.487-.364 1.871-.908.019.395.103.773.242 1.123a3.4 3.4 0 0 1-2.113.708 3.4 3.4 0 0 1-1.332-.265C5.59 10.721 4.788 9.505 4.788 8c0-2.006 1.426-3.5 3.345-3.5.458 0 .896.085 1.291.24.62.242 1.137.656 1.468 1.183l-.782.577a2.1 2.1 0 0 0-1.183-.951 2.5 2.5 0 0 0-.794-.126c-1.34 0-2.306 1.074-2.306 2.577 0 1.093.511 1.959 1.305 2.35a2.25 2.25 0 0 0 1.001.227"
      fill="#548AF7"
    />
  </svg>
);

export const EjbPrimaryKeyClass: React.FC<EjbPrimaryKeyClassProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EjbPrimaryKeyClassLight : EjbPrimaryKeyClassDark;

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
