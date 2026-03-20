import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ScriptingScriptProps = IconProps;

const ScriptingScriptLight: FC<SvgProps> = ({
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
      d="M7.5 13.5H6m0 0h3m-3 0A1.5 1.5 0 0 1 4.5 12V4.5m0 0V4A1.5 1.5 0 0 0 3 2.5m1.5 2h-3V4A1.5 1.5 0 0 1 3 2.5m0 0h7.5a2 2 0 0 1 2 2V8"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path
      d="M14 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5M13.5 14a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm1 .5v5h4v-5z"
      fill="#3574F0"
    />
  </svg>
);

const ScriptingScriptDark: FC<SvgProps> = ({
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
      d="M7.5 13.5H6m0 0h3m-3 0A1.5 1.5 0 0 1 4.5 12V4.5m0 0V4A1.5 1.5 0 0 0 3 2.5m1.5 2h-3V4A1.5 1.5 0 0 1 3 2.5m0 0h7.5a2 2 0 0 1 2 2V8"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path
      d="M14 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5M13.5 14a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm1 .5v5h4v-5z"
      fill="#548AF7"
    />
  </svg>
);

export const ScriptingScript: FC<ScriptingScriptProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ScriptingScriptLight : ScriptingScriptDark;

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
