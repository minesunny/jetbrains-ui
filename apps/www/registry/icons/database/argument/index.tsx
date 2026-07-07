/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ArgumentProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ArgumentLight: FC<
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
    <circle cx={8} cy={8} r={6.5} fill="#FFF4EB" stroke="#E66D17" />
    <path
      d="M11.593 10.961 10.477 8l1.024-2.961h-.96l-.602 1.797C9.658 5.66 8.763 4.9 7.556 4.9 5.908 4.9 4.77 6.16 4.77 8s1.139 3.1 2.787 3.1c1.218 0 2.118-.773 2.39-1.968l.635 1.83zm-3.886-.734C6.56 10.227 5.78 9.319 5.78 8s.78-2.227 1.926-2.227c1.093 0 1.839.908 1.839 2.227s-.746 2.227-1.84 2.227"
      fill="#E66D17"
    />
  </svg>
);

const ArgumentDark: FC<
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
    <circle cx={8} cy={8} r={6.5} fill="#45322B" stroke="#C77D55" />
    <path
      d="M11.593 10.961 10.477 8l1.024-2.961h-.96l-.602 1.797C9.658 5.66 8.763 4.9 7.556 4.9 5.908 4.9 4.77 6.16 4.77 8s1.139 3.1 2.787 3.1c1.218 0 2.118-.773 2.39-1.968l.635 1.83zm-3.886-.734C6.56 10.227 5.78 9.319 5.78 8s.78-2.227 1.926-2.227c1.093 0 1.839.908 1.839 2.227s-.746 2.227-1.84 2.227"
      fill="#C77D55"
    />
  </svg>
);

export const Argument: FC<ArgumentProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ArgumentLight : ArgumentDark;

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

export default Argument;
