import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type NextJSProps = IconProps;

const NextJSLight: FC<SvgProps> = ({
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
    <path d="M11 4.5a.5.5 0 0 0-1 0v4.396l.993 1.604H11z" fill="#000" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4.534 5.472a6 6 0 1 1 .875-.487L5.925 4.237A.5.5 0 0 0 5 4.5v7a.5.5 0 0 0 1 0V6.258z"
      fill="#000"
    />
  </svg>
);

const NextJSDark: FC<SvgProps> = ({
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
    <path d="M11 4.5a.5.5 0 0 0-1 0v4.396l.993 1.604H11z" fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4.534 5.472a6 6 0 1 1 .875-.487L5.925 4.237A.5.5 0 0 0 5 4.5v7a.5.5 0 0 0 1 0V6.258z"
      fill="#fff"
    />
  </svg>
);

export const NextJS: FC<NextJSProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NextJSLight : NextJSDark;

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
