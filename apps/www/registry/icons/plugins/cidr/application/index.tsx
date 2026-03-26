import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ApplicationProps = IconProps;

const ApplicationLight: React.FC<SvgProps> = ({
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
      d="M8.74 7.528H6.97L5.83 9.625h3.727zM12.748 9.625H15V7.528h-3.068zM1 7.528h2.613L2.475 9.625H1zM5.032 6.07l-2.831 5.767-.063 2.186 1.627-1.503 2.84-5.785zM5.391 5.339l1.573.664.422-.86c.243-.494.058-.964-.352-1.143-.438-.191-.942-.087-1.245.529zM11.212 12.54l.003.006c.423 1.136 1.503 1.797 2.412 1.268l-.737-1.995zM10.848 11.558l1.679-.722c-1.339-3.621-3.434-9.29-3.54-9.566-.077-.2-.632-.334-1.051-.16-.421.173-.742.619-.665.819.062.162 2.61 7.024 3.577 9.629"
      fill="#6C707E"
    />
  </svg>
);

const ApplicationDark: React.FC<SvgProps> = ({
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
      d="M8.74 7.528H6.97L5.83 9.625h3.727zM12.748 9.625H15V7.528h-3.068zM1 7.528h2.613L2.475 9.625H1zM5.032 6.07l-2.831 5.767-.063 2.186 1.627-1.503 2.84-5.785zM5.391 5.339l1.573.664.422-.86c.243-.494.058-.964-.352-1.143-.438-.191-.942-.087-1.245.529zM11.212 12.54l.003.006c.423 1.136 1.503 1.797 2.412 1.268l-.737-1.995zM10.848 11.558l1.679-.722c-1.339-3.621-3.434-9.29-3.54-9.566-.077-.2-.632-.334-1.051-.16-.421.173-.742.619-.665.819.062.162 2.61 7.024 3.577 9.629"
      fill="#CED0D6"
    />
  </svg>
);

export const Application: React.FC<ApplicationProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ApplicationLight : ApplicationDark;

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
