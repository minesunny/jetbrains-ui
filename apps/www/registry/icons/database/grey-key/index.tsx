/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type GreyKeyProps = SvgProps;

const GreyKeyLight: FC<SvgProps> = ({
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
      d="M8 8.969a4 4 0 1 0-1 0V14.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H8v-1h1.5a.5.5 0 0 0 0-1H8zM10.5 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#6C707E"
    />
  </svg>
);

const GreyKeyDark: FC<SvgProps> = ({
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
      d="M8 8.969a4 4 0 1 0-1 0V14.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H8v-1h1.5a.5.5 0 0 0 0-1H8zM10.5 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#CED0D6"
    />
  </svg>
);

export const GreyKey: FC<GreyKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GreyKeyLight : GreyKeyDark;

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

export default GreyKey;
