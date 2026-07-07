/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InlayGlobeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InlayGlobeLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <circle cx={6} cy={6} r={5.5} stroke="#818594" />
    <path
      d="M6 .5c.537 0 1.158.449 1.674 1.481C8.175 2.984 8.5 4.404 8.5 6s-.325 3.016-.826 4.019C7.158 11.05 6.537 11.5 6 11.5s-1.158-.449-1.674-1.481C3.825 9.016 3.5 7.596 3.5 6s.325-3.016.826-4.019C4.842.95 5.463.5 6 .5ZM11 4.5H1M11 7.5H1"
      stroke="#818594"
    />
  </svg>
);

const InlayGlobeDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <circle cx={6} cy={6} r={5.5} stroke="#9DA0A8" />
    <path
      d="M6 .5c.537 0 1.158.449 1.674 1.481C8.175 2.984 8.5 4.404 8.5 6s-.325 3.016-.826 4.019C7.158 11.05 6.537 11.5 6 11.5s-1.158-.449-1.674-1.481C3.825 9.016 3.5 7.596 3.5 6s.325-3.016.826-4.019C4.842.95 5.463.5 6 .5ZM11 4.5H1M11 7.5H1"
      stroke="#9DA0A8"
    />
  </svg>
);

export const InlayGlobe: FC<InlayGlobeProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InlayGlobeLight : InlayGlobeDark;

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

export default InlayGlobe;
