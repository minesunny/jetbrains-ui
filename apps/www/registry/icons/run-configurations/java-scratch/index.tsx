/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const JavaScratch = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.256A4.5 4.5 0 0 1 15 8.758V4a2 2 0 0 0-2-2z"
      className="fill-[#EBECF0] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3h10a1 1 0 0 1 1 1v4.256q.535.19 1 .502V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.256a4.5 4.5 0 0 1-.229-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3h10a1 1 0 0 1 1 1v4.256q.535.19 1 .502V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.256a4.5 4.5 0 0 1-.229-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M14 8.256h-1v.707l.667.236zm1 .502-.556.83L16 10.632V8.758zM8.256 14v1H9.67L9.2 13.667zm-.229-1 .994-.11-.098-.89h-.896zM13 2H3v2h10zm2 2a2 2 0 0 0-2-2v2zm0 4.256V4h-2v4.256zm-1.333.943q.415.149.777.39l1.112-1.662a5.5 5.5 0 0 0-1.223-.614zM16 8.758V4h-2v4.758zM16 4a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zm-3-3H3v2h10zM3 1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zM0 4v8h2V4zm0 8a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1zm3 3h5.256v-2H3zm6.199-1.333a3.5 3.5 0 0 1-.178-.777l-1.987.22q.07.637.28 1.223zM3 14h5.027v-2H3zm-2-2a2 2 0 0 0 2 2v-2zm0-8v8h2V4zm2-2a2 2 0 0 0-2 2h2z"
      mask="url(#a)"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M4 5.5h1M7 5.5h1"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 0 0 .707-.707L13 12.293z"
      className="fill-[#4682FA] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.256A4.5 4.5 0 0 1 15 8.758V4a2 2 0 0 0-2-2z"
      className="fill-[#43454A] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3h10a1 1 0 0 1 1 1v4.256q.535.19 1 .502V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.256a4.5 4.5 0 0 1-.229-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="fill-[#CED0D6] hidden dark:block"
    />
    <path
      d="M4 5.5h1M7 5.5h1"
      strokeLinecap="round"
      className="stroke-[#CED0D6] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 0 0 .707-.707L13 12.293z"
      className="fill-[#548AF7] hidden dark:block"
    />
  </svg>
);

export default JavaScratch;
