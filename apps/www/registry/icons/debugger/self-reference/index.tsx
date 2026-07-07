/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type SelfReferenceProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const SelfReferenceLight: FC<
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
    <circle cx={8} cy={8} r={7} fill="#FFF4EB" />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      fill="#E66D17"
    />
    <path
      d="M4.801 2.923a.5.5 0 1 0-.534-.846A7 7 0 1 0 12.9 3H15.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V3.528a6 6 0 1 1-7.199-.605"
      fill="#E66D17"
    />
  </svg>
);

const SelfReferenceDark: FC<
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
    <circle cx={8} cy={8} r={7} fill="#45322B" />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      fill="#C77D55"
    />
    <path
      d="M4.801 2.923a.5.5 0 1 0-.534-.846A7 7 0 1 0 12.9 3H15.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V3.528a6 6 0 1 1-7.199-.605"
      fill="#C77D55"
    />
  </svg>
);

export const SelfReference: FC<SelfReferenceProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SelfReferenceLight : SelfReferenceDark;

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

export default SelfReference;
