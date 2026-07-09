/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const GitLabLogo = ({
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
      d="m14.767 6.337-.02-.05-1.905-4.973A.5.5 0 0 0 12.349 1a.5.5 0 0 0-.287.108.5.5 0 0 0-.169.256l-1.286 3.937h-5.21L4.11 1.365a.5.5 0 0 0-.948-.052l-1.91 4.97-.018.051a3.54 3.54 0 0 0 1.173 4.09l.007.005.017.012 2.903 2.174 1.436 1.087.875.66a.59.59 0 0 0 .711 0l.875-.66 1.436-1.087 2.92-2.187.008-.006a3.54 3.54 0 0 0 1.172-4.085"
      className="fill-[#E24329]"
    />
    <path
      d="m14.767 6.337-.02-.05a6.4 6.4 0 0 0-2.562 1.151L8 10.603l2.666 2.015 2.92-2.187.007-.006a3.54 3.54 0 0 0 1.174-4.088"
      className="fill-[#FC6D26]"
    />
    <path
      d="m5.336 12.618 1.436 1.087.875.66a.59.59 0 0 0 .711 0l.875-.66 1.436-1.087s-1.242-.94-2.667-2.015c-1.425 1.075-2.666 2.015-2.666 2.015"
      className="fill-[#FCA326]"
    />
    <path
      d="M3.814 7.438a6.4 6.4 0 0 0-2.561-1.154l-.02.05a3.54 3.54 0 0 0 1.174 4.09l.007.005.017.012 2.903 2.174L8 10.6z"
      className="fill-[#FC6D26]"
    />
  </svg>
);

export default GitLabLogo;
