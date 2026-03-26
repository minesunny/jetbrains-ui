import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AutoReloadProps = IconProps;

const AutoReloadLight: React.FC<SvgProps> = ({
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
      d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 0 0 .707-.707L13 12.293z"
      fill="#4682FA"
    />
    <path
      d="M8 3a5 5 0 0 0-5 5v.293l1.146-1.146a.5.5 0 0 1 .708.707L2.5 10.207.146 7.854a.5.5 0 0 1 .708-.707L2 8.293V8a6 6 0 0 1 9.273-5.03.5.5 0 1 1-.546.838A4.97 4.97 0 0 0 8 3M8 13a4.97 4.97 0 0 1-2.727-.808.5.5 0 1 0-.546.837 5.97 5.97 0 0 0 3.527.966A4.5 4.5 0 0 1 8.027 13zM12.703 8.004a4.6 4.6 0 0 0-1.623.225.5.5 0 0 1 .066-.083L13.5 5.793l2.354 2.353a.5.5 0 0 1-.707.707L14 7.707V8q0 .128-.005.254A4.5 4.5 0 0 0 13 8.027v-.32z"
      fill="#6C707E"
    />
  </svg>
);

const AutoReloadDark: React.FC<SvgProps> = ({
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
      d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .146.354l1.415 1.414a.5.5 0 0 0 .707-.707L13 12.293z"
      fill="#548AF7"
    />
    <path
      d="M8 3a5 5 0 0 0-5 5v.293l1.146-1.146a.5.5 0 0 1 .708.707L2.5 10.207.146 7.854a.5.5 0 0 1 .708-.707L2 8.293V8a6 6 0 0 1 9.273-5.03.5.5 0 1 1-.546.838A4.97 4.97 0 0 0 8 3M8 13a4.97 4.97 0 0 1-2.727-.808.5.5 0 1 0-.546.837 5.97 5.97 0 0 0 3.527.966A4.5 4.5 0 0 1 8.027 13zM12.703 8.004a4.6 4.6 0 0 0-1.623.225.5.5 0 0 1 .066-.083L13.5 5.793l2.354 2.353a.5.5 0 0 1-.707.707L14 7.707V8q0 .128-.005.254A4.5 4.5 0 0 0 13 8.027v-.32z"
      fill="#CED0D6"
    />
  </svg>
);

export const AutoReload: React.FC<AutoReloadProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AutoReloadLight : AutoReloadDark;

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
