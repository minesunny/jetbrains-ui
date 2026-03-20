import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AbstractExceptionProps = IconProps;

const AbstractExceptionLight: FC<SvgProps> = ({
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
    <path d="M12.95 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9" fill="#FFFAEB" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.914 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303A5.97 5.97 0 0 0 8.94 2.074l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.074 7.06l-.988-.155A6.97 6.97 0 0 1 3.05 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01A6.97 6.97 0 0 0 3.05 12.95a6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.074 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      fill="#C27D04"
    />
    <path d="M9 4.5 6 8h4l-3 3.5" stroke="#C27D04" strokeLinecap="round" />
  </svg>
);

const AbstractExceptionDark: FC<SvgProps> = ({
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
    <path d="M12.95 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9" fill="#3D3223" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.914 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303A5.97 5.97 0 0 0 8.94 2.074l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.074 7.06l-.988-.155A6.97 6.97 0 0 1 3.05 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01A6.97 6.97 0 0 0 3.05 12.95a6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.074 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      fill="#D6AE58"
    />
    <path d="M9 4.5 6 8h4l-3 3.5" stroke="#D6AE58" strokeLinecap="round" />
  </svg>
);

export const AbstractException: FC<AbstractExceptionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AbstractExceptionLight : AbstractExceptionDark;

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
