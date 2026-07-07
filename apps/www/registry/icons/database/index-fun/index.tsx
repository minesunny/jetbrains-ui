/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type IndexFunProps = SvgProps;

const IndexFunLight: FC<SvgProps> = ({
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
      d="M7 2a.5.5 0 0 0-.5.5v.974a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V2.5A.5.5 0 0 0 8 2zM4.5 6.5A.5.5 0 0 1 5 6h2.5a.5.5 0 0 1 .5.5V14h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H7V7H5a.5.5 0 0 1-.5-.5"
      fill="#834DF0"
    />
  </svg>
);

const IndexFunDark: FC<SvgProps> = ({
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
      d="M7 2a.5.5 0 0 0-.5.5v.974a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V2.5A.5.5 0 0 0 8 2zM4.5 6.5A.5.5 0 0 1 5 6h2.5a.5.5 0 0 1 .5.5V14h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H7V7H5a.5.5 0 0 1-.5-.5"
      fill="#B589EC"
    />
  </svg>
);

export const IndexFun: FC<IndexFunProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IndexFunLight : IndexFunDark;

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

export default IndexFun;
