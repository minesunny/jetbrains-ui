import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ForceStepIntoProps = IconProps;

const ForceStepIntoLight: FC<SvgProps> = ({
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
    <rect x="2" y="14" width="12" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.354 6.946a.5.5 0 0 1 0 .708l-4 4-.354.353-.354-.354-4-4a.5.5 0 1 1 .708-.707L6 8.593V2a.5.5 0 0 1 1 0v7.5q0 .044-.007.085L8 10.593l1-1V2a.5.5 0 0 1 1 0v6.593l1.646-1.647a.5.5 0 0 1 .708 0"
      fill="#DB3B4B"
    />
  </svg>
);

const ForceStepIntoDark: FC<SvgProps> = ({
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
    <rect x="2" y="14" width="12" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.354 6.946a.5.5 0 0 1 0 .708l-4 4-.354.353-.354-.354-4-4a.5.5 0 1 1 .708-.707L6 8.593V2a.5.5 0 0 1 1 0v7.5q0 .044-.007.085L8 10.593l1-1V2a.5.5 0 0 1 1 0v6.593l1.646-1.647a.5.5 0 0 1 .708 0"
      fill="#DB5C5C"
    />
  </svg>
);

export const ForceStepInto: FC<ForceStepIntoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ForceStepIntoLight : ForceStepIntoDark;

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
