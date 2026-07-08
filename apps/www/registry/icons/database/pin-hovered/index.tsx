/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const PinHovered = ({
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
      d="M6.48 5.707 6.268 7.2c-.07.488-.366.872-.73 1.093-.752.455-1.139 1.121-1.338 1.707h7.603c-.2-.586-.587-1.253-1.338-1.707A1.54 1.54 0 0 1 9.733 7.2l-.214-1.493A1.496 1.496 0 0 1 11 4V3H5v1c.91 0 1.61.806 1.48 1.707M5.278 7.06a.54.54 0 0 1-.258.378c-1.17.708-1.661 1.79-1.868 2.577-.141.534.297.986.85.986H12c.552 0 .99-.452.85-.986-.208-.786-.7-1.87-1.869-2.577a.54.54 0 0 1-.258-.378l-.214-1.493A.496.496 0 0 1 11 5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1c.302 0 .533.267.49.566z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.48 5.707 6.268 7.2c-.07.488-.366.872-.73 1.093-.752.455-1.138 1.121-1.338 1.707h7.603c-.2-.586-.587-1.253-1.338-1.707A1.54 1.54 0 0 1 9.733 7.2L9.52 5.707A1.496 1.496 0 0 1 11 4V3H5v1c.91 0 1.61.806 1.48 1.707"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M7.5 11h1v3.5a.5.5 0 0 1-1 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default PinHovered;
