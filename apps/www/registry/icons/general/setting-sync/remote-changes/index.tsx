/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RemoteChangesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RemoteChangesLight: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4a3 3 0 0 0-2.713 1.718l-.129.271-.3.014A3 3 0 0 0 5 12h6.5a2.5 2.5 0 0 0 .001-5H11.5l-.469.003-.061-.432A3 3 0 0 0 8 4M4.519 5.029a4.001 4.001 0 0 1 7.36.992A3.5 3.5 0 0 1 11.5 13H5a4 4 0 0 1-.481-7.971"
      fill="#6C707E"
    />
  </svg>
);

const RemoteChangesDark: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4a3 3 0 0 0-2.713 1.718l-.129.271-.3.014A3 3 0 0 0 5 12h6.5a2.5 2.5 0 0 0 .001-5H11.5l-.469.003-.061-.432A3 3 0 0 0 8 4M4.519 5.029a4.001 4.001 0 0 1 7.36.992A3.5 3.5 0 0 1 11.5 13H5a4 4 0 0 1-.481-7.971"
      fill="#6F737A"
    />
  </svg>
);

export const RemoteChanges: FC<RemoteChangesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RemoteChangesLight : RemoteChangesDark;

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

export default RemoteChanges;
