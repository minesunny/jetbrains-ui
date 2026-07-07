/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type AliasProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const AliasLight: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9.999 11.377 13.753 8 10 4.623zM9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#3574F0"
    />
  </svg>
);

const AliasDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9.999 11.377 13.753 8 10 4.623zM9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#548AF7"
    />
  </svg>
);

export const Alias: FC<AliasProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AliasLight : AliasDark;

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

export default Alias;
