/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SpringShowAutowiredDependencies = ({
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
      d="M12.146 9.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L14.293 13H8.5a.5.5 0 0 1 0-1h5.793l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.945 9.824c.305-2.16-.68-4.436-2.524-6.28C9.556.677 5.603-.035 2.77 2.8s-2.02 6.936.72 9.675c2.215 2.216 5.292 3.223 7.92 1.996l.03-.032.44-.439H8.5a1.5 1.5 0 0 1 0-3h3.379l-.44-.44a1.5 1.5 0 0 1 2.122-2.12z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M14.945 9.824c.305-2.16-.68-4.436-2.524-6.28C9.556.677 5.603-.035 2.77 2.8s-2.02 6.936.72 9.675c2.215 2.216 5.292 3.223 7.92 1.996l.03-.032.44-.439H8.5c-.205 0-.4-.041-.577-.115-1.304-.27-2.617-1.01-3.725-2.118-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684L10.26 11h1.417L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228q.022.197.03.395z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default SpringShowAutowiredDependencies;
