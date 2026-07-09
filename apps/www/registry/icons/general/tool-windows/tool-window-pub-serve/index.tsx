/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ToolWindowPubServe = ({
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
      d="M13.707 13 10.39 9.683l.017-.004 2.286-.572L15 11.414V13zM9 9.517a2 2 0 0 1 1.164-.808l2.287-.572a1 1 0 0 1 .95.263l2.306 2.307a1 1 0 0 1 .293.707V13a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1.586a1 1 0 0 1-.707-.293L8.4 13.4a1 1 0 0 1-.263-.95l.572-2.286q.09-.354.291-.647m.683.873L13 13.707V15h-1.586l-2.307-2.307.572-2.286zM2 6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m1-3v3h10V3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 13v-3a1 1 0 0 1 1-1h5.143a3 3 0 0 0-.404.922l-.02.078H3v3h4.131a2 2 0 0 0 .462 1H3a1 1 0 0 1-1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowPubServe;
