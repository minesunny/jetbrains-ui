import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JavaEEArtifactProps = IconProps;

const JavaEEArtifactLight: React.FC<SvgProps> = ({
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
      d="M3.294 10.709 1.293 8.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0"
      fill="#EDF3FF"
    />
    <path
      d="m5.293 4.708 2 2a1 1 0 0 0 1.415 0l2-2a1 1 0 0 0 0-1.414l-2-2.001a1 1 0 0 0-1.414 0l-2.001 2a1 1 0 0 0 0 1.415"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.294 10.709 1.293 8.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0M2 8l2 2 2.002-2L4 6z"
      fill="#3574F0"
    />
    <path
      d="M11 9H7v7h4v-1H8v-2h2.5v-1H8v-2h3zM16 9h-4v7h4v-1h-3v-2h2.5v-1H13v-2h3z"
      fill="#6C707E"
    />
    <path
      d="M9 8c0-.256.098-.511.293-.706l2-2.001a1 1 0 0 1 1.415 0l2 2c.196.196.293.451.294.707zM12.057 11a1 1 0 0 1-.113 0z"
      fill="#EDF3FF"
    />
    <path
      d="M9 8c0-.256.098-.511.293-.706l2-2.001a1 1 0 0 1 1.415 0l2 2c.196.196.293.451.294.707H14l-2-2-2 2zM12.057 11a1 1 0 0 1-.113 0z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.294 6.709 5.293 4.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0M6 4l2 2 2.002-2L8 2z"
      fill="#6C707E"
    />
  </svg>
);

const JavaEEArtifactDark: React.FC<SvgProps> = ({
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
      d="M3.294 10.709 1.293 8.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0"
      fill="#25324D"
    />
    <path
      d="m5.293 4.708 2 2a1 1 0 0 0 1.415 0l2-2a1 1 0 0 0 0-1.414l-2-2.001a1 1 0 0 0-1.414 0l-2.001 2a1 1 0 0 0 0 1.415"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.294 10.709 1.293 8.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0M2 8l2 2 2.002-2L4 6z"
      fill="#548AF7"
    />
    <path
      d="M11 9H7v7h4v-1H8v-2h2.5v-1H8v-2h3zM16 9h-4v7h4v-1h-3v-2h2.5v-1H13v-2h3z"
      fill="#CED0D6"
    />
    <path
      d="M9 8c0-.256.098-.511.293-.706l2-2.001a1 1 0 0 1 1.415 0l2 2c.196.196.293.451.294.707zM12.057 11a1 1 0 0 1-.113 0z"
      fill="#25324D"
    />
    <path
      d="M9 8c0-.256.098-.511.293-.706l2-2.001a1 1 0 0 1 1.415 0l2 2c.196.196.293.451.294.707H14l-2-2-2 2zM12.057 11a1 1 0 0 1-.113 0z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.294 6.709 5.293 4.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0M6 4l2 2 2.002-2L8 2z"
      fill="#CED0D6"
    />
  </svg>
);

export const JavaEEArtifact: React.FC<JavaEEArtifactProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JavaEEArtifactLight : JavaEEArtifactDark;

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
