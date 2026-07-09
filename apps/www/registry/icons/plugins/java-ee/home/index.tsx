/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Home = ({
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
      d="M12.161 8.632a.5.5 0 0 1 .678 0l2.5 2.305a.5.5 0 0 1 .161.368v3.694a.5.5 0 0 1-.5.501h-5a.5.5 0 0 1-.5-.501v-3.694c0-.14.059-.274.161-.368z"
      strokeLinejoin="round"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M14.978 8.564Q14.999 8.285 15 8a7 7 0 1 0-7 7v-3.695c0-.559.234-1.093.645-1.472l2.5-2.304a2 2 0 0 1 2.71 0z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M14.978 8.564Q14.999 8.285 15 8a7 7 0 1 0-7 7v-1a6 6 0 1 1 5.99-6.346z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M8 11.5H6v-1h1.5v-5H6v-1h4v1H8.5v4.482c-.32.363-.5.834-.5 1.323z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default Home;
