import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type InterceptorsProps = IconProps;

const InterceptorsLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#6C707E" />
    <path
      d="M10.526 5.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425"
      fill="#FFF4EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 5.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425m-.707.707c.699.7 1.086 1.468 1.165 2.162a2.2 2.2 0 0 1-.399 1.556L6.112 5.405a2.23 2.23 0 0 1 1.543-.391c.7.075 1.472.454 2.164 1.146m-4.415-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591"
      fill="#E66D17"
    />
  </svg>
);

const InterceptorsDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#CED0D6" />
    <path
      d="M10.526 5.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425"
      fill="#45322B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 5.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425m-.707.707c.699.7 1.086 1.468 1.165 2.162a2.2 2.2 0 0 1-.399 1.556L6.112 5.405a2.23 2.23 0 0 1 1.543-.391c.7.075 1.472.454 2.164 1.146m-4.415-.05 4.475 4.476a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591"
      fill="#C77D55"
    />
  </svg>
);

export const Interceptors: React.FC<InterceptorsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InterceptorsLight : InterceptorsDark;

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
