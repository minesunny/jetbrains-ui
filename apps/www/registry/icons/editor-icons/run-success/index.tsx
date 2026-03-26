import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RunSuccessProps = IconProps;

const RunSuccessLight: FC<SvgProps> = ({
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
      d="M10.968 6.096Q11 5.802 11 5.5a5.5 5.5 0 1 0-5 5.478V7.502c0-1.963 2.159-3.16 3.824-2.12z"
      fill="#55A76A"
    />
    <path
      d="m2.5 5.5 2 2 4-4"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7.502A1.5 1.5 0 0 1 9.294 6.23l4.002 2.497a1.5 1.5 0 0 1 0 2.546L9.294 13.77A1.5 1.5 0 0 1 7 12.498zm1.765-.424A.5.5 0 0 0 8 7.502v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#208A3C"
    />
    <path
      d="M8 7.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498A.5.5 0 0 1 8 12.498z"
      fill="#F2FCF3"
    />
  </svg>
);

const RunSuccessDark: FC<SvgProps> = ({
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
      d="M10.968 6.096Q11 5.802 11 5.5a5.5 5.5 0 1 0-5 5.478V7.502c0-1.963 2.159-3.16 3.824-2.12z"
      fill="#57965C"
    />
    <path
      d="m2.5 5.5 2 2 4-4"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7.502A1.5 1.5 0 0 1 9.294 6.23l4.002 2.497a1.5 1.5 0 0 1 0 2.546L9.294 13.77A1.5 1.5 0 0 1 7 12.498zm1.765-.424A.5.5 0 0 0 8 7.502v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#57965C"
    />
    <path
      d="M8 7.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498A.5.5 0 0 1 8 12.498z"
      fill="#253627"
    />
  </svg>
);

export const RunSuccess: FC<RunSuccessProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RunSuccessLight : RunSuccessDark;

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
