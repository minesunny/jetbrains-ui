/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type MongoDbProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const MongoDbLight: FC<
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M10.283 7c0 4.375-2.844 5.25-2.844 5.25S7 11.813 7 10.5V0s3.282 2.625 3.282 7"
      fill="#12924F"
    />
    <path
      d="M3.72 7c0 4.375 2.844 5.25 2.844 5.25S7 11.813 7 10.5V0S3.72 2.625 3.72 7"
      fill="#10AA50"
    />
    <path
      d="M6.564 12.25 6.782 14h.438l.219-1.75S7 11.813 7 10.5c0 1.313-.437 1.75-.437 1.75"
      fill="#B8C4C2"
    />
  </svg>
);

const MongoDbDark: FC<
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M10.283 7c0 4.375-2.844 5.25-2.844 5.25S7 11.813 7 10.5V0s3.282 2.625 3.282 7"
      fill="#12924F"
    />
    <path
      d="M3.72 7c0 4.375 2.844 5.25 2.844 5.25S7 11.813 7 10.5V0S3.72 2.625 3.72 7"
      fill="#10AA50"
    />
    <path
      d="M6.564 12.25 6.782 14h.438l.219-1.75S7 11.813 7 10.5c0 1.313-.437 1.75-.437 1.75"
      fill="#B8C4C2"
    />
  </svg>
);

export const MongoDb: FC<MongoDbProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MongoDbLight : MongoDbDark;

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

export default MongoDb;
