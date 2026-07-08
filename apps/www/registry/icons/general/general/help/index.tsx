/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type HelpProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Help = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: HelpProps) => (
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
      d="M7.98 8.251q.337-.356.88-.833.56-.492.886-.847V6.57q.33-.347.552-.837l.001-.002a2.54 2.54 0 0 0 .228-1.097q0-.748-.311-1.32a2.2 2.2 0 0 0-.873-.892h-.001a2.54 2.54 0 0 0-1.299-.329q-.764.001-1.356.338-.583.337-.912.949-.153.289-.234.62a3 3 0 0 0-.058.317c-.04.302-.275.55-.58.55H4.78a.53.53 0 0 1-.53-.55q.015-.162.043-.317.11-.643.415-1.191a3.4 3.4 0 0 1 1.36-1.331Q6.937.999 8.053 1q1.085 0 1.928.458.85.45 1.322 1.264.47.815.469 1.865.001.824-.274 1.464-.271.63-.674 1.064-.385.423-1.015.967-.502.435-.782.725a2.6 2.6 0 0 0-.448.64v.002a1.7 1.7 0 0 0-.18.78.48.48 0 0 1-.48.48H7.72a.53.53 0 0 1-.527-.527q0-.609.227-1.097.225-.48.56-.834"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Help;
