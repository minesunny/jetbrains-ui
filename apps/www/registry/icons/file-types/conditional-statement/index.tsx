/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ConditionalStatementProps = SvgProps;

const ConditionalStatementLight: FC<SvgProps> = ({
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
      d="M2.5 10.5v3h3M13.5 10.5v3h-3"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 2.5v6l-5 5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m13.5 13.5-4-4" stroke="#6C707E" strokeLinecap="round" />
  </svg>
);

const ConditionalStatementDark: FC<SvgProps> = ({
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
      d="M2.5 10.5v3h3M13.5 10.5v3h-3"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 2.5v6l-5 5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m13.5 13.5-4-4" stroke="#CED0D6" strokeLinecap="round" />
  </svg>
);

export const ConditionalStatement: FC<ConditionalStatementProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ConditionalStatementLight : ConditionalStatementDark;

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

export default ConditionalStatement;
