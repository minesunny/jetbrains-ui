import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ImplementedMethodProps = IconProps;

const ImplementedMethodLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path d="M5.5 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" fill="#F2FCF3" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5H4V4h3v1H6v4h1v1H4V9h1z"
      fill="#208A3C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <path
      d="M5.5 1.5a5.5 5.5 0 0 1 5.208 3.726A1.5 1.5 0 0 0 10 6.5V7a4.5 4.5 0 1 0-1.578 3.422l.017.017a1.5 1.5 0 0 0-.391 1.437A5.5 5.5 0 1 1 5.5 1.5"
      fill="#208A3C"
    />
  </svg>
);

const ImplementedMethodDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path d="M5.5 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" fill="#253627" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5H4V4h3v1H6v4h1v1H4V9h1z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <path
      d="M5.5 1.5a5.5 5.5 0 0 1 5.208 3.726A1.5 1.5 0 0 0 10 6.5V7a4.5 4.5 0 1 0-1.578 3.422l.017.017a1.5 1.5 0 0 0-.391 1.437A5.5 5.5 0 1 1 5.5 1.5"
      fill="#57965C"
    />
  </svg>
);

export const ImplementedMethod: FC<ImplementedMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ImplementedMethodLight : ImplementedMethodDark;

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
