import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ViewBreakpointsProps = IconProps;

const ViewBreakpointsLight: FC<SvgProps> = ({
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
      d="M6.5 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.438 10.366a5 5 0 1 0-6.804-6.804 6 6 0 0 1 6.804 6.804"
      fill="#FFF7F7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.49 9.132a4 4 0 1 0-5.62-5.62 6 6 0 0 0-1.236.05 5 5 0 1 1 6.804 6.804 6 6 0 0 0 .051-1.234"
      fill="#DB3B4B"
    />
  </svg>
);

const ViewBreakpointsDark: FC<SvgProps> = ({
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
      d="M6.5 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.438 10.366a5 5 0 1 0-6.804-6.804 6 6 0 0 1 6.804 6.804"
      fill="#402929"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.49 9.132a4 4 0 1 0-5.62-5.62 6 6 0 0 0-1.236.05 5 5 0 1 1 6.804 6.804 6 6 0 0 0 .051-1.234"
      fill="#DB5C5C"
    />
  </svg>
);

export const ViewBreakpoints: FC<ViewBreakpointsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ViewBreakpointsLight : ViewBreakpointsDark;

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
