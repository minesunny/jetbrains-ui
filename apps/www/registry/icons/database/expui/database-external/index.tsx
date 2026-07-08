/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DatabaseExternalProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DatabaseExternal = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DatabaseExternalProps) => (
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
      d="M11 10.5C11 10.2239 11.2239 10 11.5 10H15.5C15.7761 10 16 10.2239 16 10.5V14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5V11.7071L10.8536 15.8536C10.6583 16.0488 10.3417 16.0488 10.1464 15.8536C9.95118 15.6583 9.95118 15.3417 10.1464 15.1464L14.2929 11H11.5C11.2239 11 11 10.7761 11 10.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 12V6C2 4.89543 2.89543 4 4 4H10C11.1046 4 12 4.89543 12 6V9H11.5C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12H11.8786L9.87863 14H4C2.89543 14 2 13.1046 2 12Z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M5.5 2C5.22386 2 5 2.22386 5 2.5C5 2.77614 5.22386 3 5.5 3H12C12.5523 3 13 3.44772 13 4V9H14V4C14 2.89543 13.1046 2 12 2H5.5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M10.8786 13L9.87863 14H4C2.89543 14 2 13.1046 2 12V6C2 4.89543 2.89543 4 4 4H10C11.1046 4 12 4.89543 12 6V9H11.5C11.3247 9 11.1564 9.03008 11 9.08535V6C11 5.44772 10.5523 5 10 5H4C3.44772 5 3 5.44772 3 6V12C3 12.5523 3.44772 13 4 13H10.8786Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default DatabaseExternal;
