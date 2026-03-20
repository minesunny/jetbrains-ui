import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ChessboardProps = IconProps;

const ChessboardLight: FC<SvgProps> = ({
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
    <path stroke="#6C707E" d="M2.5 2.5H5.5V5.5H2.5z" />
    <path stroke="#6C707E" d="M2.5 10.5H5.5V13.5H2.5z" />
    <path stroke="#6C707E" d="M6.5 6.5H9.5V9.5H6.5z" />
    <path stroke="#6C707E" d="M10.5 2.5H13.5V5.5H10.5z" />
    <path stroke="#6C707E" d="M10.5 10.5H13.5V13.5H10.5z" />
  </svg>
);

const ChessboardDark: FC<SvgProps> = ({
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
    <path stroke="#CED0D6" d="M2.5 2.5H5.5V5.5H2.5z" />
    <path stroke="#CED0D6" d="M2.5 10.5H5.5V13.5H2.5z" />
    <path stroke="#CED0D6" d="M6.5 6.5H9.5V9.5H6.5z" />
    <path stroke="#CED0D6" d="M10.5 2.5H13.5V5.5H10.5z" />
    <path stroke="#CED0D6" d="M10.5 10.5H13.5V13.5H10.5z" />
  </svg>
);

export const Chessboard: FC<ChessboardProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChessboardLight : ChessboardDark;

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
