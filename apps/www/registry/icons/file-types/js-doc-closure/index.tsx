/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type JsDocClosureProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const JsDocClosureLight: FC<
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
    <path d="M9 12a3 3 0 1 0 3-3v3z" fill="#55A76A" />
    <path d="M4 9a3 3 0 1 0 3 3H4z" fill="#FFAF0F" />
    <path d="M12 7a3 3 0 1 0-3-3h3z" fill="#E55765" />
    <path d="M7 4a3 3 0 1 0-3 3V4z" fill="#4682FA" />
  </svg>
);

const JsDocClosureDark: FC<
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
    <path d="M9 12a3 3 0 1 0 3-3v3z" fill="#57965C" />
    <path d="M4 9a3 3 0 1 0 3 3H4z" fill="#F2C55C" />
    <path d="M12 7a3 3 0 1 0-3-3h3z" fill="#DB5C5C" />
    <path d="M7 4a3 3 0 1 0-3 3V4z" fill="#548AF7" />
  </svg>
);

export const JsDocClosure: FC<JsDocClosureProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JsDocClosureLight : JsDocClosureDark;

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

export default JsDocClosure;
