/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type CloudServiceProps = SvgProps;

const CloudServiceLight: FC<SvgProps> = ({
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
      d="M8 4C6.80272 4 5.76826 4.70135 5.28689 5.71782L5.1583 5.98935L4.85818 6.00328C3.26739 6.07711 2 7.39069 2 9C2 10.6569 3.34315 12 5 12H11.5C12.8807 12 14 10.8807 14 9.5C14 8.11976 12.8815 7.00076 11.5014 7C11.5009 7 11.5005 7 11.5 7L11.0314 7.00276L10.9696 6.57098C10.7618 5.11752 9.51098 4 8 4ZM4.51881 5.02868C5.20575 3.81809 6.5069 3 8 3C9.87134 3 11.4419 4.28465 11.879 6.02029C13.6338 6.20925 15 7.69507 15 9.5C15 11.433 13.433 13 11.5 13H5C2.79086 13 1 11.2091 1 9C1 6.9537 2.53638 5.2665 4.51881 5.02868Z"
      fill="#6C707E"
    />
  </svg>
);

const CloudServiceDark: FC<SvgProps> = ({
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
      d="M8 4C6.80272 4 5.76826 4.70135 5.28689 5.71782L5.1583 5.98935L4.85818 6.00328C3.26739 6.07711 2 7.39069 2 9C2 10.6569 3.34315 12 5 12H11.5C12.8807 12 14 10.8807 14 9.5C14 8.11976 12.8815 7.00076 11.5014 7C11.5009 7 11.5005 7 11.5 7L11.0314 7.00276L10.9696 6.57098C10.7618 5.11752 9.51098 4 8 4ZM4.51881 5.02868C5.20575 3.81809 6.5069 3 8 3C9.87134 3 11.4419 4.28465 11.879 6.02029C13.6338 6.20925 15 7.69507 15 9.5C15 11.433 13.433 13 11.5 13H5C2.79086 13 1 11.2091 1 9C1 6.9537 2.53638 5.2665 4.51881 5.02868Z"
      fill="#CED0D6"
    />
  </svg>
);

export const CloudService: FC<CloudServiceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CloudServiceLight : CloudServiceDark;

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

export default CloudService;
