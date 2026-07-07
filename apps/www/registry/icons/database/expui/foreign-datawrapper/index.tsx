/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ForeignDatawrapperProps = SvgProps;

const ForeignDatawrapperLight: FC<SvgProps> = ({
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
      d="M11 10.5C11 10.2239 11.2239 10 11.5 10H15.5C15.7761 10 16 10.2239 16 10.5V14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5V11.7071L10.8536 15.8536C10.6583 16.0488 10.3417 16.0488 10.1464 15.8536C9.95118 15.6583 9.95118 15.3417 10.1464 15.1464L14.2929 11H11.5C11.2239 11 11 10.7761 11 10.5Z"
      fill="#3574F0"
    />
    <path
      d="M14 4C14 2.89543 13.1046 2 12 2H4C3.93096 2 3.86275 2.0035 3.79551 2.01033C2.92147 2.09909 2.2138 2.75066 2.04063 3.59693C2.01399 3.72713 2 3.86193 2 4V12C2 13.1046 2.89543 14 4 14H9.87868L10.8787 13H4C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4V9H14V4Z"
      fill="#6C707E"
    />
  </svg>
);

const ForeignDatawrapperDark: FC<SvgProps> = ({
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
      d="M11 10.5C11 10.2239 11.2239 10 11.5 10H15.5C15.7761 10 16 10.2239 16 10.5V14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5V11.7071L10.8536 15.8536C10.6583 16.0488 10.3417 16.0488 10.1464 15.8536C9.95118 15.6583 9.95118 15.3417 10.1464 15.1464L14.2929 11H11.5C11.2239 11 11 10.7761 11 10.5Z"
      fill="#548AF7"
    />
    <path
      d="M14 4C14 2.89543 13.1046 2 12 2H4C3.93096 2 3.86275 2.0035 3.79551 2.01033C2.92147 2.09909 2.2138 2.75066 2.04063 3.59693C2.01399 3.72713 2 3.86193 2 4V12C2 13.1046 2.89543 14 4 14H9.87868L10.8787 13H4C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4V9H14V4Z"
      fill="#CED0D6"
    />
  </svg>
);

export const ForeignDatawrapper: FC<ForeignDatawrapperProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ForeignDatawrapperLight : ForeignDatawrapperDark;

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

export default ForeignDatawrapper;
