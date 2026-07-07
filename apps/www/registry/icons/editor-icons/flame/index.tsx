/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type FlameProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const FlameLight: FC<
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
      d="m7.857 1.65.013.013.031.033.117.124a19.754 19.754 0 0 1 1.644 2.05c.88 1.27 1.838 3.006 1.838 4.63 0 2.352-2.087 4-4.5 4s-4.5-1.648-4.5-4c0-1.07.41-2.271.79-3.168a17 17 0 0 1 .708-1.46l.05-.09q.01-.015.014-.024l.004-.007.001-.002v-.001l.328-.56L5.83 4.624 7.04 1.803l.295-.688z"
      stroke="#DB3B4B"
    />
    <path
      d="M5.5 10c.01-.849.798-1.798 1.5-2.5.702.702 1.49 1.651 1.5 2.5"
      stroke="#DB3B4B"
      strokeLinecap="round"
    />
  </svg>
);

const FlameDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="m7.857 1.65.013.013.031.033.117.124a19.754 19.754 0 0 1 1.644 2.05c.88 1.27 1.838 3.006 1.838 4.63 0 2.352-2.087 4-4.5 4s-4.5-1.648-4.5-4c0-1.07.41-2.271.79-3.168a17 17 0 0 1 .708-1.46l.05-.09q.01-.015.014-.024l.004-.007.001-.002v-.001l.328-.56L5.83 4.624 7.04 1.803l.295-.688z"
      stroke="#DB5C5C"
    />
    <path
      d="M5.5 10c.01-.849.798-1.798 1.5-2.5.702.702 1.49 1.651 1.5 2.5"
      stroke="#DB5C5C"
      strokeLinecap="round"
    />
  </svg>
);

export const Flame: FC<FlameProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FlameLight : FlameDark;

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

export default Flame;
