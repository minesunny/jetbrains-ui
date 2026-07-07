/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ScratchesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ScratchesLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
      d="M8.027 3H2.5a.5.5 0 0 0 0 1h5.527a4.6 4.6 0 0 1 0-1M8.758 6H2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .145-.021c-.341-.28-.64-.61-.887-.979M2.5 12a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2.5 9a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 1 0 .707-.707L13 3.293z"
      fill="#4682FA"
    />
  </svg>
);

const ScratchesDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
      d="M8.027 3H2.5a.5.5 0 0 0 0 1h5.527a4.6 4.6 0 0 1 0-1M8.758 6H2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .145-.021c-.341-.28-.64-.61-.887-.979M2.5 12a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2.5 9a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 1 0 .707-.707L13 3.293z"
      fill="#548AF7"
    />
  </svg>
);

export const Scratches: FC<ScratchesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScratchesLight : ScratchesDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Scratches;
