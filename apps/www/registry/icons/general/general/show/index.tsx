/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ShowProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ShowLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <circle cx={8} cy={8} r={2.5} stroke="#6C707E" />
    <path
      d="M8 3c1.634 0 3.286.585 4.652 1.535 1.315.915 2.331 2.147 2.816 3.465-.485 1.318-1.5 2.55-2.816 3.465C11.286 12.415 9.634 13 8 13s-3.286-.585-4.652-1.535C2.033 10.55 1.016 9.318.53 8c.485-1.318 1.502-2.55 2.817-3.465C4.714 3.585 6.366 3 8 3Z"
      stroke="#6C707E"
    />
  </svg>
);

const ShowDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <circle cx={8} cy={8} r={2.5} stroke="#CED0D6" />
    <path
      d="M8 3c1.634 0 3.286.585 4.652 1.535 1.315.915 2.331 2.147 2.816 3.465-.485 1.318-1.5 2.55-2.816 3.465C11.286 12.415 9.634 13 8 13s-3.286-.585-4.652-1.535C2.033 10.55 1.016 9.318.53 8c.485-1.318 1.502-2.55 2.817-3.465C4.714 3.585 6.366 3 8 3Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Show: FC<ShowProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ShowLight : ShowDark;

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

export default Show;
