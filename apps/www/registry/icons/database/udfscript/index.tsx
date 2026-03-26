import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type UDFScriptProps = IconProps;

const UDFScriptLight: FC<SvgProps> = ({
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
    <path d="M11 9h4.5v.945h-3.49V12H15v.945h-2.99V16H11z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.732c.17.294.268.636.268 1v8a1 1 0 0 0 1 1h4v1H6a2 2 0 0 1-2-2V5H1.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h7.5A2.5 2.5 0 0 1 13 4.5V8h-1V4.5A1.5 1.5 0 0 0 10.5 3M2 4a1 1 0 0 1 2 0z"
      fill="#6C707E"
    />
  </svg>
);

const UDFScriptDark: FC<SvgProps> = ({
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
    <path d="M11 9h4.5v.945h-3.49V12H15v.945h-2.99V16H11z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.732c.17.294.268.636.268 1v8a1 1 0 0 0 1 1h4v1H6a2 2 0 0 1-2-2V5H1.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h7.5A2.5 2.5 0 0 1 13 4.5V8h-1V4.5A1.5 1.5 0 0 0 10.5 3M2 4a1 1 0 0 1 2 0z"
      fill="#CED0D6"
    />
  </svg>
);

export const UDFScript: FC<UDFScriptProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UDFScriptLight : UDFScriptDark;

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
