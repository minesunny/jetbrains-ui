import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ReadAccessProps = IconProps;

const ReadAccessLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
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
      d="M3.146 3.646a.5.5 0 1 1 .708.708L1.707 6.5h6a.5.5 0 1 1 0 1h-6l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708z"
      fill="#6C707E"
    />
    <path
      d="m7.706 5.5 1.86-3.248a.5.5 0 0 1 .868 0l2.433 4.25c.177.307.177.686 0 .994l-2.433 4.252a.5.5 0 0 1-.868 0L7.707 8.5H6.555l2.143 3.745a1.5 1.5 0 0 0 2.604 0l2.433-4.251a2 2 0 0 0 0-1.99L11.3 1.754a1.5 1.5 0 0 0-2.603 0L6.553 5.5z"
      fill="#369650"
    />
  </svg>
);

const ReadAccessDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
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
      d="M3.146 3.646a.5.5 0 1 1 .708.708L1.707 6.5h6a.5.5 0 1 1 0 1h-6l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708z"
      fill="#CED0D6"
    />
    <path
      d="m7.706 5.5 1.86-3.248a.5.5 0 0 1 .868 0l2.433 4.25c.177.307.177.686 0 .994l-2.433 4.252a.5.5 0 0 1-.868 0L7.707 8.5H6.555l2.143 3.745a1.5 1.5 0 0 0 2.604 0l2.433-4.251a2 2 0 0 0 0-1.99L11.3 1.754a1.5 1.5 0 0 0-2.603 0L6.553 5.5z"
      fill="#57965C"
    />
  </svg>
);

export const ReadAccess: FC<ReadAccessProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ReadAccessLight : ReadAccessDark;

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
