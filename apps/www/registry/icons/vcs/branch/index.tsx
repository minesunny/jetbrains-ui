import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BranchProps = IconProps;

const BranchLight: FC<SvgProps> = ({
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293m-5.705 7.12L8.414 3H13v4.586l-6.412 6.412z"
      fill="#6C707E"
    />
    <circle cx="10" cy="6" r="1.5" stroke="#6C707E" />
  </svg>
);

const BranchDark: FC<SvgProps> = ({
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293m-5.705 7.12L8.414 3H13v4.586l-6.412 6.412z"
      fill="#CED0D6"
    />
    <circle cx="10" cy="6" r="1.5" stroke="#CED0D6" />
  </svg>
);

export const Branch: FC<BranchProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BranchLight : BranchDark;

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
