import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AnyTypeProps = IconProps;

const AnyTypeLight: FC<SvgProps> = ({
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
      d="M11 1H7.914a1.5 1.5 0 0 0-1.06.44L3.439 4.853A1.5 1.5 0 0 0 3 5.914V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M4 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8v2.5A1.5 1.5 0 0 1 6.5 6H4zm.707-8L7 2.707V4.5a.5.5 0 0 1-.5.5z"
      fill="#6C707E"
    />
    <path
      d="M5 14a1 1 0 0 1-1-1V6h2.5A1.5 1.5 0 0 0 8 4.5V2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"
      fill="#EBECF0"
    />
    <path d="M7 2.707 4.707 5H6.5a.5.5 0 0 0 .5-.5z" fill="#EBECF0" />
  </svg>
);

const AnyTypeDark: FC<SvgProps> = ({
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
      d="M11 1H7.914a1.5 1.5 0 0 0-1.06.44L3.439 4.853A1.5 1.5 0 0 0 3 5.914V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M4 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8v2.5A1.5 1.5 0 0 1 6.5 6H4zm.707-8L7 2.707V4.5a.5.5 0 0 1-.5.5z"
      fill="#CED0D6"
    />
    <path
      d="M5 14a1 1 0 0 1-1-1V6h2.5A1.5 1.5 0 0 0 8 4.5V2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"
      fill="#43454A"
    />
    <path d="M7 2.707 4.707 5H6.5a.5.5 0 0 0 .5-.5z" fill="#43454A" />
  </svg>
);

export const AnyType: FC<AnyTypeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AnyTypeLight : AnyTypeDark;

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
