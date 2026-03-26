import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AddColumnLeftProps = IconProps;

const AddColumnLeftLight: FC<SvgProps> = ({
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
      d="M10 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 1h-3a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1m-3 9a1 1 0 0 1-1-1V8h5v3a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
    <path
      d="M4 5.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H3v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H4z"
      fill="#6C707E"
    />
  </svg>
);

const AddColumnLeftDark: FC<SvgProps> = ({
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
      d="M10 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 1h-3a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1m-3 9a1 1 0 0 1-1-1V8h5v3a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
    <path
      d="M4 5.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H3v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H4z"
      fill="#CED0D6"
    />
  </svg>
);

export const AddColumnLeft: FC<AddColumnLeftProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AddColumnLeftLight : AddColumnLeftDark;

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
