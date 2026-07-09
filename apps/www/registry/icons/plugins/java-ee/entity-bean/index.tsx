/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EntityBean = ({
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
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.909 8c-.275-1.573-1.158-3.127-2.488-4.457C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675c1.296 1.297 2.887 2.18 4.511 2.443V10a2 2 0 0 1 2-2z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      d="M14.909 8c-.275-1.573-1.158-3.127-2.488-4.457C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675c1.296 1.297 2.887 2.18 4.511 2.443V13.9c-1.329-.255-2.672-1.003-3.802-2.133-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l5.126 5.126c.17-.294.41-.54.7-.716l-5.119-5.12c1.115-.942 2.372-1.272 3.63-1.137 1.429.153 2.93.915 4.237 2.22 1.165 1.167 1.91 2.475 2.175 3.749z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default EntityBean;
