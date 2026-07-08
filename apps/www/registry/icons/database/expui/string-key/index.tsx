/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type StringKeyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const StringKey = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: StringKeyProps) => (
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
      d="M12.95 14C12.7184 15.1411 11.7095 16 10.5 16C9.11929 16 8 14.8807 8 13.5C8 12.1193 9.11929 11 10.5 11C11.7095 11 12.7184 11.8589 12.95 13L16 13L16 14L15 14L15 16L14 16L14 14L12.95 14ZM10.5 15C11.3284 15 12 14.3284 12 13.5C12 12.6716 11.3284 12 10.5 12C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 3.5C2 3.22386 2.22386 3 2.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H2.5C2.22386 4 2 3.77614 2 3.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 6.5C2 6.22386 2.22386 6 2.5 6H9.5C9.77614 6 10 6.22386 10 6.5C10 6.77614 9.77614 7 9.5 7H2.5C2.22386 7 2 6.77614 2 6.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2.5 12C2.22386 12 2 12.2239 2 12.5C2 12.7761 2.22386 13 2.5 13H7.03544C7.08595 12.6469 7.18915 12.3109 7.33682 12H2.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M13.5 10C13.7761 10 14 9.77614 14 9.5C14 9.22386 13.7761 9 13.5 9H2.5C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H13.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default StringKey;
