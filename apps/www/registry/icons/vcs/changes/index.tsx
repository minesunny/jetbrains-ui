import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ChangesProps = IconProps;

const ChangesLight: FC<SvgProps> = ({
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
    <rect x="2" y="5" width="7" height="1" rx=".5" fill="#6C707E" />
    <rect x="2" y="8" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="2" y="2" width="12" height="1" rx=".5" fill="#6C707E" />
    <path
      d="m8.5 14.5 2-2-2-2m-3 2H10m2.5-2-2-2 2-2m3 2H11"
      stroke="#3574F0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChangesDark: FC<SvgProps> = ({
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
    <rect x="2" y="5" width="7" height="1" rx=".5" fill="#CED0D6" />
    <rect x="2" y="8" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="2" y="2" width="12" height="1" rx=".5" fill="#CED0D6" />
    <path
      d="m8.5 14.5 2-2-2-2m-3 2H10m2.5-2-2-2 2-2m3 2H11"
      stroke="#548AF7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Changes: FC<ChangesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChangesLight : ChangesDark;

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
