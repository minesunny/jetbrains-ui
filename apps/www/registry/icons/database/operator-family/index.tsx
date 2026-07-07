/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type OperatorFamilyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const OperatorFamilyLight: FC<
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
    <path d="M11 9h4.5v.945h-3.49V12H15v.945h-2.99V16H11z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14a6 6 0 0 0 2-.341v1.051A7 7 0 1 1 15 8h-1a6 6 0 1 0-6 6"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V8c0 1.127.812 2.055 1.951 2.055"
      fill="#6C707E"
    />
  </svg>
);

const OperatorFamilyDark: FC<
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
    <path d="M11 9h4.5v.945h-3.49V12H15v.945h-2.99V16H11z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14a6 6 0 0 0 2-.341v1.051A7 7 0 1 1 15 8h-1a6 6 0 1 0-6 6"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V8c0 1.127.812 2.055 1.951 2.055"
      fill="#CED0D6"
    />
  </svg>
);

export const OperatorFamily: FC<OperatorFamilyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? OperatorFamilyLight : OperatorFamilyDark;

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

export default OperatorFamily;
