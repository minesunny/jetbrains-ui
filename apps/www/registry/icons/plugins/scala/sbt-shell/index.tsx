/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SbtShell = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.416a5 5 0 0 1-.316-1H3a1 1 0 0 1-1-1V6h12v1.416q.537.235 1 .584V4a2 2 0 0 0-2-2zm10 1H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.249 12.737 2.027 2.045 2.742-.735.733-2.784-2.027-2.045-2.742.735zm1.316 2.75L8.54 13.44a1 1 0 0 1-.257-.958l.733-2.785a1 1 0 0 1 .708-.711l2.742-.735a1 1 0 0 1 .97.262l2.026 2.045a1 1 0 0 1 .257.958l-.733 2.785a1 1 0 0 1-.708.711l-2.742.735a1 1 0 0 1-.97-.262"
      className="fill-[#A46704] dark:fill-[#BA9752]"
    />
  </svg>
);

export default SbtShell;
