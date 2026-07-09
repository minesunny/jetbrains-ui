/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const HelmNotes = ({
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
      d="M12 7.5a.5.5 0 0 0-1 0v.535a3.5 3.5 0 0 0-1.596.662l-.379-.379a.5.5 0 0 0-.707.707l.379.379A3.5 3.5 0 0 0 8.035 11H7.5a.5.5 0 0 0 0 1h.535c.085.593.319 1.138.662 1.596l-.379.379a.5.5 0 1 0 .707.707l.379-.379a3.5 3.5 0 0 0 1.596.662v.535a.5.5 0 0 0 1 0v-.535a3.5 3.5 0 0 0 1.596-.662l.379.379a.5.5 0 0 0 .707-.707l-.379-.379A3.5 3.5 0 0 0 14.965 12h.535a.5.5 0 0 0 0-1h-.535a3.5 3.5 0 0 0-.662-1.596l.379-.379a.5.5 0 0 0-.707-.707l-.379.379A3.5 3.5 0 0 0 12 8.035zm2 4a2.49 2.49 0 0 0-1.121-2.086A2.5 2.5 0 1 0 14 11.5"
      className="fill-[#039BA1] dark:fill-[#24A394]"
    />
    <path
      d="M3 5.414V13a2 2 0 0 0 2 2h2.257A5.5 5.5 0 0 1 13 6.207V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.414V13a2 2 0 0 0 2 2h2.257a5.5 5.5 0 0 1-.657-1H5a1 1 0 0 1-1-1V6h2a2 2 0 0 0 2-2V2h3a1 1 0 0 1 1 1v3.022q.516.048 1 .185V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414m4-3L4.414 5H6a1 1 0 0 0 1-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default HelmNotes;
