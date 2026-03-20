import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OverridingMethodProps = IconProps;

const OverridingMethodLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.492 10C3.73 10 2.5 8.65 2.5 7.017V7c0-1.633 1.246-3 3.008-3S8.5 5.35 8.5 6.983V7c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V7c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V7c0 1.127.812 2.055 1.951 2.055"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      fill="#DB3B4B"
    />
    <path
      d="M10 7a4.5 4.5 0 1 1-1.578-3.422l.017-.017a1.5 1.5 0 0 1-.391-1.437 5.5 5.5 0 1 0 2.66 6.65A1.5 1.5 0 0 1 10 7.5z"
      fill="#3574F0"
    />
  </svg>
);

const OverridingMethodDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.492 10C3.73 10 2.5 8.65 2.5 7.017V7c0-1.633 1.246-3 3.008-3S8.5 5.35 8.5 6.983V7c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V7c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V7c0 1.127.812 2.055 1.951 2.055"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      fill="#DB5C5C"
    />
    <path
      d="M10 7a4.5 4.5 0 1 1-1.578-3.422l.017-.017a1.5 1.5 0 0 1-.391-1.437 5.5 5.5 0 1 0 2.66 6.65A1.5 1.5 0 0 1 10 7.5z"
      fill="#548AF7"
    />
  </svg>
);

export const OverridingMethod: FC<OverridingMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? OverridingMethodLight : OverridingMethodDark;

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
