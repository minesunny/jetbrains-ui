/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SwiftPackageManifest = ({
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
      d="m8 1.5 6.5 3V8H11a2 2 0 0 0-2 2v4.041L8 14.5l-6.5-2.98V4.5z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454l6.5 2.98a.5.5 0 0 0 .416 0L9 14.593v-1.1l-.5.229V7.82L14 5.28V8h1V4.5a.5.5 0 0 0-.29-.454zM2.693 4.5 8 2.05l5.307 2.45L8 6.95zM7.5 7.82v5.9L2 11.2V5.28z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M12 12h2v-1h-2zM12 14h2v-1h-2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default SwiftPackageManifest;
