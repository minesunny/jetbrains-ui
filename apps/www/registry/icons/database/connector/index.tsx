/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Connector = ({
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
      d="M12 5V4a1 1 0 0 0-1-1H7a4 4 0 0 0-3.874 3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.126c.444 1.725 2.01 3 3.874 3h4a1 1 0 0 0 1-1v-1h3.5a.5.5 0 0 0 0-1H12V6h3.5a.5.5 0 0 0 0-1zm-1-1H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4zM3 7v2H1V7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Connector;
