/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type HtmlProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const HtmlLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M6.368 4.974a.6.6 0 1 0-.737-.948L.522 8l5.11 3.974a.6.6 0 0 0 .736-.948L2.477 8zM9.631 4.974a.6.6 0 0 1 .737-.948L15.478 8l-5.11 3.974a.6.6 0 0 1-.737-.948L13.523 8z"
      fill="#369650"
    />
  </svg>
);

const HtmlDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M6.368 4.974a.6.6 0 1 0-.737-.948L.522 8l5.11 3.974a.6.6 0 0 0 .736-.948L2.477 8zM9.631 4.974a.6.6 0 0 1 .737-.948L15.478 8l-5.11 3.974a.6.6 0 0 1-.737-.948L13.523 8z"
      fill="#57965C"
    />
  </svg>
);

export const Html: FC<HtmlProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HtmlLight : HtmlDark;

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

export default Html;
