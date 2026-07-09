/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AliasFactory = ({
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
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11 9h4.5v1H12v2h3v1h-3v3h-1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M9 3.502v8.996a.5.5 0 0 0 .833.373l.167-.15V8h5a.5.5 0 0 0-.166-.373L9.833 3.13A.5.5 0 0 0 9 3.502"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M10 11.376h-.002V4.624L13.753 8H15a.5.5 0 0 0-.166-.373L9.833 3.13A.5.5 0 0 0 9 3.502v8.996a.5.5 0 0 0 .833.373l.167-.15z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AliasFactory;
