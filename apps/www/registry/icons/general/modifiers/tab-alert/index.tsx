import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TabAlertProps = IconProps;

const TabAlertLight: FC<SvgProps> = ({
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
    <path d="M9 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0" fill="#E66D17" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.854 12.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V10.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708 0"
      fill="#fff"
    />
  </svg>
);

const TabAlertDark: FC<SvgProps> = ({
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
    <path d="M9 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0" fill="#F2C55C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.854 12.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V10.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708 0"
      fill="#1E1F22"
    />
  </svg>
);

export const TabAlert: FC<TabAlertProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TabAlertLight : TabAlertDark;

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
