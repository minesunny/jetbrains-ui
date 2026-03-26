import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RunAllProps = IconProps;

const RunAllLight: FC<SvgProps> = ({
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
      d="M9.356 7.26a1 1 0 0 1 0 1.512l-5.2 4.499a1 1 0 0 1-1.654-.756V3.516a1 1 0 0 1 1.655-.756z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.683 6.881a1.5 1.5 0 0 1 0 2.269l-5.199 4.499c-.972.84-2.482.15-2.482-1.134V3.516c0-1.285 1.51-1.975 2.482-1.134zm-.655 1.512a.5.5 0 0 0 0-.756L3.83 3.138a.5.5 0 0 0-.828.378v8.999a.5.5 0 0 0 .828.378z"
      fill="#208A3C"
    />
    <path
      d="m7.858 2.5 5.499 4.76a1 1 0 0 1 0 1.512L7.893 13.5"
      stroke="#208A3C"
      strokeLinecap="round"
    />
  </svg>
);

const RunAllDark: FC<SvgProps> = ({
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
      d="M9.356 7.26a1 1 0 0 1 0 1.512l-5.2 4.499a1 1 0 0 1-1.654-.756V3.516a1 1 0 0 1 1.655-.756z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.683 6.881a1.5 1.5 0 0 1 0 2.269l-5.199 4.499c-.972.84-2.482.15-2.482-1.134V3.516c0-1.285 1.51-1.975 2.482-1.134zm-.655 1.512a.5.5 0 0 0 0-.756L3.83 3.138a.5.5 0 0 0-.828.378v8.999a.5.5 0 0 0 .828.378z"
      fill="#57965C"
    />
    <path
      d="m7.858 2.5 5.499 4.76a1 1 0 0 1 0 1.512L7.893 13.5"
      stroke="#57965C"
      strokeLinecap="round"
    />
  </svg>
);

export const RunAll: FC<RunAllProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RunAllLight : RunAllDark;

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
