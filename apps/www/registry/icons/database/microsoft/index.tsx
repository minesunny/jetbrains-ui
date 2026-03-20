import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MicrosoftProps = IconProps;

const MicrosoftLight: FC<SvgProps> = ({
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
    <path fill="#F25326" d="M1 1H7.5V7.5H1z" />
    <path fill="#81BC0A" d="M8.5 1H15V7.5H8.5z" />
    <path fill="#07A6F0" d="M1 8.5H7.5V15H1z" />
    <path fill="#FFBA0F" d="M8.5 8.5H15V15H8.5z" />
  </svg>
);

const MicrosoftDark: FC<SvgProps> = ({
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
    <path fill="#F25326" d="M1 1H7.5V7.5H1z" />
    <path fill="#81BC0A" d="M8.5 1H15V7.5H8.5z" />
    <path fill="#07A6F0" d="M1 8.5H7.5V15H1z" />
    <path fill="#FFBA0F" d="M8.5 8.5H15V15H8.5z" />
  </svg>
);

export const Microsoft: FC<MicrosoftProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MicrosoftLight : MicrosoftDark;

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
