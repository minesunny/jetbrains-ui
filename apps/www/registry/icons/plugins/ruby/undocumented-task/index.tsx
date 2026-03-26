import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type UndocumentedTaskProps = IconProps;

const UndocumentedTaskLight: React.FC<SvgProps> = ({
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
      d="M13 5a2 2 0 1 0-1.723-.984L7.5 7.793 5.914 6.207a2 2 0 0 0-2.828 0l-1.94 1.94a.5.5 0 1 0 .708.707L3 7.707 4.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L5 9.707 6.293 11l-1.147 1.146a.5.5 0 0 0 .708.708L7 11.707 8.293 13l-1.147 1.146a.5.5 0 0 0 .708.708L9 13.707v-1.414L3.707 7l.086-.086a1 1 0 0 1 1.414 0l3.879 3.879q.104.105.17.227a2 2 0 0 1 .713-.734 2 2 0 0 0-.176-.2L8.207 8.5l3.777-3.777C12.282 4.9 12.629 5 13 5m0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#DB3B4B"
    />
    <path fill="#EBECF0" d="M11 12H15V15H11z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#6C707E"
    />
  </svg>
);

const UndocumentedTaskDark: React.FC<SvgProps> = ({
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
      d="M13 5a2 2 0 1 0-1.723-.984L7.5 7.793 5.914 6.207a2 2 0 0 0-2.828 0l-1.94 1.94a.5.5 0 1 0 .708.707L3 7.707 4.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L5 9.707 6.293 11l-1.147 1.146a.5.5 0 0 0 .708.708L7 11.707 8.293 13l-1.147 1.146a.5.5 0 0 0 .708.708L9 13.707v-1.414L3.707 7l.086-.086a1 1 0 0 1 1.414 0l3.879 3.879q.104.105.17.227a2 2 0 0 1 .713-.734 2 2 0 0 0-.176-.2L8.207 8.5l3.777-3.777C12.282 4.9 12.629 5 13 5m0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#DB5C5C"
    />
    <path fill="#43454A" d="M11 12H15V15H11z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#CED0D6"
    />
  </svg>
);

export const UndocumentedTask: React.FC<UndocumentedTaskProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? UndocumentedTaskLight : UndocumentedTaskDark;

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
