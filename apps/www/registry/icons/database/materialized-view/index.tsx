/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type MaterializedViewProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const MaterializedViewLight: FC<
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
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M14 6h-3v3h-1V6H6v3H5V6H2v6a1 1 0 0 0 1 1h1v1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1zM5 3H3a1 1 0 0 0-1 1v1h3zm1 0v2h4V3zm5 0v2h3V4a1 1 0 0 0-1-1z"
        fill="#6C707E"
      />
      <path
        d="M6.5 10a.5.5 0 0 1 .464.314l1.536 3.84 1.536-3.84a.5.5 0 0 1 .928 0l1.536 3.84 1.536-3.84a.5.5 0 0 1 .928 0l1 2.5a.5.5 0 0 1-.928.372l-.536-1.34-1.536 3.84a.5.5 0 0 1-.928 0l-1.536-3.84-1.536 3.84a.5.5 0 0 1-.928 0L6.5 11.846l-.536 1.34a.5.5 0 1 1-.928-.372l1-2.5A.5.5 0 0 1 6.5 10"
        fill="#3574F0"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const MaterializedViewDark: FC<
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
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M14 6h-3v3h-1V6H6v3H5V6H2v6a1 1 0 0 0 1 1h1v1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1zM5 3H3a1 1 0 0 0-1 1v1h3zm1 0v2h4V3zm5 0v2h3V4a1 1 0 0 0-1-1z"
        fill="#CED0D6"
      />
      <path
        d="M6.5 10a.5.5 0 0 1 .464.314l1.536 3.84 1.536-3.84a.5.5 0 0 1 .928 0l1.536 3.84 1.536-3.84a.5.5 0 0 1 .928 0l1 2.5a.5.5 0 0 1-.928.372l-.536-1.34-1.536 3.84a.5.5 0 0 1-.928 0l-1.536-3.84-1.536 3.84a.5.5 0 0 1-.928 0L6.5 11.846l-.536 1.34a.5.5 0 1 1-.928-.372l1-2.5A.5.5 0 0 1 6.5 10"
        fill="#548AF7"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const MaterializedView: FC<MaterializedViewProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MaterializedViewLight : MaterializedViewDark;

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

export default MaterializedView;
