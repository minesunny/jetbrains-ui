/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ShowLogs = ({
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
      d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16c-3 0-4-3-4-3s1-3 4-3 4 3 4 3-1 3-4 3m2.902-3.021.011.021-.01.021a4.4 4.4 0 0 1-.546.839C13.86 14.456 13.119 15 12 15s-1.86-.544-2.357-1.14a4.4 4.4 0 0 1-.545-.838L9.087 13l.01-.021c.116-.231.295-.537.546-.839C10.14 11.544 10.881 11 12 11s1.86.544 2.357 1.14c.251.302.43.607.545.838"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M12 1a2 2 0 0 1 2 2v6.409a4.8 4.8 0 0 0-1-.314V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.351c.148.284.358.637.642 1H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M9 10a5.5 5.5 0 0 0-1.007 1H5.5a.5.5 0 0 1 0-1zM10.5 6a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM11 8a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 11 8"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ShowLogs;
