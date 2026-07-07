/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type StatisticsEventLogProps = SvgProps;

const StatisticsEventLogLight: FC<SvgProps> = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5v5.793l2.146-2.146a1.5 1.5 0 1 1 2.708 0l2 2a1.5 1.5 0 0 1 1.293 0l3-3a1.5 1.5 0 1 1 .707.707l-3 3a1.5 1.5 0 1 1-2.708 0l-2-2a1.5 1.5 0 0 1-1.293 0L2 9.707V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5M6 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m4 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#6C707E"
    />
  </svg>
);

const StatisticsEventLogDark: FC<SvgProps> = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5v5.793l2.146-2.146a1.5 1.5 0 1 1 2.708 0l2 2a1.5 1.5 0 0 1 1.293 0l3-3a1.5 1.5 0 1 1 .707.707l-3 3a1.5 1.5 0 1 1-2.708 0l-2-2a1.5 1.5 0 0 1-1.293 0L2 9.707V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5M6 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m4 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#CED0D6"
    />
  </svg>
);

export const StatisticsEventLog: FC<StatisticsEventLogProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? StatisticsEventLogLight : StatisticsEventLogDark;

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

export default StatisticsEventLog;
