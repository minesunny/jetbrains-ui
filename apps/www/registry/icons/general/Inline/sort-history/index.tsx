import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type SortHistoryProps = SvgProps;

const SortHistoryLight: FC<SvgProps> = ({
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
    <path
      d="M1.5 3.5h9m-9 4h7m-7 4h5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m11 7 2.5 2.5L16 7z" fill="#6C707E" />
  </svg>
);

const SortHistoryDark: FC<SvgProps> = ({
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
    <path
      d="M1.5 3.5h9m-9 4h7m-7 4h5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m11 7 2.5 2.5L16 7z" fill="#CED0D6" />
  </svg>
);

export const SortHistory: FC<SortHistoryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SortHistoryLight : SortHistoryDark;

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
