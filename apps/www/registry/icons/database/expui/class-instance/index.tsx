/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ClassInstanceProps = SvgProps;

const ClassInstanceLight: FC<SvgProps> = ({
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
      d="M8.13295 11.5C9.61223 11.5 10.8836 10.6105 11.2075 9.33909H10.2213C9.90229 10.0739 9.11914 10.6057 8.13295 10.6057C6.77936 10.6057 5.80284 9.51796 5.80284 8C5.80284 6.48204 6.77936 5.39434 8.13295 5.39434C9.11914 5.39434 9.90229 5.92611 10.2213 6.66091H11.2075C10.8836 5.3895 9.61223 4.5 8.13295 4.5C6.21859 4.5 4.79248 5.99378 4.79248 8C4.79248 10.0062 6.21859 11.5 8.13295 11.5Z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10H13.5C13.7761 10 14 10.2239 14 10.5V15H13V11H12V10Z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 16H11.5V15H15.5V16Z"
      fill="#3574F0"
    />
    <path d="M12.5 7.5H14V9H12.5V7.5Z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.811 6.5C13.1449 3.91216 10.7958 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C8.89221 14 9.73894 13.8053 10.5 13.456V14.5404C9.7236 14.8373 8.8808 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.3511 1 14.1522 3.35482 14.8389 6.5H13.811ZM14 8V7.5H13.9795C13.9931 7.66487 14 7.83162 14 8Z"
      fill="#6C707E"
    />
  </svg>
);

const ClassInstanceDark: FC<SvgProps> = ({
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
      d="M8.13295 11.5C9.61223 11.5 10.8836 10.6105 11.2075 9.33909H10.2213C9.90229 10.0739 9.11914 10.6057 8.13295 10.6057C6.77936 10.6057 5.80284 9.51796 5.80284 8C5.80284 6.48204 6.77936 5.39434 8.13295 5.39434C9.11914 5.39434 9.90229 5.92611 10.2213 6.66091H11.2075C10.8836 5.3895 9.61223 4.5 8.13295 4.5C6.21859 4.5 4.79248 5.99378 4.79248 8C4.79248 10.0062 6.21859 11.5 8.13295 11.5Z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10H13.5C13.7761 10 14 10.2239 14 10.5V15H13V11H12V10Z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 16H11.5V15H15.5V16Z"
      fill="#548AF7"
    />
    <path d="M12.5 7.5H14V9H12.5V7.5Z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.811 6.5C13.1449 3.91216 10.7958 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C8.89221 14 9.73894 13.8053 10.5 13.456V14.5404C9.7236 14.8373 8.8808 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.3511 1 14.1522 3.35482 14.8389 6.5H13.811ZM14 8V7.5H13.9795C13.9931 7.66487 14 7.83162 14 8Z"
      fill="#CED0D6"
    />
  </svg>
);

export const ClassInstance: FC<ClassInstanceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ClassInstanceLight : ClassInstanceDark;

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

export default ClassInstance;
