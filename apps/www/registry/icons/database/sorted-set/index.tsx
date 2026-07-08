/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type SortedSetProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const SortedSet = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: SortedSetProps) => (
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
    <path
      d="M2.605 8.855q.398.345.383.923l-.03 1.792v.091q.012.679.315 1.191.04.07.086.135.319.457.844.713.608.3 1.41.3H6.5v-1.005h-.88q-.712 0-1.132-.397-.413-.39-.398-1.05l.03-1.778q.015-.697-.412-1.185-.427-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.862 0-1.5.315t-.983.9q-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H1v1.08h.533q.675 0 1.072.345"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10 11H6v-1h4zM10 8.987V7.923L7.463 7 10 6.077V5.013L6 6.468v1.064z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M13.397 8.855q-.398.345-.383.923l.03 1.792q.008.735-.322 1.283-.323.555-.93.847-.6.3-1.402.3H9.5v-1.005h.882q.713 0 1.125-.397.42-.39.405-1.05l-.03-1.778q-.015-.697.412-1.185.427-.495 1.156-.63-.728-.052-1.155-.532-.428-.488-.413-1.253l.03-1.567q.008-.735-.45-1.163-.45-.435-1.23-.435H9.5V2h.74q.863 0 1.5.315.638.315.974.9.345.585.33 1.365l-.03 1.583q-.015.577.383.922t1.072.345H15v1.08h-.53q-.675 0-1.073.345"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default SortedSet;
