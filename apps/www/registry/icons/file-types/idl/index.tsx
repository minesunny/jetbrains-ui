/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type IdlProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const IdlLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M3.185 13V3.9H4.27V13zM5.584 13V3.9h1.794q.702 0 1.144.396.443.397.65 1.229.208.825.208 2.151v1.547q0 1.326-.208 2.159-.207.825-.65 1.222Q8.08 13 7.378 13zm1.794-1.014q.306 0 .494-.293.196-.291.286-.896.09-.606.091-1.574V7.676q0-.968-.09-1.573-.092-.604-.287-.897-.188-.292-.494-.292H6.67v7.072zM10.383 3.9h1.073v8.08h2.073V13h-3.146z"
      fill="#834DF0"
    />
  </svg>
);

const IdlDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M3.185 13V3.9H4.27V13zM5.584 13V3.9h1.794q.702 0 1.144.396.443.397.65 1.229.208.825.208 2.151v1.547q0 1.326-.208 2.159-.207.825-.65 1.222Q8.08 13 7.378 13zm1.794-1.014q.306 0 .494-.293.196-.291.286-.896.09-.606.091-1.574V7.676q0-.968-.09-1.573-.092-.604-.287-.897-.188-.292-.494-.292H6.67v7.072zM10.383 3.9h1.073v8.08h2.073V13h-3.146z"
      fill="#B589EC"
    />
  </svg>
);

export const Idl: FC<IdlProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IdlLight : IdlDark;

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

export default Idl;
