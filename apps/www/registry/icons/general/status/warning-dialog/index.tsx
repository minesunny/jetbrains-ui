import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WarningDialogProps = IconProps;

const WarningDialogLight: FC<SvgProps> = ({
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
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M12.72 2.742a1.475 1.475 0 0 1 2.56 0L26.8 22.774c.569.99-.142 2.226-1.28 2.226H2.48c-1.138 0-1.849-1.237-1.28-2.226z"
      fill="#FFAF0F"
    />
    <path
      d="M15 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM14 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#fff"
    />
  </svg>
);

const WarningDialogDark: FC<SvgProps> = ({
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
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        d="M12.72 2.742a1.475 1.475 0 0 1 2.56 0L26.8 22.774c.569.99-.142 2.226-1.28 2.226H2.48c-1.138 0-1.849-1.237-1.28-2.226z"
        fill="#F2C55C"
      />
      <path
        d="M15 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM14 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fill="#2B2D30"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H28V28H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const WarningDialog: FC<WarningDialogProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? WarningDialogLight : WarningDialogDark;

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
