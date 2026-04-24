import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type PaginationProps = SvgProps;

const PaginationLight: FC<SvgProps> = ({
  size,
  className,
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
    <path d="M1.5 2.5h13M1.5 13.5h13" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="m4.5 5-3 3 3 3m7-6 3 3-3 3"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaginationDark: FC<SvgProps> = ({
  size,
  className,
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
    <path d="M1.5 2.5h13M1.5 13.5h13" stroke="#CED0D6" strokeLinecap="round" />
    <path
      d="m4.5 5-3 3 3 3m7-6 3 3-3 3"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Pagination: FC<PaginationProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PaginationLight : PaginationDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
