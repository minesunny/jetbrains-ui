/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type KillDataSourceProcessProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const KillDataSourceProcessLight: FC<
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
      d="M12 3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5h-1V4a1 1 0 0 0-1-1"
      fill="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.05 12a2.5 2.5 0 0 1 2.45-2h2a.5.5 0 0 1 .5.5v.5h1.5a.5.5 0 0 1 0 1H14v2h1.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-.5.5h-2a2.5 2.5 0 0 1-2.45-2H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm.95 1.5v-1a1.5 1.5 0 0 1 1.5-1.5H13v4h-1.5a1.5 1.5 0 0 1-1.5-1.5"
      fill="#6C707E"
    />
  </svg>
);

const KillDataSourceProcessDark: FC<
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
      d="M12 3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5h-1V4a1 1 0 0 0-1-1"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.05 12a2.5 2.5 0 0 1 2.45-2h2a.5.5 0 0 1 .5.5v.5h1.5a.5.5 0 0 1 0 1H14v2h1.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-.5.5h-2a2.5 2.5 0 0 1-2.45-2H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm.95 1.5v-1a1.5 1.5 0 0 1 1.5-1.5H13v4h-1.5a1.5 1.5 0 0 1-1.5-1.5"
      fill="#CED0D6"
    />
  </svg>
);

export const KillDataSourceProcess: FC<KillDataSourceProcessProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? KillDataSourceProcessLight : KillDataSourceProcessDark;

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

export default KillDataSourceProcess;
