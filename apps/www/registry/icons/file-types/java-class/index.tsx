/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type JavaClassProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const JavaClass = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: JavaClassProps) => (
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
      d="M10.98 6.992c-1.496 0-2.48-1.256-2.48-2.88v-.016C8.5 2.472 9.508 1.2 10.996 1.2c1.48 0 2.48 1.256 2.48 2.88v.016c0 1.624-1 2.896-2.496 2.896m.022-1.112c.744 0 1.216-.752 1.216-1.768v-.016c0-1.016-.496-1.784-1.232-1.784S9.77 3.056 9.77 4.08v.016c0 1.024.488 1.784 1.232 1.784M4.98 14.792c-1.496 0-2.48-1.256-2.48-2.88v-.016C2.5 10.272 3.508 9 4.996 9c1.48 0 2.48 1.256 2.48 2.88v.016c0 1.624-1 2.896-2.496 2.896m.022-1.112c.744 0 1.216-.752 1.216-1.768v-.016c0-1.016-.496-1.784-1.232-1.784s-1.216.744-1.216 1.768v.016c0 1.024.488 1.784 1.232 1.784"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M6.91 6.092H5.858v-4.74h-.84l-1.935.62.256.914 1.303-.381v3.587H3.41v.9h3.5zM11.862 13.74h1.052v.9h-3.5v-.9h1.232v-3.587l-1.303.381-.256-.913L11.022 9h.84z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default JavaClass;
