import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FunctionExternalProps = IconProps;

const FunctionExternalLight: FC<SvgProps> = ({
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
      d="M14.937 8.941Q15 8.48 15 8a7 7 0 1 0-6.059 6.937L11.88 12H11.5a1.5 1.5 0 0 1 0-3h3.379z"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 5v6h1V9.04h2.495v-1H7.5V6h3V5z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <path
      d="M10.361 13.518A6 6 0 1 1 13.917 9h.962l.058-.059Q15 8.48 15 8a7 7 0 1 0-6.059 6.937z"
      fill="#3574F0"
    />
  </svg>
);

const FunctionExternalDark: FC<SvgProps> = ({
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
      d="M14.937 8.941Q15 8.48 15 8a7 7 0 1 0-6.059 6.937L11.88 12H11.5a1.5 1.5 0 0 1 0-3h3.379z"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 5v6h1V9.04h2.495v-1H7.5V6h3V5z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <path
      d="M10.361 13.518A6 6 0 1 1 13.917 9h.962l.058-.059Q15 8.48 15 8a7 7 0 1 0-6.059 6.937z"
      fill="#548AF7"
    />
  </svg>
);

export const FunctionExternal: FC<FunctionExternalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FunctionExternalLight : FunctionExternalDark;

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
