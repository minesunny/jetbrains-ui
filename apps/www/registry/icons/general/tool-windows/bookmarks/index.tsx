/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type BookmarksProps = SvgProps;

const BookmarksLight: FC<SvgProps> = ({
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
      d="M5 2h5.999a1.5 1.5 0 0 1 1.5 1.5v10.377a.5.5 0 0 1-.812.39l-3.374-2.704-.314-.252-.312.252-3.375 2.704a.5.5 0 0 1-.812-.39V3.5A1.5 1.5 0 0 1 5 2Z"
      stroke="#6C707E"
    />
  </svg>
);

const BookmarksDark: FC<SvgProps> = ({
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
      d="M5 2h5.999a1.5 1.5 0 0 1 1.5 1.5v10.377a.5.5 0 0 1-.812.39l-3.374-2.704-.314-.252-.312.252-3.375 2.704a.5.5 0 0 1-.812-.39V3.5A1.5 1.5 0 0 1 5 2Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Bookmarks: FC<BookmarksProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BookmarksLight : BookmarksDark;

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

export default Bookmarks;
