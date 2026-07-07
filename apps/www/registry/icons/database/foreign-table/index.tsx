/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ForeignTableProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ForeignTableLight: FC<
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.879L11 12.879v-.964A1.5 1.5 0 0 1 11.5 9H15V4a2 2 0 0 0-2-2z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1V6h-3v3.085a1.5 1.5 0 0 0-1 1.415V6H6v7h4v-2.5a1.5 1.5 0 0 0 1 1.415v.964L9.879 14H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      fill="#6C707E"
    />
  </svg>
);

const ForeignTableDark: FC<
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.879L11 12.879v-.964A1.5 1.5 0 0 1 11.5 9H15V4a2 2 0 0 0-2-2z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1V6h-3v3.085a1.5 1.5 0 0 0-1 1.415V6H6v7h4v-2.5a1.5 1.5 0 0 0 1 1.415v.964L9.879 14H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      fill="#CED0D6"
    />
  </svg>
);

export const ForeignTable: FC<ForeignTableProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ForeignTableLight : ForeignTableDark;

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

export default ForeignTable;
