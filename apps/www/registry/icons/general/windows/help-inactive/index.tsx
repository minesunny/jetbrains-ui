import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HelpInactiveProps = IconProps;

const HelpInactiveLight: FC<SvgProps> = ({
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
      d="M8 2C5 2 5 4.915 5 5h1s0-2 2-2c1.157 0 2 .743 2 2 0 2.286-3 1.063-3 5h1c0-3.375 3-2 3-5 0-1.42-1-3-3-3"
      fill="#818594"
    />
    <path fill="#818594" d="M7 12H8V13H7z" />
  </svg>
);

const HelpInactiveDark: FC<SvgProps> = ({
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
      d="M8 2C5 2 5 4.915 5 5h1s0-2 2-2c1.157 0 2 .743 2 2 0 2.286-3 1.063-3 5h1c0-3.375 3-2 3-5 0-1.42-1-3-3-3"
      fill="#6F737A"
    />
    <path fill="#6F737A" d="M7 12H8V13H7z" />
  </svg>
);

export const HelpInactive: FC<HelpInactiveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HelpInactiveLight : HelpInactiveDark;

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
