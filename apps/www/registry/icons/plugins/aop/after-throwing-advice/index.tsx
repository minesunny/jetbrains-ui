import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AfterThrowingAdviceProps = IconProps;

const AfterThrowingAdviceLight: React.FC<SvgProps> = ({
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
      d="M12.95 3.05c.76.76 1.31 1.653 1.647 2.603L7.919 14H8v1a7 7 0 1 1 4.95-11.95"
      fill="#FFF7F7"
    />
    <path d="m10 13 4-5-.5 3H16l-4 5 .5-3z" fill="#6C707E" />
    <path
      d="M11.001 10.148v-2.71c0-.82-.425-1.33-1.177-1.33-.804 0-1.33.573-1.33 1.482v3.164h-.988V7.438c0-.82-.431-1.33-1.177-1.33-.815 0-1.33.573-1.33 1.482v3.164H4V5.372h.962v.877c.32-.64.887-1.003 1.645-1.003.799 0 1.397.397 1.689 1.07.34-.669.958-1.07 1.77-1.07 1.15 0 1.934.825 1.934 2.113v1.54z"
      fill="#DB3B4B"
    />
    <path
      d="M1.07 9A7 7 0 0 0 8 15v-1h-.081a6 6 0 0 1-5.837-5z"
      fill="#6C707E"
    />
    <path
      d="m14.596 5.653-.76.95A6.002 6.002 0 0 0 2.082 7H1.07a7.002 7.002 0 0 1 13.526-1.347"
      fill="#DB3B4B"
    />
  </svg>
);

const AfterThrowingAdviceDark: React.FC<SvgProps> = ({
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
      d="M12.95 3.05c.76.76 1.31 1.653 1.647 2.603L7.919 14H8v1a7 7 0 1 1 4.95-11.95"
      fill="#402929"
    />
    <path d="m10 13 4-5-.5 3H16l-4 5 .5-3z" fill="#CED0D6" />
    <path
      d="M11.001 10.148v-2.71c0-.82-.425-1.33-1.177-1.33-.804 0-1.33.573-1.33 1.482v3.164h-.988V7.438c0-.82-.431-1.33-1.177-1.33-.815 0-1.33.573-1.33 1.482v3.164H4V5.372h.962v.877c.32-.64.887-1.003 1.645-1.003.799 0 1.397.397 1.689 1.07.34-.669.958-1.07 1.77-1.07 1.15 0 1.934.825 1.934 2.113v1.54z"
      fill="#DB5C5C"
    />
    <path
      d="M1.07 9A7 7 0 0 0 8 15v-1h-.081a6 6 0 0 1-5.837-5z"
      fill="#CED0D6"
    />
    <path
      d="m14.596 5.653-.76.95A6.002 6.002 0 0 0 2.082 7H1.07a7.002 7.002 0 0 1 13.526-1.347"
      fill="#DB5C5C"
    />
  </svg>
);

export const AfterThrowingAdvice: React.FC<AfterThrowingAdviceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AfterThrowingAdviceLight : AfterThrowingAdviceDark;

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
