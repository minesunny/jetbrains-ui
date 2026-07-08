/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type CloseSmallHoveredProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const CloseSmallHovered = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: CloseSmallHoveredProps) => (
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
      d="M11.494 4.488a.5.5 0 0 0-.721-.01L8 7.288l-2.772-2.81a.5.5 0 0 0-.711.702L7.299 8l-2.782 2.82a.5.5 0 0 0 .711.702L8 8.712l2.772 2.81a.5.5 0 1 0 .712-.702L8.702 8l2.782-2.82a.5.5 0 0 0 .01-.692"
      className="fill-[#818594] dark:fill-[#868A91]"
    />
  </svg>
);

export default CloseSmallHovered;
