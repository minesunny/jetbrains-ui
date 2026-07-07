/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type StarProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const StarLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.462 2.381a.5.5 0 0 0-.923 0l-1.47 3.534-3.815.306a.5.5 0 0 0-.285.878l2.906 2.49-.888 3.722a.5.5 0 0 0 .747.543L8 11.859l3.266 1.995a.5.5 0 0 0 .747-.543l-.888-3.722 2.907-2.49a.5.5 0 0 0-.285-.878l-3.815-.306z"
      fill="#FFAF0F"
    />
  </svg>
);

const StarDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.462 2.381a.5.5 0 0 0-.923 0l-1.47 3.534-3.815.306a.5.5 0 0 0-.285.878l2.906 2.49-.888 3.722a.5.5 0 0 0 .747.543L8 11.859l3.266 1.995a.5.5 0 0 0 .747-.543l-.888-3.722 2.907-2.49a.5.5 0 0 0-.285-.878l-3.815-.306z"
      fill="#F2C55C"
    />
  </svg>
);

export const Star: FC<StarProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StarLight : StarDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Star;
