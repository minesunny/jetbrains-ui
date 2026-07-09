/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ApplicationXml = ({
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
      d="M10.854 10.146a.5.5 0 0 1 0 .708L8.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m1.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M2 3h5v1H3v3h3v1H3v4h3.882a1.5 1.5 0 0 0-.382 1H2zM10 8h3V7h-3V4h4V3H9v6.879l.44-.44c.163-.163.355-.281.56-.354z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default ApplicationXml;
