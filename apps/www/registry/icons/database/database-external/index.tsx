import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DatabaseExternalProps = IconProps;

const DatabaseExternalLight: FC<SvgProps> = ({
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
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <path
      d="M2 12V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h-.5a1.5 1.5 0 0 0 0 3h.379l-2 2H4a2 2 0 0 1-2-2"
      fill="#EDF3FF"
    />
    <path
      d="M5.5 2a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1v5h1V4a2 2 0 0 0-2-2z"
      fill="#3574F0"
    />
    <path
      d="m10.879 13-1 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h-.5q-.264.001-.5.085V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"
      fill="#3574F0"
    />
  </svg>
);

const DatabaseExternalDark: FC<SvgProps> = ({
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
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <path
      d="M2 12V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h-.5a1.5 1.5 0 0 0 0 3h.379l-2 2H4a2 2 0 0 1-2-2"
      fill="#25324D"
    />
    <path
      d="M5.5 2a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1v5h1V4a2 2 0 0 0-2-2z"
      fill="#548AF7"
    />
    <path
      d="m10.879 13-1 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h-.5q-.264.001-.5.085V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"
      fill="#548AF7"
    />
  </svg>
);

export const DatabaseExternal: FC<DatabaseExternalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DatabaseExternalLight : DatabaseExternalDark;

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
