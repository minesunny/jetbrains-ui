/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DefaultConstraintProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DefaultConstraint = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DefaultConstraintProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="fill-[#F2FCF3] dark:fill-[#253627] stroke-[#208A3C] dark:stroke-[#57965C]"
    />
    <path
      d="M9.501 4.012h.961v7.35h-.96zM7.58 11.488q-.741 0-1.323-.357a2.45 2.45 0 0 1-.903-.998q-.326-.64-.326-1.459t.326-1.46.903-.997Q6.84 5.86 7.58 5.86q.683 0 1.202.304.525.3.814.851.294.546.304 1.27h-.357v.777H9.9q-.01.725-.304 1.276a2.1 2.1 0 0 1-.814.85q-.52.3-1.202.3m.184-.866q.51 0 .908-.247t.62-.688q.22-.441.22-1.013 0-.573-.22-1.013a1.66 1.66 0 0 0-.62-.688 1.7 1.7 0 0 0-.908-.247q-.51 0-.903.247a1.7 1.7 0 0 0-.615.688 2.3 2.3 0 0 0-.215 1.013q0 .572.215 1.013.22.442.615.688.393.247.903.247"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default DefaultConstraint;
