/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Vcpkg = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M18.547 14.106c-6.65-2.356-11.405.645-14.16 4.099-.105.127-.306.048-.281-.12.16-.915.538-2.706 1.277-4.345 3.004-6.662 10.995-9.901 15.75-9.734s10.45 3.28 8.474 7.672c-1.743 3.884-4.104 4.895-11.06 2.428"
      className="fill-[url(#a)]"
    />
    <path
      d="M13.559 13.996c0-.087-.064-.167-.16-.167-2.21.056-6.908 1.52-9.342 5.945a.1.1 0 0 0-.016.056c-.755 5.293 9.156 8.747 9.518-5.834"
      className="fill-[url(#b)]"
    />
    <path
      d="M21.482 25.894c6.65 2.356 11.405-.645 14.16-4.099.104-.127.305-.048.281.12-.16.915-.538 2.706-1.277 4.345-2.996 6.662-10.988 9.901-15.742 9.734s-10.45-3.28-8.474-7.673c1.735-3.875 4.104-4.886 11.052-2.427"
      className="fill-[url(#c)]"
    />
    <path
      d="M26.426 26.14c0 .088.064.167.16.167 2.21-.055 6.924-1.592 9.358-6.025q.014-.02.016-.055c.755-5.285-9.173-8.667-9.534 5.913"
      className="fill-[url(#d)]"
    />
  </svg>
);

export default Vcpkg;
