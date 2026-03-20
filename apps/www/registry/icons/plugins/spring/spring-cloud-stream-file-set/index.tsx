import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SpringCloudStreamFileSetProps = IconProps;

const SpringCloudStreamFileSetLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 16.004H9c-1.105 0-2-1.119-2-2.5 0-1.38.895-2.5 2-2.5h5c1.105 0 2 1.12 2 2.5 0 1.381-.895 2.5-2 2.5m-1.6-1H9c-.356 0-1-.451-1-1.5s.644-1.5 1-1.5h3.4c-.251.418-.4.938-.4 1.5s.149 1.082.4 1.5m2.6-1.5c0 1.049-.644 1.5-1 1.5s-1-.451-1-1.5.644-1.5 1-1.5 1 .452 1 1.5"
        fill="#3574F0"
      />
      <path
        d="M9 15.004h3.4a2.9 2.9 0 0 1-.4-1.5c0-.562.149-1.082.4-1.5H9c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5M14 15.004c.356 0 1-.451 1-1.5s-.644-1.5-1-1.5-1 .452-1 1.5.644 1.5 1 1.5"
        fill="#EDF3FF"
      />
      <path
        d="M3 5.828V11a2 2 0 0 0 2 2h1.033c.199-1.542 1.295-2.996 2.967-2.996h3V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586L3.586 4.414A2 2 0 0 0 3 5.828"
        fill="#EBECF0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H10a2 2 0 0 1 2 2v7.004h-1V3a1 1 0 0 0-1-1H8v2.5A1.5 1.5 0 0 1 6.5 6H4v5a1 1 0 0 0 1 1h1.295c-.13.319-.218.657-.262 1H5a2 2 0 0 1-2-2m1.414-6L7 2.414V4.5a.5.5 0 0 1-.5.5z"
        fill="#6C707E"
      />
      <path d="M14 10.004V4.5a.5.5 0 0 0-1 0v5.504z" fill="#6C707E" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const SpringCloudStreamFileSetDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 16.004H9c-1.105 0-2-1.119-2-2.5 0-1.38.895-2.5 2-2.5h5c1.105 0 2 1.12 2 2.5 0 1.381-.895 2.5-2 2.5m-1.6-1H9c-.356 0-1-.451-1-1.5s.644-1.5 1-1.5h3.4c-.251.418-.4.938-.4 1.5s.149 1.082.4 1.5m2.6-1.5c0 1.049-.644 1.5-1 1.5s-1-.451-1-1.5.644-1.5 1-1.5 1 .452 1 1.5"
        fill="#548AF7"
      />
      <path
        d="M9 15.004h3.4a2.9 2.9 0 0 1-.4-1.5c0-.562.149-1.082.4-1.5H9c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5M14 15.004c.356 0 1-.451 1-1.5s-.644-1.5-1-1.5-1 .452-1 1.5.644 1.5 1 1.5"
        fill="#25324D"
      />
      <path
        d="M3 5.828V11a2 2 0 0 0 2 2h1.033c.199-1.542 1.295-2.996 2.967-2.996h3V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586L3.586 4.414A2 2 0 0 0 3 5.828"
        fill="#43454A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H10a2 2 0 0 1 2 2v7.004h-1V3a1 1 0 0 0-1-1H8v2.5A1.5 1.5 0 0 1 6.5 6H4v5a1 1 0 0 0 1 1h1.295c-.13.319-.218.657-.262 1H5a2 2 0 0 1-2-2m1.414-6L7 2.414V4.5a.5.5 0 0 1-.5.5z"
        fill="#CED0D6"
      />
      <path d="M14 10.004V4.5a.5.5 0 0 0-1 0v5.504z" fill="#CED0D6" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const SpringCloudStreamFileSet: React.FC<
  SpringCloudStreamFileSetProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? SpringCloudStreamFileSetLight
      : SpringCloudStreamFileSetDark;

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
