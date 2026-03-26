import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FindExternalUsagesProps = IconProps;

const FindExternalUsagesLight: FC<SvgProps> = ({
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
      d="M2.5 14a.5.5 0 0 1-.5-.5V9.707L.854 10.854a.5.5 0 0 1-.708-.708L2.5 7.793l2.354 2.353a.5.5 0 0 1-.708.708L3 9.707V13.5a.5.5 0 0 1-.5.5"
      fill="#6C707E"
    />
    <path
      d="M7 12a4.98 4.98 0 0 0 3.164-1.128l2.982 2.978a.5.5 0 0 0 .707-.708l-2.982-2.977A5 5 0 1 0 2 7h1a4 4 0 1 1 3 3.874V11.9q.486.1 1 .1"
      fill="#6C707E"
    />
  </svg>
);

const FindExternalUsagesDark: FC<SvgProps> = ({
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
      d="M2.5 14a.5.5 0 0 1-.5-.5V9.707L.854 10.854a.5.5 0 0 1-.708-.708L2.5 7.793l2.354 2.353a.5.5 0 0 1-.708.708L3 9.707V13.5a.5.5 0 0 1-.5.5"
      fill="#CED0D6"
    />
    <path
      d="M7 12a4.98 4.98 0 0 0 3.164-1.128l2.982 2.978a.5.5 0 0 0 .707-.708l-2.982-2.977A5 5 0 1 0 2 7h1a4 4 0 1 1 3 3.874V11.9q.486.1 1 .1"
      fill="#CED0D6"
    />
  </svg>
);

export const FindExternalUsages: FC<FindExternalUsagesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FindExternalUsagesLight : FindExternalUsagesDark;

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
