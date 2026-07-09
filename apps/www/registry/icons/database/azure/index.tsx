/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Azure = ({
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
      d="M2.778 8.562C1.8 10.257 1 11.646 1 11.65s.723.004 1.607.003l1.607-.002 4.46-9.566A.4.4 0 0 0 8.707 2c-.003.001-.939.785-2.079 1.742L4.556 5.48zm8 3.118-3.301.585-3.27.577L15 12.844l-.022-.039-2.91-5.042c-1.695-2.94-2.889-5-2.892-4.994-.01.017-1.763 4.846-1.763 4.856 0 .005.764.918 1.698 2.029l1.698 2.02z"
      className="fill-[#529FDB]"
    />
  </svg>
);

export default Azure;
