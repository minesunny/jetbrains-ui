import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MoreHorizontalProps = IconProps;

const MoreHorizontalLight: FC<SvgProps> = ({
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
    <circle cx="3" cy="8" r="1" transform="rotate(-90 3 8)" fill="#6C707E" />
    <circle cx="8" cy="8" r="1" transform="rotate(-90 8 8)" fill="#6C707E" />
    <circle cx="13" cy="8" r="1" transform="rotate(-90 13 8)" fill="#6C707E" />
  </svg>
);

const MoreHorizontalDark: FC<SvgProps> = ({
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
    <circle cx="3" cy="8" r="1" transform="rotate(-90 3 8)" fill="#CED0D6" />
    <circle cx="8" cy="8" r="1" transform="rotate(-90 8 8)" fill="#CED0D6" />
    <circle cx="13" cy="8" r="1" transform="rotate(-90 13 8)" fill="#CED0D6" />
  </svg>
);

export const MoreHorizontal: FC<MoreHorizontalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MoreHorizontalLight : MoreHorizontalDark;

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
