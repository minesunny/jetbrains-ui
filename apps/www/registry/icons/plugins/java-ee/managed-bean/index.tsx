import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ManagedBeanProps = IconProps;

const ManagedBeanLight: React.FC<SvgProps> = ({
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
      d="M13.96 7.978c1.655-1.655 1.204-3.887-.434-5.525C11.89.816 9.63.41 8.011 2.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42M7.96 13.978c1.655-1.655 1.204-3.887-.434-5.525C5.89 6.816 3.63 6.41 2.011 8.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42"
      fill="#FFF4EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.82 3.16c.698.7 1.085 1.468 1.164 2.162a2.2 2.2 0 0 1-.399 1.556L9.112 2.405a2.23 2.23 0 0 1 1.543-.39c.7.074 1.472.453 2.164 1.145m-4.416-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591M6.819 9.16c.699.7 1.086 1.468 1.165 2.162a2.2 2.2 0 0 1-.399 1.556L3.112 8.405a2.23 2.23 0 0 1 1.543-.391c.7.075 1.472.454 2.164 1.147m-4.415-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591M13.96 7.979c1.655-1.655 1.204-3.887-.434-5.525C11.89.816 9.63.41 8.011 2.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42m-6 6c1.655-1.655 1.204-3.887-.434-5.525C5.89 6.816 3.63 6.41 2.011 8.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42"
      fill="#E66D17"
    />
  </svg>
);

const ManagedBeanDark: React.FC<SvgProps> = ({
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
      d="M13.96 7.978c1.655-1.655 1.204-3.887-.434-5.525C11.89.816 9.63.41 8.011 2.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42M7.96 13.978c1.655-1.655 1.204-3.887-.434-5.525C5.89 6.816 3.63 6.41 2.011 8.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42"
      fill="#45322B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.82 3.16c.698.7 1.085 1.468 1.164 2.162a2.2 2.2 0 0 1-.399 1.556L9.112 2.405a2.23 2.23 0 0 1 1.543-.39c.7.074 1.472.453 2.164 1.145m-4.416-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591M6.819 9.16c.699.7 1.086 1.468 1.165 2.162a2.2 2.2 0 0 1-.399 1.556L3.112 8.405a2.23 2.23 0 0 1 1.543-.391c.7.075 1.472.454 2.164 1.147m-4.415-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591M13.96 7.979c1.655-1.655 1.204-3.887-.434-5.525C11.89.816 9.63.41 8.011 2.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42m-6 6c1.655-1.655 1.204-3.887-.434-5.525C5.89 6.816 3.63 6.41 2.011 8.028c-1.62 1.62-1.154 3.964.411 5.53 1.566 1.565 3.883 2.075 5.538.42"
      fill="#C77D55"
    />
  </svg>
);

export const ManagedBean: React.FC<ManagedBeanProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ManagedBeanLight : ManagedBeanDark;

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
