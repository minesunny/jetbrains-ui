import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StepOutProps = IconProps;

const StepOutLight: FC<SvgProps> = ({
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
      d="M12.354 5.853a.5.5 0 0 1-.707.707L8.5 3.414v8.093a.5.5 0 1 1-1 0V3.414L4.354 6.56a.5.5 0 0 1-.708-.707l4-4L8 1.5l.354.353z"
      fill="#6C707E"
    />
  </svg>
);

const StepOutDark: FC<SvgProps> = ({
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
      d="M12.354 5.853a.5.5 0 0 1-.708.707L8.5 3.414v8.093a.5.5 0 1 1-1 0V3.414L4.354 6.56a.5.5 0 0 1-.708-.707l4-4L8 1.5l.354.353z"
      fill="#CED0D6"
    />
  </svg>
);

export const StepOut: FC<StepOutProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StepOutLight : StepOutDark;

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
