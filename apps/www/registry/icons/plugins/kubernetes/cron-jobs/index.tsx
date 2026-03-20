import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CronJobsProps = IconProps;

const CronJobsLight: React.FC<SvgProps> = ({
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
      d="M12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM2 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM6 12a1 1 0 0 1 1-1h1.256c-.166.47-.256.974-.256 1.5 0 .925.28 1.785.758 2.5H7a1 1 0 0 1-1-1zM15 8.758V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.256c.47-.166.974-.256 1.5-.256.925 0 1.785.28 2.5.758M10 8.758V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.758c.328-.49.751-.914 1.242-1.242"
      fill="#F7F8FA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 0h2v2h-2zM2 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm2 1H2v2h2zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1 0h2v2H2z"
      fill="#6C707E"
    />
    <path
      d="M7 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.758a4.5 4.5 0 0 1-.502-1H7v-2h1.027q.06-.522.23-1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 8.758c-.49.328-.914.751-1.242 1.242H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM9 7H7v2h2z"
      fill="#6C707E"
    />
    <path
      d="M15 8.758V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.256q.478-.17 1-.229V7h2v1.256q.535.19 1 .502"
      fill="#6C707E"
    />
    <rect x="9" y="9" width="7" height="7" rx="3" fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 0 0 .707-.707L13 12.293z"
      fill="#4682FA"
    />
  </svg>
);

const CronJobsDark: React.FC<SvgProps> = ({
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
      d="M12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM2 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM6 12a1 1 0 0 1 1-1h1.256c-.166.47-.256.974-.256 1.5 0 .925.28 1.785.758 2.5H7a1 1 0 0 1-1-1zM15 8.758V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.256c.47-.166.974-.256 1.5-.256.925 0 1.785.28 2.5.758M10 8.758V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.758c.328-.49.751-.914 1.242-1.242"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 0h2v2h-2zM2 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm2 1H2v2h2zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1 0h2v2H2z"
      fill="#CED0D6"
    />
    <path
      d="M7 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.758a4.5 4.5 0 0 1-.502-1H7v-2h1.027q.06-.522.23-1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 8.758c-.49.328-.914.751-1.242 1.242H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM9 7H7v2h2z"
      fill="#CED0D6"
    />
    <path
      d="M15 8.758V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.256q.478-.17 1-.229V7h2v1.256q.535.19 1 .502"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 0 0 .707-.707L13 12.293z"
      fill="#548AF7"
    />
  </svg>
);

export const CronJobs: React.FC<CronJobsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CronJobsLight : CronJobsDark;

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
