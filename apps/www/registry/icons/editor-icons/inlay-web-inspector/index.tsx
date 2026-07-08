/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InlayWebInspector = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M9.738 10.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
    <path
      d="M12 6a6 6 0 1 0-4.897 5.899A4 4 0 0 1 4.126 7h-.08a11 11 0 0 1 0-2h1.308C6.06 4.378 6.986 4 8 4s1.94.378 2.646 1h.254q.03.15.051.3c.458.5.791 1.118.948 1.803q.1-.537.101-1.103M1.1 7h1.941a12 12 0 0 1 0-2H1.1a5 5 0 0 0 0 2m2.07 1H1.417a5.02 5.02 0 0 0 2.67 2.62c-.413-.685-.733-1.587-.915-2.62m4.642-4H4.188a7.1 7.1 0 0 1 .585-1.795C5.263 1.225 5.754 1 6 1s.737.225 1.227 1.205c.245.49.449 1.1.585 1.795m2.772 0H8.829c-.182-1.033-.502-1.935-.915-2.62A5.02 5.02 0 0 1 10.584 4M3.171 4c.182-1.033.502-1.935.915-2.62A5.02 5.02 0 0 0 1.416 4z"
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
  </svg>
);

export default InlayWebInspector;
