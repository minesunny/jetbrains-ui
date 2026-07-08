/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PackageJsonProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PackageJson = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PackageJsonProps) => (
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
      d="M12 15.5 8.5 14v-4L12 8.5l3.5 1.5v4z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      strokeLinejoin="round"
      d="M12 15.5 8.5 14v-4m3.5 5.5 3.5-1.5v-4M12 15.5v-4M8.5 10l3.5 1.5M8.5 10 12 8.5l3.5 1.5M12 11.5l3.5-1.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.608.3 1.41.3H7v-1.005h-.38q-.712 0-1.132-.397-.413-.39-.398-1.05l.03-1.778q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M12.35 7.041a1.5 1.5 0 0 0-.94.08l-.259.11q-.28-.438-.269-1.061l.03-1.567q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365l-.03 1.583q-.013.54.335.878"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default PackageJson;
