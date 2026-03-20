import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WorkloadsProps = IconProps;

const WorkloadsLight: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="11.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="1.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="1.5"
      y="1.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="6.5"
      y="11.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="6.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="6.5"
      y="1.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="11.5"
      y="11.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <rect
      x="11.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
  </svg>
);

const WorkloadsDark: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="11.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="1.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="1.5"
      y="1.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="6.5"
      y="11.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="6.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="6.5"
      y="1.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="11.5"
      y="11.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <rect
      x="11.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
  </svg>
);

export const Workloads: React.FC<WorkloadsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WorkloadsLight : WorkloadsDark;

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
