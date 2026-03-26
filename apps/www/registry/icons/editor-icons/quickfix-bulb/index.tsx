import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type QuickfixBulbProps = IconProps;

const QuickfixBulbLight: FC<SvgProps> = ({
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
    <path fill="#6C707E" d="M5.701 12H10.300999999999998V13H5.701z" />
    <path d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5zM8 2a.9.9 0 0 1 .9.9v2.5a.9.9 0 1 1-1.8 0V2.9A.9.9 0 0 1 8 2m0 7.2A1.1 1.1 0 1 0 8 7a1.1 1.1 0 0 0 0 2.2"
      fill="#E55765"
    />
  </svg>
);

const QuickfixBulbDark: FC<SvgProps> = ({
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
    <path fill="#CED0D6" d="M5.701 12H10.300999999999998V13H5.701z" />
    <path d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5zM8 2a.9.9 0 0 1 .9.9v2.5a.9.9 0 1 1-1.8 0V2.9A.9.9 0 0 1 8 2m0 7.2A1.1 1.1 0 1 0 8 7a1.1 1.1 0 0 0 0 2.2"
      fill="#DB5C5C"
    />
  </svg>
);

export const QuickfixBulb: FC<QuickfixBulbProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? QuickfixBulbLight : QuickfixBulbDark;

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
