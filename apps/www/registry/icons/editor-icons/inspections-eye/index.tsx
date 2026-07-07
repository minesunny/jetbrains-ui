/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InspectionsEyeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InspectionsEyeLight: FC<
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
    <circle cx={8} cy={8} r={1.5} stroke="#6C707E" />
    <path
      d="M8 4.5c2.376 0 4.726 1.555 5.469 3.5-.743 1.945-3.093 3.5-5.469 3.5S3.273 9.945 2.53 8C3.273 6.055 5.623 4.5 8 4.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const InspectionsEyeDark: FC<
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
    <circle cx={8} cy={8} r={1.5} stroke="#CED0D6" />
    <path
      d="M8 4.5c2.376 0 4.726 1.555 5.469 3.5-.743 1.945-3.093 3.5-5.469 3.5S3.273 9.945 2.53 8C3.273 6.055 5.623 4.5 8 4.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const InspectionsEye: FC<InspectionsEyeProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InspectionsEyeLight : InspectionsEyeDark;

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

export default InspectionsEye;
