import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CommitProps = IconProps;

const CommitLight: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.041 8.5a3 3 0 0 0 5.918 0H15.5a.5.5 0 0 0 0-1h-4.541a3 3 0 0 0-5.918 0H.5a.5.5 0 0 0 0 1z"
      fill="#6C707E"
    />
  </svg>
);

const CommitDark: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.041 8.5a3 3 0 0 0 5.918 0H15.5a.5.5 0 0 0 0-1h-4.541a3 3 0 0 0-5.918 0H.5a.5.5 0 0 0 0 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const Commit: FC<CommitProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CommitLight : CommitDark;

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
