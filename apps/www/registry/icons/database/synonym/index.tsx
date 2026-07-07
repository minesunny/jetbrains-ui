/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type SynonymProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const SynonymLight: FC<
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
      d="M11.707 9.586a.5.5 0 0 1 0-.707l1.344-1.344A3.243 3.243 0 0 0 8.465 2.95L7.12 4.293a.5.5 0 0 1-.707-.707l1.344-1.344a4.243 4.243 0 0 1 6 6l-1.344 1.344a.5.5 0 0 1-.707 0"
      fill="#6C707E"
    />
    <path
      d="M10.646 4.646a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708-.708z"
      fill="#6C707E"
    />
    <path
      d="M4.293 6.414a.5.5 0 0 1 0 .707l-1.34 1.34a3.243 3.243 0 1 0 4.586 4.586l1.34-1.34a.5.5 0 1 1 .707.707l-1.34 1.34a4.243 4.243 0 1 1-6-6l1.34-1.34a.5.5 0 0 1 .707 0"
      fill="#6C707E"
    />
  </svg>
);

const SynonymDark: FC<
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
      d="M11.707 9.586a.5.5 0 0 1 0-.707l1.344-1.344A3.243 3.243 0 0 0 8.465 2.95L7.12 4.293a.5.5 0 0 1-.707-.707l1.344-1.344a4.243 4.243 0 0 1 6 6l-1.344 1.344a.5.5 0 0 1-.707 0"
      fill="#CED0D6"
    />
    <path
      d="M10.646 4.646a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708-.708z"
      fill="#CED0D6"
    />
    <path
      d="M4.293 6.414a.5.5 0 0 1 0 .707l-1.34 1.34a3.243 3.243 0 1 0 4.586 4.586l1.34-1.34a.5.5 0 1 1 .707.707l-1.34 1.34a4.243 4.243 0 1 1-6-6l1.34-1.34a.5.5 0 0 1 .707 0"
      fill="#CED0D6"
    />
  </svg>
);

export const Synonym: FC<SynonymProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SynonymLight : SynonymDark;

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

export default Synonym;
