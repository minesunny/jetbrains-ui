/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type JavadocEditProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const JavadocEditLight: FC<
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
      d="m10.597 6.655 2.091-2.095a1.035 1.035 0 0 0 .007-1.474l-1.668-1.772-.005-.005a1.05 1.05 0 0 0-1.489.002L7.387 3.444m3.21 3.21-3.21-3.21m3.21 3.21L4.74 12.5H1.5V9.32l5.887-5.876"
      stroke="#6C707E"
      strokeMiterlimit={10}
    />
  </svg>
);

const JavadocEditDark: FC<
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
      d="m10.597 6.655 2.091-2.095a1.035 1.035 0 0 0 .007-1.474l-1.668-1.772-.005-.005a1.05 1.05 0 0 0-1.489.002L7.387 3.444m3.21 3.21-3.21-3.21m3.21 3.21L4.74 12.5H1.5V9.32l5.887-5.876"
      stroke="#CED0D6"
      strokeMiterlimit={10}
    />
  </svg>
);

export const JavadocEdit: FC<JavadocEditProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JavadocEditLight : JavadocEditDark;

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

export default JavadocEdit;
