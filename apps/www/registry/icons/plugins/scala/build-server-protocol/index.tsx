/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BuildServerProtocol = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.146 2.146a.5.5 0 0 0 0 .708L8.293 4H3.5a.5.5 0 0 0 0 1h4.793L7.146 6.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0M8.854 9.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L7.707 12H12.5a.5.5 0 0 0 0-1H7.707l1.147-1.146a.5.5 0 0 0 0-.708"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.5 14.5v-13M1.5 14.5v-13"
      strokeLinecap="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
  </svg>
);

export default BuildServerProtocol;
