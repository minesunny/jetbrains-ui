/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type SendToTheLeftGrayedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const SendToTheLeftGrayedLight: FC<
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
      d="M6.853 3.147a.5.5 0 0 1 0 .707L3.706 7H13.5a.5.5 0 0 1 0 1H3.706l3.147 3.147a.5.5 0 1 1-.708.707l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .708 0"
      fill="#6C707E"
    />
  </svg>
);

const SendToTheLeftGrayedDark: FC<
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
      d="M6.853 3.147a.5.5 0 0 1 0 .707L3.706 7H13.5a.5.5 0 0 1 0 1H3.706l3.147 3.147a.5.5 0 1 1-.708.707l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .708 0"
      fill="#CED0D6"
    />
  </svg>
);

export const SendToTheLeftGrayed: FC<SendToTheLeftGrayedProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SendToTheLeftGrayedLight : SendToTheLeftGrayedDark;

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

export default SendToTheLeftGrayed;
