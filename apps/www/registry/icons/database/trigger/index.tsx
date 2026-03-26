import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TriggerProps = IconProps;

const TriggerLight: FC<SvgProps> = ({
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
      d="M12.5 13.5h2v-11h-2zM6.37 13.088l1.932.518 2.33-8.694-1.933-.517z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path
      d="m1 12.63 1.732 1L5.982 8 4.25 7z"
      stroke="#3574F0"
      strokeLinejoin="round"
    />
  </svg>
);

const TriggerDark: FC<SvgProps> = ({
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
      d="M12.5 13.5h2v-11h-2zM6.37 13.088l1.932.518 2.33-8.694-1.933-.517z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path
      d="m1 12.63 1.732 1L5.982 8 4.25 7z"
      stroke="#548AF7"
      strokeLinejoin="round"
    />
  </svg>
);

export const Trigger: FC<TriggerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TriggerLight : TriggerDark;

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
