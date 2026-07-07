/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SqlSelectStatementProps = SvgProps;

const SqlSelectStatementLight: FC<SvgProps> = ({
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
      d="M13.5 9.5L13.5 6.5L6.5 6.5L6.5 3.5L2 8L6.5 12.5L6.5 9.5L13.5 9.5Z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
  </svg>
);

const SqlSelectStatementDark: FC<SvgProps> = ({
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
      d="M13.5 9.5L13.5 6.5L6.5 6.5L6.5 3.5L2 8L6.5 12.5L6.5 9.5L13.5 9.5Z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
  </svg>
);

export const SqlSelectStatement: FC<SqlSelectStatementProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SqlSelectStatementLight : SqlSelectStatementDark;

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

export default SqlSelectStatement;
