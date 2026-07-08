/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EvaluateExpression = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <rect
      x={4.5}
      y={4.5}
      width={7}
      height={2}
      rx={0.5}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <rect
      x={4.3}
      y={8}
      width={1.4}
      height={1.4}
      rx={0.7}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={7.3}
      y={8}
      width={1.4}
      height={1.4}
      rx={0.7}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10.3}
      y={8}
      width={1.4}
      height={1.4}
      rx={0.7}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={4.3}
      y={10.6}
      width={1.4}
      height={1.4}
      rx={0.7}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={7.3}
      y={10.6}
      width={1.4}
      height={1.4}
      rx={0.7}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10.3}
      y={10.6}
      width={1.4}
      height={1.4}
      rx={0.7}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default EvaluateExpression;
