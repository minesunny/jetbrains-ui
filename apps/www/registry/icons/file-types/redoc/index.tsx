/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RedocProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Redoc = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RedocProps) => (
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
      d="M4.5 7a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM4.5 9a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1zM4.5 11a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6.5c0 1.836-1.1 3.416-2.677 4.116l1.319 1.318c.762.763.222 2.066-.856 2.066H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.5A4.5 4.5 0 0 1 14 6.5m-1 0a3.5 3.5 0 0 1-2.452 3.34L5.854 5.147A.5.5 0 0 0 5.5 5H4a1 1 0 0 1 0-2h5.5A3.5 3.5 0 0 1 13 6.5M4 6h1.293l6.641 6.642a.21.21 0 0 1-.148.358H4a1 1 0 0 1-1-1V5.732c.294.17.636.268 1 .268"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Redoc;
