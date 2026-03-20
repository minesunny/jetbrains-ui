import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type StylusProps = IconProps;

const StylusLight: React.FC<SvgProps> = ({
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
      d="M11.035 1q1.202 0 1.941.329.739.328.738.82 0 .603-.3 1.367-.302.766-.575 1.258-.11.11-.273.028Q12.4 4.72 12.4 4.5q.165-.383.165-1.094 0-.765-.41-1.258-.411-.492-1.121-.492-.93 0-1.504.574-.574.575-.574 1.613 0 .876.464 1.668.48.818 1.04 1.586.586.814 1.066 1.696.492.902.492 2.05 0 1.969-1.586 3.062Q8.847 15.001 6.277 15q-1.86 0-2.925-.601-1.067-.601-1.067-1.313 0-.218.164-.601a6 6 0 0 1 .438-.821q.282-.45.602-.875.327-.437.71-.71.165-.11.301.054.135.165.028.328-.329.329-.493.684t-.164.957q0 .985.657 1.612.656.63 1.695.63 1.421 0 2.215-.793t.793-1.942a4.2 4.2 0 0 0-.465-1.94q-.465-.9-1.012-1.751-.544-.84-1.012-1.723a3.9 3.9 0 0 1-.464-1.86q0-1.42 1.203-2.378Q8.682 1.002 11.035 1"
      fill="#9CB700"
    />
  </svg>
);

const StylusDark: React.FC<SvgProps> = ({
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
      d="M11.035 1q1.202 0 1.941.329.739.328.738.82 0 .603-.3 1.367-.302.766-.575 1.258-.11.11-.273.028Q12.4 4.72 12.4 4.5q.165-.383.165-1.094 0-.765-.41-1.258-.411-.492-1.121-.492-.93 0-1.504.574-.574.575-.574 1.613 0 .876.464 1.668.48.818 1.04 1.586.586.814 1.066 1.696.492.902.492 2.05 0 1.969-1.586 3.062Q8.847 15.001 6.277 15q-1.86 0-2.925-.601-1.067-.601-1.067-1.313 0-.218.164-.601a6 6 0 0 1 .438-.821q.282-.45.602-.875.327-.437.71-.71.165-.11.301.054.135.165.028.328-.329.329-.493.684t-.164.957q0 .985.657 1.612.656.63 1.695.63 1.421 0 2.215-.793t.793-1.942a4.2 4.2 0 0 0-.465-1.94q-.465-.9-1.012-1.751-.544-.84-1.012-1.723a3.9 3.9 0 0 1-.464-1.86q0-1.42 1.203-2.378Q8.682 1.002 11.035 1"
      fill="#B3D107"
    />
  </svg>
);

export const Stylus: React.FC<StylusProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StylusLight : StylusDark;

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
