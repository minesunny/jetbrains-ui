/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type MagicResolveToolbarProps = SvgProps;

const MagicResolveToolbarLight: FC<SvgProps> = ({
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
      d="m2.793 13.793-.586-.586a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1-1.414 0M9.5 8.5l-2-2M10.5 2.5v-1M13.5 5.5h1m-3 4 1 1m-6-6-1-1"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MagicResolveToolbarDark: FC<SvgProps> = ({
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
      d="m2.793 13.793-.586-.586a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1-1.414 0M9.5 8.5l-2-2M10.5 2.5v-1M13.5 5.5h1m-3 4 1 1m-6-6-1-1"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MagicResolveToolbar: FC<MagicResolveToolbarProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MagicResolveToolbarLight : MagicResolveToolbarDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default MagicResolveToolbar;
