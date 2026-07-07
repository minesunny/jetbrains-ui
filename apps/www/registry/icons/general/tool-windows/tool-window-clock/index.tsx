/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ToolWindowClockProps = SvgProps;

const ToolWindowClockLight: FC<SvgProps> = ({
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
      d="M8 6v3l-2.5 1.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={8} cy={9} r={5.5} stroke="#6C707E" />
    <path d="M5.5 1.5h5" stroke="#6C707E" strokeLinecap="round" />
  </svg>
);

const ToolWindowClockDark: FC<SvgProps> = ({
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
      d="M8 6v3l-2.5 1.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={8} cy={9} r={5.5} stroke="#CED0D6" />
    <path d="M5.5 1.5h5" stroke="#CED0D6" strokeLinecap="round" />
  </svg>
);

export const ToolWindowClock: FC<ToolWindowClockProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowClockLight : ToolWindowClockDark;

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

export default ToolWindowClock;
