import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointMethodMutedDependentProps = IconProps;

const BreakpointMethodMutedDependentLight: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="#6C707E"
    />
    <path
      d="M3.189 5.932a3.5 3.5 0 0 1-1.954-.167l-.528.528a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 0 0-1.414L7.707.707a1 1 0 0 0-1.414 0l-.529.528a3.5 3.5 0 0 1 .168 1.954L7 2.121 11.879 7l-4.88 4.879L2.122 7z"
      fill="#6C707E"
    />
  </svg>
);

const BreakpointMethodMutedDependentDark: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="#CED0D6"
    />
    <path
      d="M3.189 5.932a3.5 3.5 0 0 1-1.954-.167l-.528.528a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 0 0-1.414L7.707.707a1 1 0 0 0-1.414 0l-.529.528a3.5 3.5 0 0 1 .168 1.954L7 2.121 11.879 7l-4.88 4.879L2.122 7z"
      fill="#CED0D6"
    />
  </svg>
);

export const BreakpointMethodMutedDependent: FC<
  BreakpointMethodMutedDependentProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointMethodMutedDependentLight
      : BreakpointMethodMutedDependentDark;

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
