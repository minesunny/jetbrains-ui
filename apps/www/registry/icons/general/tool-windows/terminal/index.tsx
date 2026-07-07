/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type TerminalProps = SvgProps;

const TerminalLight: FC<SvgProps> = ({
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
    <rect x={1.5} y={2.5} width={13} height={11} rx={1.5} stroke="#6C707E" />
    <path
      d="M7.5 10.5h3M4.48 9.48 6.46 7.5 4.48 5.52"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const TerminalDark: FC<SvgProps> = ({
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
    <rect x={1.5} y={2.5} width={13} height={11} rx={1.5} stroke="#CED0D6" />
    <path
      d="M7.5 10.5h3M4.48 9.48 6.46 7.5 4.48 5.52"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const Terminal: FC<TerminalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TerminalLight : TerminalDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Terminal;
