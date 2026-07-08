/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ResumeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ResumeLight: FC<
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
    <circle opacity={0.1} cx={8} cy={8} r={8} fill="#313547" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.777 4.431A.504.504 0 0 0 6 4.845v6.31c0 .377.43.632.776.414l4.993-3.15a.487.487 0 0 0 0-.828zm.535-.845C6.31 2.953 5 3.666 5 4.846v6.309c0 1.177 1.309 1.891 2.31 1.26l4.993-3.15c.929-.586.93-1.932.002-2.519z"
      fill="#818594"
    />
  </svg>
);

const ResumeDark: FC<
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
    <circle opacity={0.13} cx={8} cy={8} r={8} fill="#F0F1F2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.777 4.431A.504.504 0 0 0 6 4.845v6.31c0 .377.43.632.776.414l4.993-3.15a.487.487 0 0 0 0-.828zm.535-.845C6.31 2.953 5 3.666 5 4.846v6.309c0 1.177 1.309 1.891 2.31 1.26l4.993-3.15c.929-.586.93-1.932.002-2.519z"
      fill="#868A91"
    />
  </svg>
);

export const Resume: FC<ResumeProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ResumeLight : ResumeDark;

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

export default Resume;
