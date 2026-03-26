import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AddColumnRightProps = IconProps;

const AddColumnRightLight: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 1H3a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1m-4 8V8h5v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1"
      fill="#6C707E"
    />
    <path
      d="M13 5.5a.5.5 0 0 0-1 0V7h-1.5a.5.5 0 0 0 0 1H12v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H13z"
      fill="#6C707E"
    />
  </svg>
);

const AddColumnRightDark: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 1H3a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1m-4 8V8h5v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1"
      fill="#CED0D6"
    />
    <path
      d="M13 5.5a.5.5 0 0 0-1 0V7h-1.5a.5.5 0 0 0 0 1H12v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H13z"
      fill="#CED0D6"
    />
  </svg>
);

export const AddColumnRight: FC<AddColumnRightProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AddColumnRightLight : AddColumnRightDark;

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
