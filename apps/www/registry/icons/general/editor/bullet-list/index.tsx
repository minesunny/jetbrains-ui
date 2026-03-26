import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BulletListProps = IconProps;

const BulletListLight: FC<SvgProps> = ({
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
      d="M3.5 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7.5 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM3.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4.25 12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      fill="#6C707E"
    />
  </svg>
);

const BulletListDark: FC<SvgProps> = ({
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
      d="M3.5 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7.5 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM3.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4.25 12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      fill="#CED0D6"
    />
  </svg>
);

export const BulletList: FC<BulletListProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BulletListLight : BulletListDark;

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
