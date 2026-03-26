import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinNotebooksProps = IconProps;

const KotlinNotebooksLight: React.FC<SvgProps> = ({
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
      d="M2 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m1 6.599V4a1 1 0 0 1 1-1h8a1 1 0 0 1 .987.837L9.04 8.66 7.416 6.222a.5.5 0 0 0-.803-.04zm.013 1.563A1 1 0 0 0 4 13h8a1 1 0 0 0 1-1V5.4L9.387 9.816a.5.5 0 0 1-.803-.04L6.96 7.34z"
      fill="#834DF0"
    />
  </svg>
);

const KotlinNotebooksDark: React.FC<SvgProps> = ({
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
      d="M2 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m1 6.599V4a1 1 0 0 1 1-1h8a1 1 0 0 1 .987.837L9.04 8.66 7.416 6.222a.5.5 0 0 0-.803-.04zm.013 1.563A1 1 0 0 0 4 13h8a1 1 0 0 0 1-1V5.4L9.387 9.816a.5.5 0 0 1-.803-.04L6.96 7.34z"
      fill="#A571E6"
    />
  </svg>
);

export const KotlinNotebooks: React.FC<KotlinNotebooksProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? KotlinNotebooksLight : KotlinNotebooksDark;

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
