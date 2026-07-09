/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const LombokMethod = ({
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
      d="M14.93 7H13.5A1.5 1.5 0 0 0 12 8.5V11a4 4 0 0 1-.617 2.136A4 4 0 0 1 8 15a7 7 0 1 1 6.93-8"
      className="fill-[#FFF7F7] dark:hidden"
    />
    <path
      d="M14.93 7A7.001 7.001 0 0 0 1 8a7 7 0 0 0 7 7v-1a6 6 0 1 1 5.917-7z"
      className="fill-[#DB3B4B] dark:hidden"
    />
    <path
      d="M12 8.48V7.358c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.401-1.77 1.07-.292-.674-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.002v-.876H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V8.48"
      className="fill-[#DB3B4B] dark:hidden"
    />
    <path
      d="M15 10a1 1 0 0 1 1 1 5 5 0 0 1-5.836 4.93c-.208-.034-.219-.318-.028-.408A5 5 0 0 0 12.999 11a1 1 0 0 1 1-1z"
      className="fill-[#E55765] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9a.5.5 0 0 1 .5.5v.5h1v-.5A1.5 1.5 0 0 0 13.5 8a.5.5 0 0 0 0 1"
      className="fill-[#55A76A] dark:hidden"
    />
    <path
      d="M14.93 7H13.5A1.5 1.5 0 0 0 12 8.5V11a4 4 0 0 1-.617 2.136A4 4 0 0 1 8 15a7 7 0 1 1 6.93-8"
      className="fill-[#402929] hidden dark:block"
    />
    <path
      d="M14.93 7A7.001 7.001 0 0 0 1 8a7 7 0 0 0 7 7v-1a6 6 0 1 1 5.917-7z"
      className="fill-[#DB5C5C] hidden dark:block"
    />
    <path
      d="M12 8.48V7.358c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.401-1.77 1.07-.292-.674-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.002v-.876H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V8.48M15 10a1 1 0 0 1 1 1 5 5 0 0 1-5.836 4.93c-.208-.034-.219-.318-.028-.408A5 5 0 0 0 12.999 11a1 1 0 0 1 1-1z"
      className="fill-[#DB5C5C] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9a.5.5 0 0 1 .5.5v.5h1v-.5A1.5 1.5 0 0 0 13.5 8a.5.5 0 0 0 0 1"
      className="fill-[#57965C] hidden dark:block"
    />
  </svg>
);

export default LombokMethod;
