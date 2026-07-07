/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type MetadataProps = SvgProps;

const MetadataLight: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#FAF5FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <path
      d="M10.708 5.226a5.5 5.5 0 1 0-2.66 6.65 1.5 1.5 0 0 1 .391-1.437l-.017-.017A4.5 4.5 0 1 1 10 7v-.5c0-.538.283-1.01.708-1.274"
      fill="#834DF0"
    />
    <path
      d="M3 7v2H2V5h1v.268a1.995 1.995 0 0 1 2.5.41A2 2 0 0 1 9 7v1.999H8V7a1 1 0 0 0-2 0v2H5V7a1 1 0 0 0-2 0"
      fill="#834DF0"
    />
  </svg>
);

const MetadataDark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#2F2936" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <path
      d="M10.708 5.226a5.5 5.5 0 1 0-2.66 6.65 1.5 1.5 0 0 1 .391-1.437l-.017-.017A4.5 4.5 0 1 1 10 7v-.5c0-.538.283-1.01.708-1.274"
      fill="#A571E6"
    />
    <path
      d="M3 7v2H2V5h1v.268a1.995 1.995 0 0 1 2.5.41A2 2 0 0 1 9 7v1.999H8V7a1 1 0 0 0-2 0v2H5V7a1 1 0 0 0-2 0"
      fill="#A571E6"
    />
  </svg>
);

export const Metadata: FC<MetadataProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MetadataLight : MetadataDark;

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

export default Metadata;
