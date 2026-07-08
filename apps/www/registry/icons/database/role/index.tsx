/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RoleProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Role = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RoleProps) => (
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
      d="M5 4a3 3 0 0 0 6 0h-1a2 2 0 1 1-4 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2v1H3.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H11V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m1 1V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M5 4a3 3 0 0 0 6 0h-1a2 2 0 1 1-4 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.103 13.008C2.399 11.303 3.548 8 8 8s5.6 3.303 5.897 5.008c.094.544-.345.992-.897.992H3c-.553 0-.992-.448-.897-.992M12.878 13c-.15-.745-.47-1.705-1.134-2.489C11.059 9.704 9.94 9 8 9s-3.06.704-3.744 1.511c-.665.784-.985 1.744-1.134 2.489z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Role;
