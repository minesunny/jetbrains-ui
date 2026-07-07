/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ExternalSchemaProps = SvgProps;

const ExternalSchemaLight: FC<SvgProps> = ({
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
      d="M14 7H11C10.4477 7 10 6.55228 10 6V3C10 2.44772 10.4477 2 11 2H14C14.5523 2 15 2.44772 15 3V6C15 6.55228 14.5523 7 14 7Z"
      fill="#EBECF0"
    />
    <path
      d="M1 8V13C1 13.5523 1.44772 14 2 14H7C7.55228 14 8 13.5523 8 13V8C8 7.44772 7.55228 7 7 7H2C1.44772 7 1 7.44772 1 8Z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 7H14C14.5523 7 15 6.55228 15 6V3C15 2.44772 14.5523 2 14 2H11C10.4477 2 10 2.44772 10 3V4H5C4.44772 4 4 4.44772 4 5V7H2C1.44772 7 1 7.44772 1 8V13C1 13.5523 1.44772 14 2 14H7C7.55228 14 8 13.5523 8 13V12H10V11H8V8C8 7.44772 7.55228 7 7 7H5V5H10V6C10 6.55228 10.4477 7 11 7ZM14 6H11V3L14 3V6ZM2 8V13H7V8H2Z"
      fill="#6C707E"
    />
  </svg>
);

const ExternalSchemaDark: FC<SvgProps> = ({
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
      d="M14 7H11C10.4477 7 10 6.55228 10 6V3C10 2.44772 10.4477 2 11 2H14C14.5523 2 15 2.44772 15 3V6C15 6.55228 14.5523 7 14 7Z"
      fill="#43454A"
    />
    <path
      d="M1 8V13C1 13.5523 1.44772 14 2 14H7C7.55228 14 8 13.5523 8 13V8C8 7.44772 7.55228 7 7 7H2C1.44772 7 1 7.44772 1 8Z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 7H14C14.5523 7 15 6.55228 15 6V3C15 2.44772 14.5523 2 14 2H11C10.4477 2 10 2.44772 10 3V4H5C4.44772 4 4 4.44772 4 5V7H2C1.44772 7 1 7.44772 1 8V13C1 13.5523 1.44772 14 2 14H7C7.55228 14 8 13.5523 8 13V12H10V11H8V8C8 7.44772 7.55228 7 7 7H5V5H10V6C10 6.55228 10.4477 7 11 7ZM14 6H11V3L14 3V6ZM2 8V13H7V8H2Z"
      fill="#CED0D6"
    />
  </svg>
);

export const ExternalSchema: FC<ExternalSchemaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ExternalSchemaLight : ExternalSchemaDark;

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

export default ExternalSchema;
