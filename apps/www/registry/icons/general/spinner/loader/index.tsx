/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type LoaderProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Loader = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: LoaderProps) => (
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
      opacity={0.93}
      x={2.35}
      y={3.764}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 2.35 3.764)"
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      opacity={0.78}
      x={1}
      y={7}
      width={4}
      height={2}
      rx={1}
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      opacity={0.69}
      x={5.179}
      y={9.41}
      width={2}
      height={4}
      rx={1}
      transform="rotate(45 5.179 9.41)"
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      opacity={0.62}
      x={7}
      y={11}
      width={2}
      height={4}
      rx={1}
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      opacity={0.48}
      x={9.41}
      y={10.824}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 9.41 10.824)"
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      opacity={0.38}
      x={11}
      y={7}
      width={4}
      height={2}
      rx={1}
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      opacity={0.3}
      x={12.238}
      y={2.35}
      width={2}
      height={4}
      rx={1}
      transform="rotate(45 12.238 2.35)"
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
    <rect
      x={7}
      y={1}
      width={2}
      height={4}
      rx={1}
      className="fill-[#A8ADBD] dark:fill-[#6F737A]"
    />
  </svg>
);

export default Loader;
