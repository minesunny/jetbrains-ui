/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const UnfreezeAll = ({
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
      d="M5.318 1.732C3.949 3.266 1 6.928 1 10a5 5 0 0 0 10 0c0-3.072-2.95-6.734-4.318-8.268C6.27 1.27 6 1 6 1s-.27.27-.682.732"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.314 4.581C3.074 6.318 2 8.341 2 10a4 4 0 0 0 8 0c0-1.658-1.073-3.682-2.314-5.419A26 26 0 0 0 6 2.47l-.031.035a26 26 0 0 0-1.655 2.076m1.004-2.849C3.949 3.266 1 6.928 1 10a5 5 0 0 0 10 0c0-3.072-2.95-6.734-4.318-8.268C6.27 1.27 6 1 6 1s-.27.27-.682.732"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M9.374 14.961Q9.682 15 10 15a5 5 0 0 0 5-5c0-3.072-2.95-6.734-4.318-8.268C10.269 1.27 10 1 10 1s-.269.27-.682.732c-.197.221-.427.486-.676.787q.303.389.618.824c.258-.318.5-.6.709-.838l.031-.035.032.035a26 26 0 0 1 1.654 2.076C12.926 6.318 14 8.341 14 10a4 4 0 0 1-3.5 3.97 6 6 0 0 1-1.125.991"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default UnfreezeAll;
