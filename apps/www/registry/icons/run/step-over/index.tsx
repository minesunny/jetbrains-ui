import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StepOverProps = IconProps;

const StepOverLight: FC<SvgProps> = ({
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
      d="M13.983 4.227a.5.5 0 0 0-1 .003l.013 4.079-5.16-4.68-.353-.32-.336.337-5 5a.5.5 0 0 0 .707.708L7.517 4.69l4.725 4.285-3.987.013a.5.5 0 1 0 .004 1l5.242-.017.5-.002-.001-.5z"
      fill="#6C707E"
    />
  </svg>
);

const StepOverDark: FC<SvgProps> = ({
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
      d="M13.983 4.227a.5.5 0 0 0-1 .003l.013 4.079-5.16-4.68-.353-.32-.336.337-5 5a.5.5 0 0 0 .707.708L7.517 4.69l4.725 4.285-3.987.013a.5.5 0 1 0 .004 1l5.242-.017.5-.002-.001-.5z"
      fill="#CED0D6"
    />
  </svg>
);

export const StepOver: FC<StepOverProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StepOverLight : StepOverDark;

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
