/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SpringModelsDependencyGraph = ({
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
      d="M1 1.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M2 3h1V2H2zM1 14v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m1-3v3h3v-3zM10 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1 3h3V2h-3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M2.5 5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M12.5 7a.5.5 0 0 1 .5.5v2.353a3.574 3.574 0 0 1-1 .306V7.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M15.421 14.726C16.79 12.78 15.304 9 15.304 9s-.603 1.309-2.255 1.917c-1.444.53-2.408.084-3.577.662C8.49 12.064 8 12.819 8 13.955c0 .694.324 1.148.821 1.448 5.12-.677 6.08-3.91 6.08-3.91s-.537 3.444-4.932 4.32c.653.132 1.381.166 2.039.183 1.424.038 2.67-.212 3.413-1.27"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
  </svg>
);

export default SpringModelsDependencyGraph;
