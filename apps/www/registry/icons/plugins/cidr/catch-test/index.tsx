import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CatchTestProps = IconProps;

const CatchTestLight: React.FC<SvgProps> = ({
  size,
  className,
  title,
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
    {title && <title>{title}</title>}
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
        fill="#55A76A"
      />
      <path
        d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
        fill="#E55765"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.043 9.959.585-.563a1.39 1.39 0 0 1 1.699-.188 2.5 2.5 0 1 0-2.284.75"
      fill="#E66D17"
    />
    <path
      d="M8.516 2.777c.85 0 1.337.412 1.995 1.52.548.925 1.489.156 1.489-.625 0-.676-.21-1.268-.941-1.83C10.328 1.283 9.955 1 8.516 1 5.026 1 1.68 5.19 1.202 7.26c-.39 1.69-.216 2.922.52 4.05Q2.824 13 5.33 13q.607 0 1.173-.08c.02-.34.162-.674.428-.929l1.627-1.565a.6.6 0 0 0-.376.123q-.955.755-2.291.755-1.741 0-2.279-1.212c-.358-.807-.397-1.627-.119-2.81.27-1.174 1.837-4.279 5.023-4.505"
      fill="#6C707E"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(7 10)" d="M0 0H9V6H0z" />
      </clipPath>
    </defs>
  </svg>
);

const CatchTestDark: React.FC<SvgProps> = ({
  size,
  className,
  title,
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
    {title && <title>{title}</title>}
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
        fill="#57965C"
      />
      <path
        d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
        fill="#DB5C5C"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.043 9.959.585-.563a1.39 1.39 0 0 1 1.699-.188 2.5 2.5 0 1 0-2.284.75"
      fill="#E08855"
    />
    <path
      d="M8.516 2.777c.85 0 1.337.412 1.995 1.52.548.925 1.489.156 1.489-.625 0-.676-.21-1.268-.941-1.83C10.328 1.283 9.955 1 8.516 1 5.026 1 1.68 5.19 1.202 7.26c-.39 1.69-.216 2.922.52 4.05Q2.824 13 5.33 13q.607 0 1.173-.08c.02-.34.162-.674.428-.929l1.627-1.565a.6.6 0 0 0-.376.123q-.955.755-2.291.755-1.741 0-2.279-1.212c-.358-.807-.397-1.627-.119-2.81.27-1.174 1.837-4.279 5.023-4.505"
      fill="#CED0D6"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(7 10)" d="M0 0H9V6H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CatchTest: React.FC<CatchTestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CatchTestLight : CatchTestDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      title={title}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
