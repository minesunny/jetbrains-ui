import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ScrollUpProps = IconProps;

const ScrollUpLight: FC<SvgProps> = ({
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
      d="M1.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM1.5 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM11 12.5a.5.5 0 0 0 1 0V6.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.707 0l-3 3a.5.5 0 0 0 .707.708L11 6.707z"
      fill="#6C707E"
    />
  </svg>
);

const ScrollUpDark: FC<SvgProps> = ({
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
      d="M1.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM1.5 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM11 12.5a.5.5 0 0 0 1 0V6.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.707 0l-3 3a.5.5 0 0 0 .707.708L11 6.707z"
      fill="#CED0D6"
    />
  </svg>
);

export const ScrollUp: FC<ScrollUpProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScrollUpLight : ScrollUpDark;

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
