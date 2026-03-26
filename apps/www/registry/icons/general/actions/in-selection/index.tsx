import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type InSelectionProps = IconProps;

const InSelectionLight: FC<SvgProps> = ({
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
      d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <rect x="14" y="15" width="2" height="1" rx=".5" fill="#6C707E" />
    <rect x="11" y="15" width="2" height="1" rx=".5" fill="#6C707E" />
    <rect x="14" y="8" width="2" height="1" rx=".5" fill="#6C707E" />
    <rect x="11" y="8" width="2" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      fill="#6C707E"
    />
  </svg>
);

const InSelectionDark: FC<SvgProps> = ({
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
      d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <rect x="14" y="15" width="2" height="1" rx=".5" fill="#CED0D6" />
    <rect x="11" y="15" width="2" height="1" rx=".5" fill="#CED0D6" />
    <rect x="14" y="8" width="2" height="1" rx=".5" fill="#CED0D6" />
    <rect x="11" y="8" width="2" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      fill="#CED0D6"
    />
  </svg>
);

export const InSelection: FC<InSelectionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InSelectionLight : InSelectionDark;

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
