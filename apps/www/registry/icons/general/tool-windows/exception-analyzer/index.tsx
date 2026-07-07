/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ExceptionAnalyzerProps = SvgProps;

const ExceptionAnalyzerLight: FC<SvgProps> = ({
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
      d="M8.244 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.11 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.889 7H9a1 1 0 0 1-.755-.345M9.746.775c.072-.5-.561-.779-.882-.387L1.668 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.944 6H9z"
      fill="#6C707E"
    />
  </svg>
);

const ExceptionAnalyzerDark: FC<SvgProps> = ({
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
      d="M8.244 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.11 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.889 7H9a1 1 0 0 1-.755-.345M9.746.775c.072-.5-.561-.779-.882-.387L1.668 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.944 6H9z"
      fill="#CED0D6"
    />
  </svg>
);

export const ExceptionAnalyzer: FC<ExceptionAnalyzerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ExceptionAnalyzerLight : ExceptionAnalyzerDark;

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

export default ExceptionAnalyzer;
