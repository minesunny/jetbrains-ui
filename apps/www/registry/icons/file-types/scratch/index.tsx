import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type ScratchProps = SvgProps;

const ScratchLight: FC<SvgProps> = ({
  size,
  className,
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 1 0 .707-.707L13 3.293z"
      fill="#4682FA"
    />
  </svg>
);

const ScratchDark: FC<SvgProps> = ({
  size,
  className,
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 1 0 .707-.707L13 3.293z"
      fill="#548AF7"
    />
  </svg>
);

export const Scratch: FC<ScratchProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScratchLight : ScratchDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
