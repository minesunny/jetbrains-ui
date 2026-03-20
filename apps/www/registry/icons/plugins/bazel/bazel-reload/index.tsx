import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BazelReloadProps = IconProps;

const BazelReloadLight: React.FC<SvgProps> = ({
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
      <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
      <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
      <path
        d="M8.5 8a.5.5 0 0 1 .5.5v.826l.181-.164A4 4 0 0 1 12.001 8a4.005 4.005 0 0 1 3.96 3.43.5.5 0 1 1-.991.14 2.97 2.97 0 0 0-.849-1.691A3 3 0 0 0 12.002 9c-.83 0-1.579.335-2.122.879l-.009.009-.124.112h.754a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5M8.465 12.005a.5.5 0 0 1 .566.424c.093.656.4 1.244.848 1.692A3 3 0 0 0 12 15c.829 0 1.578-.335 2.122-.879l.008-.009.119-.112H13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.834l-.176.167A4 4 0 0 1 12 16a4 4 0 0 1-2.828-1.172 4 4 0 0 1-1.131-2.257.5.5 0 0 1 .424-.566"
        fill="#6C707E"
      />
      <path d="M7 10.5V14l-2.5-2.5V8z" fill="#00701A" />
      <path
        d="M15 8V4.5l-2.523 2.523c.94.089 1.806.44 2.522.977"
        fill="#43A047"
      />
      <path
        d="M15 4.5 11.5 1 8 4.5l2.677 2.677a5 5 0 0 1 1.8-.154z"
        fill="#76D275"
      />
      <path
        d="M10.677 7.177 8 4.5 4.5 8 7 10.5v-2a1.5 1.5 0 0 1 2.678-.929q.474-.249 1-.394"
        fill="#43A047"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const BazelReloadDark: React.FC<SvgProps> = ({
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
      <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
      <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
      <path
        d="M8.5 8a.5.5 0 0 1 .5.5v.826l.181-.164A4 4 0 0 1 12.001 8a4.005 4.005 0 0 1 3.96 3.43.5.5 0 1 1-.991.14 2.97 2.97 0 0 0-.849-1.691A3 3 0 0 0 12.002 9c-.83 0-1.579.335-2.122.879l-.009.009-.124.112h.754a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5M8.465 12.005a.5.5 0 0 1 .566.424c.093.656.4 1.244.848 1.692A3 3 0 0 0 12 15c.829 0 1.578-.335 2.122-.879l.008-.009.119-.112H13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.834l-.176.167A4 4 0 0 1 12 16a4 4 0 0 1-2.828-1.172 4 4 0 0 1-1.131-2.257.5.5 0 0 1 .424-.566"
        fill="#CED0D6"
      />
      <path d="M7 10.5V14l-2.5-2.5V8z" fill="#00701A" />
      <path
        d="M15 8V4.5l-2.523 2.523c.94.089 1.806.44 2.522.977"
        fill="#43A047"
      />
      <path
        d="M15 4.5 11.5 1 8 4.5l2.677 2.677a5 5 0 0 1 1.8-.154z"
        fill="#76D275"
      />
      <path
        d="M10.677 7.177 8 4.5 4.5 8 7 10.5v-2a1.5 1.5 0 0 1 2.678-.929q.474-.249 1-.394"
        fill="#43A047"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const BazelReload: React.FC<BazelReloadProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BazelReloadLight : BazelReloadDark;

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
