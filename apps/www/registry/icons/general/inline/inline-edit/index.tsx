/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InlineEditProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InlineEditLight: FC<
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
      d="m11.597 7.655 2.091-2.095a1.035 1.035 0 0 0 .007-1.474l-1.668-1.772-.005-.005a1.05 1.05 0 0 0-1.489.002L8.387 4.444m3.21 3.21-3.21-3.21m3.21 3.21L5.74 13.5H2.5v-3.18l5.887-5.876"
      stroke="#A8ADBD"
      strokeMiterlimit={10}
    />
  </svg>
);

const InlineEditDark: FC<
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
      d="m11.597 7.655 2.091-2.095a1.035 1.035 0 0 0 .007-1.474l-1.668-1.772-.005-.005a1.05 1.05 0 0 0-1.489.002L8.387 4.444m3.21 3.21-3.21-3.21m3.21 3.21L5.74 13.5H2.5v-3.18l5.887-5.876"
      stroke="#868A91"
      strokeMiterlimit={10}
    />
  </svg>
);

export const InlineEdit: FC<InlineEditProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InlineEditLight : InlineEditDark;

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

export default InlineEdit;
