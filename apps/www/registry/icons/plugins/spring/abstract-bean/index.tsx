import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AbstractBeanProps = IconProps;

const AbstractBeanLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.421 3.543c2.865 2.866 3.656 6.772.76 9.668-2.897 2.897-6.953 2.003-9.692-.736C.75 9.736-.065 5.634 2.77 2.8s6.787-2.122 9.652.743"
      fill="#F2FCF3"
    />
    <path
      d="M12.421 3.543q.595.595 1.064 1.241l-.81.588a9.4 9.4 0 0 0-2.077-2.074l.584-.811q.646.464 1.24 1.056M8.923 2.384l.357-.935c-1.055-.402-2.144-.545-3.2-.384l.15.988c.865-.131 1.78-.018 2.693.33M4.56 2.656l-.511-.86A6.5 6.5 0 0 0 2.769 2.8a6.3 6.3 0 0 0-.995 1.283l.864.502q.215-.37.514-.726l8.97 8.97q-.361.305-.733.523l.507.862a6.4 6.4 0 0 0 1.284-1.003 6.7 6.7 0 0 0 1.011-1.281l-.857-.515a5.4 5.4 0 0 1-.507.705L3.861 3.154a5.3 5.3 0 0 1 .698-.498M2.051 6.263l-.99-.145c-.154 1.06-.013 2.152.371 3.2l.94-.345c-.336-.911-.449-1.836-.32-2.71M3.26 10.657l-.818.575a9.69 9.69 0 0 0 2.292 2.298l.579-.816a8.7 8.7 0 0 1-2.052-2.057M7 13.619l-.352.936c1.049.393 2.144.54 3.209.383l-.147-.99c-.875.13-1.798.013-2.71-.33M13.946 9.742l.989.153c.164-1.062.014-2.153-.397-3.208l-.932.363c.357.914.474 1.827.34 2.692"
      fill="#208A3C"
    />
  </svg>
);

const AbstractBeanDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.421 3.543c2.865 2.866 3.656 6.772.76 9.668-2.897 2.897-6.953 2.003-9.692-.736C.75 9.736-.065 5.634 2.77 2.8s6.787-2.122 9.652.743"
      fill="#253627"
    />
    <path
      d="M12.421 3.543q.595.595 1.064 1.241l-.81.588a9.4 9.4 0 0 0-2.077-2.074l.584-.811q.646.464 1.24 1.056M8.923 2.384l.357-.935c-1.055-.402-2.144-.545-3.2-.384l.15.988c.865-.131 1.78-.018 2.693.33M4.56 2.656l-.511-.86A6.5 6.5 0 0 0 2.769 2.8a6.3 6.3 0 0 0-.995 1.283l.864.502q.215-.37.514-.726l8.97 8.97q-.361.305-.733.523l.507.862a6.4 6.4 0 0 0 1.284-1.003 6.7 6.7 0 0 0 1.011-1.281l-.857-.515a5.4 5.4 0 0 1-.507.705L3.861 3.154a5.3 5.3 0 0 1 .698-.498M2.051 6.263l-.99-.145c-.154 1.06-.013 2.152.371 3.2l.94-.345c-.336-.911-.449-1.836-.32-2.71M3.26 10.657l-.818.575a9.69 9.69 0 0 0 2.292 2.298l.579-.816a8.7 8.7 0 0 1-2.052-2.057M7 13.619l-.352.936c1.049.393 2.144.54 3.209.383l-.147-.99c-.875.13-1.798.013-2.71-.33M13.946 9.742l.989.153c.164-1.062.014-2.153-.397-3.208l-.932.363c.357.914.474 1.827.34 2.692"
      fill="#57965C"
    />
  </svg>
);

export const AbstractBean: React.FC<AbstractBeanProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AbstractBeanLight : AbstractBeanDark;

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
