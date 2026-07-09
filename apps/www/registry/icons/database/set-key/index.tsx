/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SetKey = ({
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
      d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M3.988 9.778q.015-.578-.383-.923-.397-.345-1.072-.345H2V7.43h.533q.675 0 1.072-.345.398-.345.383-.922l-.03-1.583q-.015-.78.322-1.365.345-.585.983-.9Q5.9 2 6.763 2H7v1.005h-.23q-.78 0-1.237.435-.45.427-.443 1.163l.03 1.567q.015.765-.412 1.253-.428.48-1.155.532.728.135 1.155.63.427.488.412 1.185l-.03 1.777q-.015.66.398 1.05.42.398 1.132.398H7V14h-.387q-.802 0-1.41-.3-.6-.292-.93-.848-.322-.547-.315-1.282zM10.886 10.021c.404.044.788.157 1.138.327l-.01-.57q-.015-.578.383-.923t1.072-.345H14V7.43h-.53q-.675 0-1.073-.345t-.383-.922l.03-1.583q.015-.78-.33-1.365a2.24 2.24 0 0 0-.975-.9Q10.103 2 9.24 2H9v1.005h.232q.78 0 1.23.435.457.427.45 1.163l-.03 1.567q-.015.765.412 1.253.427.48 1.156.532-.728.135-1.155.63-.428.488-.413 1.185z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default SetKey;
