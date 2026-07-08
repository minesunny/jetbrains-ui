/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type UnknownProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Unknown = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: UnknownProps) => (
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
    <rect
      x={2.5}
      y={2.5}
      width={11}
      height={11}
      rx={1.5}
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M7.326 9.03q0-.34.115-.595.12-.26.285-.44.17-.184.44-.42.24-.21.375-.35.14-.145.23-.335a.94.94 0 0 0 .095-.425.84.84 0 0 0-.23-.61q-.23-.24-.61-.24-.42 0-.675.27-.25.27-.245.705h-1.38q0-.69.28-1.185.28-.5.8-.76.525-.265 1.235-.265.684 0 1.19.245t.775.695q.27.446.265 1.05 0 .455-.145.785-.146.33-.345.54-.201.21-.525.475-.226.18-.355.3-.126.12-.21.275a.7.7 0 0 0-.08.335v.175H7.326zM8.74 11.5h-1.5V10h1.5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Unknown;
