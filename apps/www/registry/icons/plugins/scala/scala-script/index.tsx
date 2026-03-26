import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ScalaScriptProps = IconProps;

const ScalaScriptLight: React.FC<SvgProps> = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB3B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.732c.17.294.268.636.268 1v8a1 1 0 0 0 1 1h3v1H6a2 2 0 0 1-2-2V5H1.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h7.5A2.5 2.5 0 0 1 13 4.5v3.743l-1 .1V4.5A1.5 1.5 0 0 0 10.5 3M2 4a1 1 0 0 1 2 0z"
      fill="#6C707E"
    />
  </svg>
);

const ScalaScriptDark: React.FC<SvgProps> = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.732c.17.294.268.636.268 1v8a1 1 0 0 0 1 1h3v1H6a2 2 0 0 1-2-2V5H1.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h7.5A2.5 2.5 0 0 1 13 4.5v3.743l-1 .1V4.5A1.5 1.5 0 0 0 10.5 3M2 4a1 1 0 0 1 2 0z"
      fill="#CED0D6"
    />
  </svg>
);

export const ScalaScript: React.FC<ScalaScriptProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScalaScriptLight : ScalaScriptDark;

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
