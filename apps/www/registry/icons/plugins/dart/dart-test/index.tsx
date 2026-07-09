/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DartTest = ({
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
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      d="m10.272 3.379-6.897-.006 4.551-2.182c.544-.255 1.208-.362 1.952.382l2.138 2.138c-.335-.335-.856-.333-1.486-.332z"
      className="fill-[#29B6F6]"
    />
    <path
      d="M9.51 9.51 3.376 3.373l.006 6.898v.257c-.001.631-.002 1.152.332 1.486l.51.512L6.697 15h1.262l-1.029-.991a1.4 1.4 0 0 1 0-2.018z"
      className="fill-[#29B6F6]"
    />
    <path
      d="m3.373 3.374.006 6.897v.258c-.001.63-.002 1.151.332 1.486L1.573 9.877c-.745-.744-.637-1.408-.382-1.951zM15 10.96V6.697l-2.474-2.474-.511-.512c-.335-.335-.855-.334-1.486-.332h-.257l-6.899-.005L9.51 9.51l.118-.114c.283-.272.626-.394.962-.394l1.82-.001c.335 0 .678.122.96.393z"
      className="fill-[#01579B]"
    />
  </svg>
);

export default DartTest;
