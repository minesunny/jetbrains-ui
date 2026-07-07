/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type QuickfixOffBulbProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const QuickfixOffBulbLight: FC<
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
    <path fill="#6C707E" d="M5.701 12H10.300999999999998V13H5.701z" />
    <path d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5z"
      fill="#4682FA"
    />
  </svg>
);

const QuickfixOffBulbDark: FC<
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
    <path fill="#CED0D6" d="M5.701 12H10.300999999999998V13H5.701z" />
    <path d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5z"
      fill="#3574F0"
    />
  </svg>
);

export const QuickfixOffBulb: FC<QuickfixOffBulbProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? QuickfixOffBulbLight : QuickfixOffBulbDark;

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

export default QuickfixOffBulb;
