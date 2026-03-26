import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SaveProps = IconProps;

const SaveLight: FC<SvgProps> = ({
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
      d="M5.5 3v2.5h5V3m-6 10V9.5h7V13m-9 .5v-11h9l2 2v9z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
  </svg>
);

const SaveDark: FC<SvgProps> = ({
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
      d="M5.5 3v2.5h5V3m-6 10V9.5h7V13m-9 .5v-11h9l2 2v9z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
  </svg>
);

export const Save: FC<SaveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SaveLight : SaveDark;

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
