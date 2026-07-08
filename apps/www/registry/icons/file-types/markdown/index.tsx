/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Markdown = ({
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
      d="M12.593 9.944V4.7h1.2v5.244l1.283-1.284.849.849-2.732 2.732-2.732-2.732.848-.849z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M.5 4.7h2.446l1.708 4.445.109.457.093-.457L6.513 4.7h2.471v7.27H7.141V7.596l.031-.472-1.828 4.844H4.083l-1.77-4.797.03.425v4.372H.5z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Markdown;
