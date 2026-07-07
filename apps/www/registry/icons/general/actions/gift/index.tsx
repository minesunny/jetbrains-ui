/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type GiftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const GiftLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <path d="M2 5h11v1H2zM4 7h7v6H4z" fill="#EDF3FF" />
    <path
      d="M7.5 4V3A1.5 1.5 0 1 0 6 4.5h1a.5.5 0 0 0 .5-.5ZM7.5 3v1.5H9A1.5 1.5 0 1 0 7.5 3Z"
      stroke="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 7h-1v6.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V7H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1m-9 6V7h7v6zm9-7V5H2v1z"
      fill="#3574F0"
    />
    <path d="M7.5 4.5V13" stroke="#3574F0" />
  </svg>
);

const GiftDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <path d="M2 5h11v1H2zM4 7h7v6H4z" fill="#25324D" />
    <path
      d="M7.5 4V3A1.5 1.5 0 1 0 6 4.5h1a.5.5 0 0 0 .5-.5ZM7.5 3v1.5H9A1.5 1.5 0 1 0 7.5 3Z"
      stroke="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 7h-1v6.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V7H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1m-9 6V7h7v6zm9-7V5H2v1z"
      fill="#548AF7"
    />
    <path d="M7.5 4.5V13" stroke="#548AF7" />
  </svg>
);

export const Gift: FC<GiftProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GiftLight : GiftDark;

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

export default Gift;
