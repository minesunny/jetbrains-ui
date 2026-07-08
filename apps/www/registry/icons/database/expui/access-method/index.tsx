/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AccessMethodProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AccessMethod = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AccessMethodProps) => (
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
      d="M7.42982 4.97998H8.49192L10.758 11H9.75612L9.22722 9.51648H6.75042L6.26022 11H5.23682L7.42982 4.97998ZM8.95202 8.72958L8.04902 6.22268L7.95442 5.84858L7.85982 6.22268L7.00412 8.72958H8.95202Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10H13.5C13.7761 10 14 10.2239 14 10.5V15H13V11H12V10Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 16H11.5V15H15.5V16Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M12.5 7.5H14V9H12.5V7.5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.811 6.5C13.1449 3.91216 10.7958 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C8.89221 14 9.73894 13.8053 10.5 13.456V14.5404C9.7236 14.8373 8.8808 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.3511 1 14.1522 3.35482 14.8389 6.5H13.811ZM14 8V7.5H13.9795C13.9931 7.66487 14 7.83162 14 8Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AccessMethod;
