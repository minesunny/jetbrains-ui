import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SeparatorHorizontalProps = IconProps;

const SeparatorHorizontalLight: FC<SvgProps> = ({
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
      d="M1 7.5a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5M6 7h3v1H6zM11 7h2.5a.5.5 0 1 1 0 1H11z"
      fill="#6C707E"
    />
  </svg>
);

const SeparatorHorizontalDark: FC<SvgProps> = ({
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
      d="M1 7.5a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5M6 7h3v1H6zM11 7h2.5a.5.5 0 1 1 0 1H11z"
      fill="#CED0D6"
    />
  </svg>
);

export const SeparatorHorizontal: FC<SeparatorHorizontalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SeparatorHorizontalLight : SeparatorHorizontalDark;

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
