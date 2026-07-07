/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type FeedbackRatingOnProps = SvgProps;

const FeedbackRatingOnLight: FC<SvgProps> = ({
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
    <path
      d="m16 3 3.439 8.267 8.925.716-6.8 5.825 2.078 8.71L16 21.85l-7.64 4.667 2.077-8.71-6.8-5.824 8.925-.716z"
      fill="#FFAF0F"
    />
  </svg>
);

const FeedbackRatingOnDark: FC<SvgProps> = ({
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
        d="m16 3 3.439 8.267 8.925.716-6.8 5.825 2.078 8.71L16 21.85l-7.64 4.667 2.077-8.71-6.8-5.824 8.925-.716z"
        fill="#F2C55C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const FeedbackRatingOn: FC<FeedbackRatingOnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FeedbackRatingOnLight : FeedbackRatingOnDark;

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

export default FeedbackRatingOn;
