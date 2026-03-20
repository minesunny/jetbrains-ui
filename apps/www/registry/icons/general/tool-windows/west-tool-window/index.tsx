import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WestToolWindowProps = IconProps;

const WestToolWindowLight: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 9.18a1 1 0 0 1-.804.98L4 12l1.84-9.196A1 1 0 0 1 6.82 2H13a1 1 0 0 1 1 1zm-1-5.473v4.294l-1.84-2.454zm-2.554 2.555 2.236 2.982-6.523 1.304zM12.293 3l-1.84 1.84L8 3zM5.452 9.841l1.304-6.524L9.74 5.554z"
      fill="#6C707E"
    />
    <path
      d="M1.361 12.767 3.998 12l-.765 2.638a.5.5 0 0 1-.832.216l-1.253-1.248a.503.503 0 0 1 .213-.84"
      fill="#6C707E"
    />
  </svg>
);

const WestToolWindowDark: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 9.18a1 1 0 0 1-.804.98L4 12l1.84-9.196A1 1 0 0 1 6.82 2H13a1 1 0 0 1 1 1zm-1-5.473v4.294l-1.84-2.454zm-2.554 2.555 2.236 2.982-6.523 1.304zM12.293 3l-1.84 1.84L8 3zM5.452 9.841l1.304-6.524L9.74 5.554z"
      fill="#CED0D6"
    />
    <path
      d="M1.361 12.767 3.998 12l-.765 2.638a.5.5 0 0 1-.832.216l-1.253-1.248a.503.503 0 0 1 .213-.84"
      fill="#CED0D6"
    />
  </svg>
);

export const WestToolWindow: FC<WestToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? WestToolWindowLight : WestToolWindowDark;

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
