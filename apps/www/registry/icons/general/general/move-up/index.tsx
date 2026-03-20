import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MoveUpProps = IconProps;

const MoveUpLight: FC<SvgProps> = ({
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
      d="M11.854 5.854a.5.5 0 0 1-.708.707L8.5 3.914v7.593a.5.5 0 0 1-1 0V3.914L4.854 6.561a.5.5 0 1 1-.708-.707l3.5-3.5L8 2l.354.354z"
      fill="#6C707E"
    />
    <rect x="2" y="13.007" width="12" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const MoveUpDark: FC<SvgProps> = ({
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
      d="M11.854 5.854a.5.5 0 0 1-.708.707L8.5 3.914v7.593a.5.5 0 0 1-1 0V3.914L4.854 6.561a.5.5 0 1 1-.708-.707l3.5-3.5L8 2l.354.354z"
      fill="#CED0D6"
    />
    <rect x="2" y="13.007" width="12" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const MoveUp: FC<MoveUpProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MoveUpLight : MoveUpDark;

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
