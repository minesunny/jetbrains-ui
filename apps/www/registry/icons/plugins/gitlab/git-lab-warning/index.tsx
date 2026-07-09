/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const GitLabWarning = ({
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
      d="m14.747 6.287.02.05a3.54 3.54 0 0 1-.165 2.891l-.428-.713c-1.211-2.02-4.139-2.02-5.35 0l-2.402 4.002a3 3 0 0 0-.305.69l-.783-.592-2.903-2.174-.017-.012-.007-.005a3.54 3.54 0 0 1-1.173-4.09l.019-.05 1.909-4.971a.5.5 0 0 1 .948.052l1.287 3.937h5.21l1.286-3.937a.5.5 0 0 1 .17-.256.51.51 0 0 1 .583-.032.5.5 0 0 1 .196.237z"
      className="fill-[#E24329]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.748 6.287.02.05a3.54 3.54 0 0 1-.165 2.893l-.429-.715a3.08 3.08 0 0 0-1.62-1.333 6.4 6.4 0 0 1 2.194-.895"
      className="fill-[#FC6D26]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.222 11.192c-1.07.807-1.886 1.426-1.886 1.426l.784.593q.104-.354.306-.694z"
      className="fill-[#FCA326]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.253 6.284a6.4 6.4 0 0 1 2.561 1.154l3.892 2.94-.488.813-1.884 1.424-2.903-2.174-.017-.012-.007-.005a3.54 3.54 0 0 1-1.173-4.09z"
      className="fill-[#FC6D26]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.863 13.546-2.401-4.002a1.12 1.12 0 0 0-1.921 0L8.14 13.546A.96.96 0 0 0 8.963 15h5.077a.96.96 0 0 0 .823-1.454m.857-.514-2.4-4.002c-.824-1.373-2.813-1.373-3.637 0l-2.4 4.002C6.498 14.337 7.44 16 8.962 16h5.077c1.523 0 2.464-1.662 1.68-2.969"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M12 10h-1v2h1zM12 14v-1h-1v1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default GitLabWarning;
