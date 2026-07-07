/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SqlOtherStatementProps = SvgProps;

const SqlOtherStatementLight: FC<SvgProps> = ({
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
      d="M6.93934 14.2322L1.76777 9.06066C1.18198 8.47487 1.18198 7.52513 1.76777 6.93934L6.93934 1.76777C7.52513 1.18198 8.47487 1.18198 9.06066 1.76777L14.2322 6.93934C14.818 7.52513 14.818 8.47487 14.2322 9.06066L9.06066 14.2322C8.47487 14.818 7.52513 14.818 6.93934 14.2322Z"
      stroke="#6C707E"
    />
  </svg>
);

const SqlOtherStatementDark: FC<SvgProps> = ({
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
      d="M6.93934 14.2322L1.76777 9.06066C1.18198 8.47487 1.18198 7.52513 1.76777 6.93934L6.93934 1.76777C7.52513 1.18198 8.47487 1.18198 9.06066 1.76777L14.2322 6.93934C14.818 7.52513 14.818 8.47487 14.2322 9.06066L9.06066 14.2322C8.47487 14.818 7.52513 14.818 6.93934 14.2322Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const SqlOtherStatement: FC<SqlOtherStatementProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SqlOtherStatementLight : SqlOtherStatementDark;

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

export default SqlOtherStatement;
