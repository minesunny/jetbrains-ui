/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type FeedbackRatingFocusedOnProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const FeedbackRatingFocusedOnLight: FC<
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
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <g clipPath="url(#a)">
      <path
        d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16"
        fill="#D4E2FF"
      />
      <path
        d="m16 3 3.439 8.267 8.925.716-6.8 5.825 2.078 8.71L16 21.85l-7.64 4.667 2.077-8.71-6.8-5.824 8.925-.716z"
        fill="#FFAF0F"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
    </defs>
  </svg>
);

const FeedbackRatingFocusedOnDark: FC<
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
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16"
          fill="#25324D"
        />
        <path
          d="m16 3 3.439 8.267 8.925.716-6.8 5.825 2.078 8.71L16 21.85l-7.64 4.667 2.077-8.71-6.8-5.824 8.925-.716z"
          fill="#F2C55C"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const FeedbackRatingFocusedOn: FC<FeedbackRatingFocusedOnProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? FeedbackRatingFocusedOnLight
      : FeedbackRatingFocusedOnDark;

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

export default FeedbackRatingFocusedOn;
