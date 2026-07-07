/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SearchHistoryProps = SvgProps;

const SearchHistoryLight: FC<SvgProps> = ({
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
      d="m8.5 10.497 3 2.999M9.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path d="m11 7 2.5 2.5L16 7z" fill="#6C707E" />
  </svg>
);

const SearchHistoryDark: FC<SvgProps> = ({
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
      d="m8.5 10.497 3 2.999M9.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path d="m11 7 2.5 2.5L16 7z" fill="#CED0D6" />
  </svg>
);

export const SearchHistory: FC<SearchHistoryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SearchHistoryLight : SearchHistoryDark;

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

export default SearchHistory;
