/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ToolWindowDjango = ({
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
      d="M6.586 3h2.128v9.756c-1.09.206-1.892.287-2.76.287C3.353 13.041 2 11.88 2 9.65c0-2.15 1.435-3.545 3.66-3.545.345 0 .608.028.926.109zm.074 4.971a2.1 2.1 0 0 0-.717-.108c-1.077 0-1.699.656-1.699 1.807 0 1.12.595 1.74 1.685 1.74.236 0 .427-.014.731-.055z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M12.12 6.366v4.885c0 1.682-.125 2.491-.495 3.189-.345.67-.8 1.093-1.74 1.56l-1.975-.93c.94-.437 1.395-.823 1.685-1.412.304-.602.4-1.3.4-3.134V6.366zM9.996 3h2.128v2.163H9.995z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowDjango;
