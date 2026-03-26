import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AngularJSProps = IconProps;

const AngularJSLight: FC<SvgProps> = ({
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
    <path d="M2.43 10.575 2 3.772l4.574-2.117z" fill="url(#a)" />
    <path d="M2.43 10.575 2 3.772l4.574-2.117z" fill="url(#b)" />
    <path d="M6.353 9.025h3.294L8 5.016z" fill="url(#c)" />
    <path d="M6.353 9.025h3.294L8 5.016z" fill="url(#d)" />
    <path d="m8 14.342-3.137-1.78.639-1.545h4.996l.639 1.546z" fill="url(#e)" />
    <path d="m8 14.342-3.137-1.78.639-1.545h4.996l.639 1.546z" fill="url(#f)" />
    <path d="M13.57 10.575 14 3.772 9.426 1.654z" fill="url(#g)" />
    <path d="M13.57 10.575 14 3.772 9.426 1.654z" fill="url(#h)" />
    <defs>
      <linearGradient
        id="a"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="e"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="f"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="g"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="h"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const AngularJSDark: FC<SvgProps> = ({
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
    <path d="M2.43 10.575 2 3.772l4.574-2.117z" fill="url(#a)" />
    <path d="M2.43 10.575 2 3.772l4.574-2.117z" fill="url(#b)" />
    <path d="M6.353 9.025h3.294L8 5.016z" fill="url(#c)" />
    <path d="M6.353 9.025h3.294L8 5.016z" fill="url(#d)" />
    <path d="m8 14.342-3.137-1.78.639-1.545h4.996l.639 1.546z" fill="url(#e)" />
    <path d="m8 14.342-3.137-1.78.639-1.545h4.996l.639 1.546z" fill="url(#f)" />
    <path d="M13.57 10.575 14 3.772 9.426 1.654z" fill="url(#g)" />
    <path d="M13.57 10.575 14 3.772 9.426 1.654z" fill="url(#h)" />
    <defs>
      <linearGradient
        id="a"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="e"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="f"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="g"
        x1="14"
        y1="10.313"
        x2="8"
        y2="14.813"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#9225F2" />
        <stop offset=".989" stopColor="#F41049" />
      </linearGradient>
      <linearGradient
        id="h"
        x1="2"
        y1="1.655"
        x2="11.047"
        y2="10.703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F933C2" />
        <stop offset="1" stopColor="#F932BE" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const AngularJS: FC<AngularJSProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AngularJSLight : AngularJSDark;

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
