/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ArgumentProps = SvgProps;

const ArgumentLight: FC<SvgProps> = ({
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
    <circle cx={8} cy={8} r={6.5} fill="#FFF4EB" stroke="#E66D17" />
    <path
      d="M11.5932 10.9612L10.477 8.00002L11.5006 5.03883H10.5406L9.93908 6.83637C9.658 5.65941 8.76328 4.90002 7.55624 4.90002C5.90792 4.90002 4.76855 6.16085 4.76855 8.00002C4.76855 9.8392 5.90792 11.1 7.55624 11.1C8.77369 11.1 9.67419 10.3268 9.9466 9.13187L10.5811 10.9612H11.5932ZM7.70661 10.2267C6.56147 10.2267 5.78068 9.31868 5.78068 8.00002C5.78068 6.68137 6.56147 5.77335 7.70661 5.77335C8.79971 5.77335 9.54579 6.68137 9.54579 8.00002C9.54579 9.31868 8.79971 10.2267 7.70661 10.2267Z"
      fill="#E66D17"
    />
  </svg>
);

const ArgumentDark: FC<SvgProps> = ({
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
    <circle cx={8} cy={8} r={6.5} fill="#45322B" stroke="#C77D55" />
    <path
      d="M11.5932 10.9612L10.477 8.00002L11.5006 5.03883H10.5406L9.93908 6.83637C9.658 5.65941 8.76328 4.90002 7.55624 4.90002C5.90792 4.90002 4.76855 6.16085 4.76855 8.00002C4.76855 9.8392 5.90792 11.1 7.55624 11.1C8.77369 11.1 9.67419 10.3268 9.9466 9.13187L10.5811 10.9612H11.5932ZM7.70661 10.2267C6.56147 10.2267 5.78068 9.31868 5.78068 8.00002C5.78068 6.68137 6.56147 5.77335 7.70661 5.77335C8.79971 5.77335 9.54579 6.68137 9.54579 8.00002C9.54579 9.31868 8.79971 10.2267 7.70661 10.2267Z"
      fill="#C77D55"
    />
  </svg>
);

export const Argument: FC<ArgumentProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ArgumentLight : ArgumentDark;

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

export default Argument;
