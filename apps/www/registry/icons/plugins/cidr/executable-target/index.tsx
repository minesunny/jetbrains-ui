import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ExecutableTargetProps = IconProps;

const ExecutableTargetLight: React.FC<SvgProps> = ({
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
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8.03 8.03 0 0 1 4.032-6.868l.501-.286.498.29a8 8 0 0 1 1.793 1.429"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 15.076A7.03 7.03 0 0 1 12.528 9 7.03 7.03 0 0 1 16 15.072v.018c-2.066 1.194-4.73 1.237-7-.014m5-3.18a3.01 3.01 0 0 1-1.512 2.604 3.01 3.01 0 0 1-1.489-2.602v-.008c.886-.512 2.028-.53 3 .005"
      fill="#39207C"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8 8 0 0 1 .076-1H8a6 6 0 1 1 5.952-5.236q.468.37.872.801"
      fill="#834DF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.9 11.405a4.2 4.2 0 0 1-.836.078q-.936 0-1.683-.449a3.14 3.14 0 0 1-1.17-1.241q-.416-.8-.416-1.807 0-.982.422-1.775a3.18 3.18 0 0 1 2.847-1.696q.944 0 1.651.448.715.45 1.099 1.242.39.792.39 1.794v.253h-5.35q.051.585.286 1.066.3.591.82.923a2.13 2.13 0 0 0 1.17.332q.435 0 .805-.104.377-.111.65-.312.28-.209.43-.481h.087A8 8 0 0 0 8.9 11.405m1.224-4.01H5.882q.066-.424.239-.774.279-.572.786-.878a2.2 2.2 0 0 1 1.17-.312q.664 0 1.131.319.475.318.715.897.143.339.201.747"
      fill="#834DF0"
    />
  </svg>
);

const ExecutableTargetDark: React.FC<SvgProps> = ({
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
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8.03 8.03 0 0 1 4.032-6.868l.501-.286.498.29a8 8 0 0 1 1.793 1.429"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 15.076A7.03 7.03 0 0 1 12.528 9 7.03 7.03 0 0 1 16 15.072v.018c-2.066 1.194-4.73 1.237-7-.014m5-3.18a3.01 3.01 0 0 1-1.512 2.604 3.01 3.01 0 0 1-1.489-2.602v-.008c.886-.512 2.028-.53 3 .005"
      fill="#fff"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8 8 0 0 1 .076-1H8a6 6 0 1 1 5.952-5.236q.468.37.872.801"
      fill="#A571E6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.9 11.405a4.2 4.2 0 0 1-.836.078q-.936 0-1.683-.449a3.14 3.14 0 0 1-1.17-1.241q-.416-.8-.416-1.807 0-.982.422-1.775a3.18 3.18 0 0 1 2.847-1.696q.944 0 1.651.448.715.45 1.099 1.242.39.792.39 1.794v.253h-5.35q.051.585.286 1.066.3.591.82.923a2.13 2.13 0 0 0 1.17.332q.435 0 .805-.104.377-.111.65-.312.28-.209.43-.481h.087A8 8 0 0 0 8.9 11.405m1.224-4.01H5.882q.066-.424.239-.774.279-.572.786-.878a2.2 2.2 0 0 1 1.17-.312q.664 0 1.131.319.475.318.715.897.143.339.201.747"
      fill="#A571E6"
    />
  </svg>
);

export const ExecutableTarget: React.FC<ExecutableTargetProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ExecutableTargetLight : ExecutableTargetDark;

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
