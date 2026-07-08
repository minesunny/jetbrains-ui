/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type OverridenMethodProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const OverridenMethod = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: OverridenMethodProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.492 10C3.73 10 2.5 8.65 2.5 7.017V7c0-1.633 1.246-3 3.008-3S8.5 5.35 8.5 6.983V7c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V7c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V7c0 1.127.812 2.055 1.951 2.055"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M5.5 1.5a5.5 5.5 0 0 1 5.208 3.726A1.5 1.5 0 0 0 10 6.5V7a4.5 4.5 0 1 0-1.578 3.422l.017.017a1.5 1.5 0 0 0-.391 1.437A5.5 5.5 0 1 1 5.5 1.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default OverridenMethod;
