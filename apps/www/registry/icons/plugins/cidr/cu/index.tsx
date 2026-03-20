import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CuProps = IconProps;

const CuLight: React.FC<SvgProps> = ({
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
      d="M4.998 13.172q-.857 0-1.437-.48-.572-.486-.865-1.465-.285-.987-.286-2.503V7.266q0-1.516.286-2.496.294-.986.865-1.465.579-.487 1.437-.487.765 0 1.302.372.536.365.83 1.108.299.744.364 1.88H6.15q-.05-.735-.193-1.207T5.57 4.27a.8.8 0 0 0-.572-.236q-.393 0-.664.35-.265.35-.4 1.066-.137.714-.137 1.816v1.458q0 1.101.136 1.816t.4 1.066q.273.35.665.35.33 0 .572-.229.244-.229.387-.7.143-.472.193-1.216h1.344q-.065 1.144-.365 1.888-.293.736-.83 1.108-.529.365-1.3.365M10.908 13.172q-.793 0-1.33-.444-.535-.443-.808-1.33-.27-.886-.271-2.216V2.99h1.344v6.185q0 .93.114 1.551.121.615.358.923a.72.72 0 0 0 .593.307q.35 0 .58-.307.236-.308.35-.923.12-.622.121-1.551V2.99h1.345v6.192q0 1.33-.272 2.216-.271.887-.808 1.33-.529.444-1.316.444"
      fill="#369650"
    />
  </svg>
);

const CuDark: React.FC<SvgProps> = ({
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
      d="M4.998 13.172q-.857 0-1.437-.48-.572-.486-.865-1.465-.285-.987-.286-2.503V7.266q0-1.516.286-2.496.294-.986.865-1.465.579-.487 1.437-.487.765 0 1.302.372.536.365.83 1.108.299.744.364 1.88H6.15q-.05-.735-.193-1.207T5.57 4.27a.8.8 0 0 0-.572-.236q-.393 0-.664.35-.265.35-.4 1.066-.137.714-.137 1.816v1.458q0 1.101.136 1.816t.4 1.066q.273.35.665.35.33 0 .572-.229.244-.229.387-.7.143-.472.193-1.216h1.344q-.065 1.144-.365 1.888-.293.736-.83 1.108-.529.365-1.3.365M10.908 13.172q-.793 0-1.33-.444-.535-.443-.808-1.33-.27-.886-.271-2.216V2.99h1.344v6.185q0 .93.114 1.551.121.615.358.923a.72.72 0 0 0 .593.307q.35 0 .58-.307.236-.308.35-.923.12-.622.121-1.551V2.99h1.345v6.192q0 1.33-.272 2.216-.271.887-.808 1.33-.529.444-1.316.444"
      fill="#57965C"
    />
  </svg>
);

export const Cu: React.FC<CuProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CuLight : CuDark;

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
