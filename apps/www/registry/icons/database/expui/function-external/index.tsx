/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type FunctionExternalProps = SvgProps;

const FunctionExternalLight: FC<SvgProps> = ({
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
      d="M14.9372 8.94139C14.9786 8.63348 15 8.31924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C8.31924 15 8.63348 14.9786 8.94139 14.9372L11.8786 12H11.5C10.6716 12 10 11.3284 10 10.5C10 9.67157 10.6716 9 11.5 9H14.8786L14.9372 8.94139Z"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 5V11H7.5V9.03933H9.99487V8.03933H7.5V6H10.5V5H6.5Z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5C11 10.2239 11.2239 10 11.5 10H15.5C15.7761 10 16 10.2239 16 10.5V14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5V11.7071L10.8536 15.8536C10.6583 16.0488 10.3417 16.0488 10.1464 15.8536C9.95118 15.6583 9.95118 15.3417 10.1464 15.1464L14.2929 11H11.5C11.2239 11 11 10.7761 11 10.5Z"
      fill="#6C707E"
    />
    <path
      d="M10.361 13.5176C9.63638 13.8281 8.83826 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 8.34071 13.9716 8.67479 13.917 9H14.8786L14.9372 8.94139C14.9786 8.63348 15 8.31924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C8.31924 15 8.63348 14.9786 8.94139 14.9372L10.361 13.5176Z"
      fill="#3574F0"
    />
  </svg>
);

const FunctionExternalDark: FC<SvgProps> = ({
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
      d="M14.9372 8.94139C14.9786 8.63348 15 8.31924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C8.31924 15 8.63348 14.9786 8.94139 14.9372L11.8786 12H11.5C10.6716 12 10 11.3284 10 10.5C10 9.67157 10.6716 9 11.5 9H14.8786L14.9372 8.94139Z"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 5V11H7.5V9.03933H9.99487V8.03933H7.5V6H10.5V5H6.5Z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5C11 10.2239 11.2239 10 11.5 10H15.5C15.7761 10 16 10.2239 16 10.5V14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5V11.7071L10.8536 15.8536C10.6583 16.0488 10.3417 16.0488 10.1464 15.8536C9.95118 15.6583 9.95118 15.3417 10.1464 15.1464L14.2929 11H11.5C11.2239 11 11 10.7761 11 10.5Z"
      fill="#CED0D6"
    />
    <path
      d="M10.361 13.5176C9.63638 13.8281 8.83826 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 8.34071 13.9716 8.67479 13.917 9H14.8786L14.9372 8.94139C14.9786 8.63348 15 8.31924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C8.31924 15 8.63348 14.9786 8.94139 14.9372L10.361 13.5176Z"
      fill="#548AF7"
    />
  </svg>
);

export const FunctionExternal: FC<FunctionExternalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FunctionExternalLight : FunctionExternalDark;

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

export default FunctionExternal;
