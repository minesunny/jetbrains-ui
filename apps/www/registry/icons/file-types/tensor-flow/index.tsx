import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TensorFlowProps = IconProps;

const TensorFlowLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          d="m13 11.056-1.932-1.123v4.469L8.333 16V0L15 3.857V7.39l-3.932-2.32v1.799L13 7.962zm-12-7.2L7.667 0v16l-2.735-1.599V5.068L1 7.387z"
          fill="url(#c)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1="1"
        y1="8"
        x2="15"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7200" />
        <stop offset="1" stopColor="#FFA100" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const TensorFlowDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          d="m13 11.056-1.932-1.123v4.469L8.333 16V0L15 3.857V7.39l-3.932-2.32v1.799L13 7.962zm-12-7.2L7.667 0v16l-2.735-1.599V5.068L1 7.387z"
          fill="url(#c)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1="1"
        y1="8"
        x2="15"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7200" />
        <stop offset="1" stopColor="#FFA100" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const TensorFlow: FC<TensorFlowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TensorFlowLight : TensorFlowDark;

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
