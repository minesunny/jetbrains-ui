import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SpaceToolWindowProps = IconProps;

const SpaceToolWindowLight: FC<SvgProps> = ({
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
      d="M2.783 1.552c2.607-.29 8.43.521 11.558 5.388M2.783 1.552c1.738.58 4.953 2.78 6.691 5.388M2.783 1.552C.784 5.636 1.653 11.719 3.826 14.5M14.34 6.94c-1.825 5.214-7.474 7.56-10.515 7.56M14.34 6.94H9.474M3.826 14.5c2.462-1.303 5.214-4.519 5.648-7.56"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
  </svg>
);

const SpaceToolWindowDark: FC<SvgProps> = ({
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
      d="M2.783 1.552c2.607-.29 8.43.521 11.558 5.388M2.783 1.552c1.738.58 4.953 2.78 6.691 5.388M2.783 1.552C.784 5.636 1.653 11.719 3.826 14.5M14.34 6.94c-1.825 5.214-7.474 7.56-10.515 7.56M14.34 6.94H9.474M3.826 14.5c2.462-1.303 5.214-4.519 5.648-7.56"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpaceToolWindow: FC<SpaceToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SpaceToolWindowLight : SpaceToolWindowDark;

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
