/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ColumnGreyKeyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ColumnGreyKeyLight: FC<
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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M1.5 4C1.5 3.17157 2.17157 2.5 3 2.5H5.5V13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V4Z"
      stroke="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9.5C16 10.7095 15.1411 11.7184 14 11.95V14H16V15H14V16H13V11.95C11.8589 11.7184 11 10.7095 11 9.5C11 8.11929 12.1193 7 13.5 7C14.8807 7 16 8.11929 16 9.5ZM13.5 11C14.3284 11 15 10.3284 15 9.5C15 8.67157 14.3284 8 13.5 8C12.6716 8 12 8.67157 12 9.5C12 10.3284 12.6716 11 13.5 11Z"
      fill="#6C707E"
    />
    <path d="M12 14H6V13H12V14Z" fill="#6C707E" />
    <path
      d="M15 6.33682V4C15 2.89543 14.1046 2 13 2H6V3H13C13.5523 3 14 3.44772 14 4V6.03544C14.3531 6.08595 14.6891 6.18915 15 6.33682Z"
      fill="#6C707E"
    />
  </svg>
);

const ColumnGreyKeyDark: FC<
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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M1.5 4C1.5 3.17157 2.17157 2.5 3 2.5H5.5V13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V4Z"
      stroke="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9.5C16 10.7095 15.1411 11.7184 14 11.95V14H16V15H14V16H13V11.95C11.8589 11.7184 11 10.7095 11 9.5C11 8.11929 12.1193 7 13.5 7C14.8807 7 16 8.11929 16 9.5ZM13.5 11C14.3284 11 15 10.3284 15 9.5C15 8.67157 14.3284 8 13.5 8C12.6716 8 12 8.67157 12 9.5C12 10.3284 12.6716 11 13.5 11Z"
      fill="#CED0D6"
    />
    <path d="M12 14H6V13H12V14Z" fill="#CED0D6" />
    <path
      d="M15 6.33682V4C15 2.89543 14.1046 2 13 2H6V3H13C13.5523 3 14 3.44772 14 4V6.03544C14.3531 6.08595 14.6891 6.18915 15 6.33682Z"
      fill="#CED0D6"
    />
  </svg>
);

export const ColumnGreyKey: FC<ColumnGreyKeyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ColumnGreyKeyLight : ColumnGreyKeyDark;

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

export default ColumnGreyKey;
