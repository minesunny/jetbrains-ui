/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InspectionsOkEmptyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InspectionsOkEmptyLight: FC<
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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      clipRule="evenodd"
      d="M13.202 5.146a.5.5 0 0 1 0 .708L6.5 12.556 2.842 8.847a.5.5 0 0 1-.004-.698l.805-.834a.5.5 0 0 1 .717-.003L6.5 9.5 11.646 4.3a.5.5 0 0 1 .71-.001z"
      stroke="#369650"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InspectionsOkEmptyDark: FC<
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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      clipRule="evenodd"
      d="M13.202 5.146a.5.5 0 0 1 0 .708L6.5 12.556 2.842 8.847a.5.5 0 0 1-.004-.698l.805-.834a.5.5 0 0 1 .717-.003L6.5 9.5 11.646 4.3a.5.5 0 0 1 .71-.001z"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InspectionsOkEmpty: FC<InspectionsOkEmptyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InspectionsOkEmptyLight : InspectionsOkEmptyDark;

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

export default InspectionsOkEmpty;
