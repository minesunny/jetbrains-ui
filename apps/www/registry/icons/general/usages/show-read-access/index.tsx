import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShowReadAccessProps = IconProps;

const ShowReadAccessLight: FC<SvgProps> = ({
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
      d="M4.146 4.646a.5.5 0 1 1 .708.708L2.707 7.5h6a.5.5 0 1 1 0 1h-6l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708z"
      fill="#6C707E"
    />
    <path
      d="m8.706 6.5 1.86-3.248a.5.5 0 0 1 .868 0l2.434 4.25c.176.307.176.686 0 .994l-2.434 4.252a.5.5 0 0 1-.868 0L8.707 9.5H7.555l2.144 3.745a1.5 1.5 0 0 0 2.603 0l2.433-4.251a2 2 0 0 0 0-1.99l-2.433-4.25a1.5 1.5 0 0 0-2.603 0L7.554 6.5z"
      fill="#369650"
    />
  </svg>
);

const ShowReadAccessDark: FC<SvgProps> = ({
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
      d="M4.146 4.646a.5.5 0 1 1 .708.708L2.707 7.5h6a.5.5 0 1 1 0 1h-6l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708z"
      fill="#CED0D6"
    />
    <path
      d="m8.706 6.5 1.86-3.248a.5.5 0 0 1 .868 0l2.434 4.25c.176.307.176.686 0 .994l-2.434 4.252a.5.5 0 0 1-.868 0L8.707 9.5H7.555l2.144 3.745a1.5 1.5 0 0 0 2.603 0l2.433-4.251a2 2 0 0 0 0-1.99l-2.433-4.25a1.5 1.5 0 0 0-2.603 0L7.554 6.5z"
      fill="#57965C"
    />
  </svg>
);

export const ShowReadAccess: FC<ShowReadAccessProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ShowReadAccessLight : ShowReadAccessDark;

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
