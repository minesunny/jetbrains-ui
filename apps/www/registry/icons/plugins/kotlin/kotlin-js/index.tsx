/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KotlinJs = ({
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
      d="M12 2a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
    <path
      d="M9.665 7.597q0 .232.12.414a2 2 0 0 0-.968.376q-.165-.345-.165-.751 0-.496.257-.89a1.75 1.75 0 0 1 .722-.62 2.34 2.34 0 0 1 1.043-.226q.595 0 1.056.218.466.218.727.607.26.39.265.89H11.71a.77.77 0 0 0-.128-.437.84.84 0 0 0-.36-.303 1.3 1.3 0 0 0-.534-.107q-.303 0-.534.102a.83.83 0 0 0-.36.291.76.76 0 0 0-.128.436M4.213 11h1.009q.231 0 .406-.094a.67.67 0 0 0 .274-.274.84.84 0 0 0 .098-.41V6h1v4.358q0 .483-.214.855-.213.372-.594.582A1.8 1.8 0 0 1 5.32 12H4.213z"
      className="fill-[#000] dark:fill-[#1E1F22]"
    />
  </svg>
);

export default KotlinJs;
