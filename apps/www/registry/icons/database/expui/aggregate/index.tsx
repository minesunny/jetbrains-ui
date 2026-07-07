/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type AggregateProps = SvgProps;

const AggregateLight: FC<SvgProps> = ({
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
    <circle cx={8} cy={8} r={6.5} fill="#E7EFFD" stroke="#3574F0" />
    <path
      d="M7.47083 4.97998H8.53293L10.799 11H9.79713L9.26823 9.51648H6.79143L6.30123 11H5.27783L7.47083 4.97998ZM8.99303 8.72958L8.09003 6.22268L7.99543 5.84858L7.90083 6.22268L7.04513 8.72958H8.99303Z"
      fill="#3574F0"
    />
  </svg>
);

const AggregateDark: FC<SvgProps> = ({
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
    <circle cx={8} cy={8} r={6.5} fill="#25324D" stroke="#548AF7" />
    <path
      d="M7.47083 4.97998H8.53293L10.799 11H9.79713L9.26823 9.51648H6.79143L6.30123 11H5.27783L7.47083 4.97998ZM8.99303 8.72958L8.09003 6.22268L7.99543 5.84858L7.90083 6.22268L7.04513 8.72958H8.99303Z"
      fill="#548AF7"
    />
  </svg>
);

export const Aggregate: FC<AggregateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AggregateLight : AggregateDark;

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

export default Aggregate;
