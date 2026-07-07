/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type OpenNewTabProps = SvgProps;

const OpenNewTabLight: FC<SvgProps> = ({
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
      d="M7 3H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9h-1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4zM12.5 0a.5.5 0 0 0-.5.5V3H9.5a.5.5 0 0 0 0 1H12v2.5a.5.5 0 0 0 1 0V4h2.5a.5.5 0 0 0 0-1H13V.5a.5.5 0 0 0-.5-.5"
      fill="#6C707E"
    />
  </svg>
);

const OpenNewTabDark: FC<SvgProps> = ({
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
      d="M7 3H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9h-1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4zM12.5 0a.5.5 0 0 0-.5.5V3H9.5a.5.5 0 0 0 0 1H12v2.5a.5.5 0 0 0 1 0V4h2.5a.5.5 0 0 0 0-1H13V.5a.5.5 0 0 0-.5-.5"
      fill="#CED0D6"
    />
  </svg>
);

export const OpenNewTab: FC<OpenNewTabProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OpenNewTabLight : OpenNewTabDark;

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

export default OpenNewTab;
