import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BazelErrorProps = IconProps;

const BazelErrorLight: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" fill="#76D275" />
    <path d="M8 11.5V15l-3.5-3.5V8z" fill="#00701A" />
    <circle cx="12.5" cy="12.5" r="3.5" fill="#E55765" />
    <path
      d="M12.5 10a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#fff"
    />
    <path
      d="M11.352 8.148q.073-.02.147-.036V8zM15 8V4.5L11.5 8v.112a4.5 4.5 0 0 1 3.021.367z"
      fill="#43A047"
    />
    <path
      d="M11.5 8 8 4.5 4.5 8 8 11.5l.148-.148a4.51 4.51 0 0 1 3.204-3.204z"
      fill="#43A047"
    />
  </svg>
);

const BazelErrorDark: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" fill="#76D275" />
    <path d="M8 11.5V15l-3.5-3.5V8z" fill="#00701A" />
    <circle cx="12.5" cy="12.5" r="3.5" fill="#DB5C5C" />
    <path
      d="M12.5 10a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#fff"
    />
    <path
      d="M11.352 8.148q.073-.02.147-.036V8zM15 8V4.5L11.5 8v.112a4.5 4.5 0 0 1 3.021.367z"
      fill="#43A047"
    />
    <path
      d="M11.5 8 8 4.5 4.5 8 8 11.5l.148-.148a4.51 4.51 0 0 1 3.204-3.204z"
      fill="#43A047"
    />
  </svg>
);

export const BazelError: React.FC<BazelErrorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BazelErrorLight : BazelErrorDark;

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
