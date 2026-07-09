/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Jruby = ({
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
      d="m15.813 9.308-1.147-.405-.139-.84a.287.287 0 0 0-.476-.163L12.63 9.21l-.783-1.678a14.2 14.2 0 0 0 1.484-3.171.287.287 0 0 0-.395-.343l-2.24 1.045-.405-.869.779-1.795a.286.286 0 0 0-.384-.373L.17 6.932a.286.286 0 0 0-.016.511l1.914 1.034 1.48 3.174c.033.068.09.121.161.147l4.341 1.584a.29.29 0 0 0 .219-.009l7.57-3.536a.286.286 0 0 0-.026-.53"
      className="fill-[#633333] dark:fill-[#402929]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.508 8.063.921 7.207l.976-.453z"
      className="fill-[#FCC75B] dark:fill-[#F2C55C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.05 7.683.003-.005c.741-1.044 1.241-2.17 1.505-2.85L6.911 7.46a.288.288 0 0 1-.407-.241c0-.013-.09-1.24-.778-1.672-.322-.202-.75-.197-1.269.014l-2.56 1.193 2.12 4.547 4.117 1.503 4.125-1.923c-.27-.393-.87-1.183-1.67-1.75-.628.63-1.369 1.151-2.232 1.422a.286.286 0 0 1-.17-.546c-.001 0 1.544-.394 2.853-2.313zm-7.937-.617a.685.685 0 1 1 1.288.469.685.685 0 0 1-1.288-.47"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      d="m14.13 9.163-.08-.483-1.165 1.076.32.684 1.76-.825-.648-.229a.29.29 0 0 1-.187-.223"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default Jruby;
