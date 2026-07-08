/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CythonFile = ({
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
      d="M7.952 4c-.33.002-.644.03-.922.078-.816.143-.964.441-.964.992v.727h1.93v.243H5.34c-.56 0-1.052.333-1.205.968-.177.726-.185 1.18 0 1.94.137.564.465.967 1.025.967h.664v-.872c0-.63.55-1.186 1.205-1.186h1.928a.967.967 0 0 0 .965-.97V5.07c0-.517-.442-.906-.965-.992A6 6 0 0 0 7.952 4m-1.043.585a.364.364 0 0 1 0 .727.364.364 0 0 1 0-.727"
      className="fill-[url(#a)]"
    />
    <path
      d="M10.163 6.04v.847a1.23 1.23 0 0 1-1.205 1.21H7.03a.98.98 0 0 0-.965.97v1.818c0 .517.455.821.965.97.611.177 1.197.21 1.928 0 .485-.14.965-.42.965-.97v-.728H7.995v-.242h2.892c.561 0 .77-.387.965-.968.202-.598.193-1.173 0-1.94-.138-.552-.403-.967-.965-.967zM9.08 10.642a.364.364 0 0 1 0 .727.364.364 0 0 1 0-.727"
      className="fill-[url(#b)]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.243 3.757a6 6 0 1 0 0 8.486.5.5 0 0 1 .707.707 7 7 0 1 1 0-9.9.5.5 0 1 1-.707.707"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default CythonFile;
