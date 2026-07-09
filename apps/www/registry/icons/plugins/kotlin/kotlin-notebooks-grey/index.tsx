/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KotlinNotebooksGrey = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 1-2-2"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h-1V5.4L10.873 8H10q-.24 0-.463.054l3.45-4.217A1 1 0 0 0 12 3H4a1 1 0 0 0-1 1v6.599l3.613-4.416a.5.5 0 0 1 .803.039l1.43 2.144c-.287.204-.519.48-.666.804L6.96 7.339l-3.947 4.823A1 1 0 0 0 4 13h4v1H4a2 2 0 0 1-2-2"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default KotlinNotebooksGrey;
