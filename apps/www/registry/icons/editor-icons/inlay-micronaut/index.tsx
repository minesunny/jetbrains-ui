/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type InlayMicronautProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const InlayMicronaut = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: InlayMicronautProps) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9 8.402c-.448.406-.61.574-1.105.92-.592.413-1.458.469-2.038.21-.475-.213-.916-.688-.868-1.404-.714.875-1.396 1.55-2.303 1.55-.869 0-1.07-.782-1.07-.782l-.117 1.022s-.188.98-.196 1.048c-.022.296-.179.376-.459.48A82 82 0 0 1 .21 12c.857-4.017 1.52-7.017 2.363-11h1.776c-.275 1.302-1.314 6.25-1.322 6.323-.07.7.492.92 1.067.92.47 0 1.726-.526 1.898-1.336C6.407 4.953 7.057 1.89 7.254 1h1.751c-.238 1.14-1.008 4.843-1.29 6.21q-.036.18-.029.363c-.02.318.22.584.5.67.28.085.628.032.897-.115q.432-.243.833-.534.424-.313.796-.687a.98.98 0 0 1 .913-.217c-.595.59-1.141 1.174-1.725 1.712"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default InlayMicronaut;
