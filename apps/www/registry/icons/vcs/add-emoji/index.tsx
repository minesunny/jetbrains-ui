/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AddEmojiProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AddEmoji = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AddEmojiProps) => (
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
      d="M13.5 11a.5.5 0 0 0-.5.5V13h-1.5a.5.5 0 0 0 0 1H13v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H14v-1.5a.5.5 0 0 0-.5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 1 11.659 2h1.051A7 7 0 1 0 10 14.71V13.66A6 6 0 0 1 2 8"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      d="M10.763 9.438c-1.019 2.13-4.518 2.09-5.544-.002"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default AddEmoji;
