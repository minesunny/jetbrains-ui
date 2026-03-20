import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JsDocClosureProps = IconProps;

const JsDocClosureLight: FC<SvgProps> = ({
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
    <path d="M9 12a3 3 0 1 0 3-3v3z" fill="#55A76A" />
    <path d="M4 9a3 3 0 1 0 3 3H4z" fill="#FFAF0F" />
    <path d="M12 7a3 3 0 1 0-3-3h3z" fill="#E55765" />
    <path d="M7 4a3 3 0 1 0-3 3V4z" fill="#4682FA" />
  </svg>
);

const JsDocClosureDark: FC<SvgProps> = ({
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
    <path d="M9 12a3 3 0 1 0 3-3v3z" fill="#57965C" />
    <path d="M4 9a3 3 0 1 0 3 3H4z" fill="#F2C55C" />
    <path d="M12 7a3 3 0 1 0-3-3h3z" fill="#DB5C5C" />
    <path d="M7 4a3 3 0 1 0-3 3V4z" fill="#548AF7" />
  </svg>
);

export const JsDocClosure: FC<JsDocClosureProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JsDocClosureLight : JsDocClosureDark;

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
