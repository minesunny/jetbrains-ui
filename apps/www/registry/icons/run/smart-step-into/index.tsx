import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SmartStepIntoProps = IconProps;

const SmartStepIntoLight: FC<SvgProps> = ({
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
    <rect x="9" y="12" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="9" y="9" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="9" y="6" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="9" y="3" width="6" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.654 5.646a.5.5 0 1 0-.708.708L6.093 7.5H1.5a.5.5 0 0 0 0 1h4.593L4.946 9.646a.5.5 0 0 0 .708.708l2-2L8.007 8l-.353-.354z"
      fill="#6C707E"
    />
  </svg>
);

const SmartStepIntoDark: FC<SvgProps> = ({
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
    <rect x="9" y="12" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="9" y="9" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="9" y="6" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="9" y="3" width="6" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.654 5.646a.5.5 0 1 0-.708.708L6.093 7.5H1.5a.5.5 0 0 0 0 1h4.593L4.946 9.646a.5.5 0 0 0 .708.708l2-2L8.007 8l-.353-.354z"
      fill="#CED0D6"
    />
  </svg>
);

export const SmartStepInto: FC<SmartStepIntoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SmartStepIntoLight : SmartStepIntoDark;

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
