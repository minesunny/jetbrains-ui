/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Event = ({
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
      d="M9.747.775c.072-.5-.561-.779-.882-.387L1.669 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.945 6H9.001z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.245 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.111 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.89 7H9a1 1 0 0 1-.755-.345M9.747.775c.072-.5-.561-.779-.882-.387L1.669 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.945 6H9.001z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Event;
