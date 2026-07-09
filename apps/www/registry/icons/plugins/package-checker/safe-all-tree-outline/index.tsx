/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SafeAllTreeOutline = ({
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
      d="m8 1 6 2.5v5.679c0 1.766-.892 3.057-2.032 4.079-.839.751-1.86 1.395-2.797 1.987-.31.196-.613.387-.896.573L8 16l-.275-.182a53 53 0 0 0-.896-.573c-.937-.592-1.958-1.236-2.797-1.987C2.892 12.236 2 10.945 2 9.178V3.5z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      className="stroke-[#208A3C] dark:stroke-[#57965C]"
    />
    <path
      d="M5.5 8.5 7 10l3.5-3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#208A3C] dark:stroke-[#57965C]"
    />
  </svg>
);

export default SafeAllTreeOutline;
