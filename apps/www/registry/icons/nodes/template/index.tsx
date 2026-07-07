/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type TemplateProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const TemplateLight: FC<
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
    <path d="M3.5 13.5h9" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="M14 11.5H2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h5L5.546 4.412A1.5 1.5 0 0 1 6.99 2.5H9.01a1.5 1.5 0 0 1 1.443 1.912L9 9.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TemplateDark: FC<
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
    <path d="M3.5 13.5h9" stroke="#CED0D6" strokeLinecap="round" />
    <path
      d="M14 11.5H2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h5L5.546 4.412A1.5 1.5 0 0 1 6.99 2.5H9.01a1.5 1.5 0 0 1 1.443 1.912L9 9.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Template: FC<TemplateProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TemplateLight : TemplateDark;

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

export default Template;
