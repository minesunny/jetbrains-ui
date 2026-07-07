/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ShowLibraryContentsProps = SvgProps;

const ShowLibraryContentsLight: FC<SvgProps> = ({
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
      d="M11 6h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm-1-3H7v10h3zm1 4v6h3V7zM6 5v8H3V5z"
      fill="#6C707E"
    />
    <path d="M7 3h3v10H7zM11 13V7h3v6zM6 13V5H3v8z" fill="#EBECF0" />
  </svg>
);

const ShowLibraryContentsDark: FC<SvgProps> = ({
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
      d="M11 6h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm-1-3H7v10h3zm1 4v6h3V7zM6 5v8H3V5z"
      fill="#CED0D6"
    />
    <path d="M7 3h3v10H7zM11 13V7h3v6zM6 13V5H3v8z" fill="#43454A" />
  </svg>
);

export const ShowLibraryContents: FC<ShowLibraryContentsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ShowLibraryContentsLight : ShowLibraryContentsDark;

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

export default ShowLibraryContents;
