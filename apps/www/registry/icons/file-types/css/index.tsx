import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type CssProps = IconProps;

const CssLight: FC<SvgProps> = ({
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
    <path d="m7.992 15-5.051-1.4L1.815 1h12.37l-1.127 12.599z" fill="#4682FA" />
    <path
      d="m4.257 5.121-.14-1.545h7.757l-.28 3.128-.037.415-.388 4.33-3.17.876-.006.002-3.173-.879-.216-2.426h1.554l.11 1.232 1.725.465h.002l1.727-.466.18-2.004H4.534l-.138-1.545h5.64l.14-1.583z"
      fill="#fff"
    />
  </svg>
);

const CssDark: FC<SvgProps> = ({
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
    <path d="m7.992 15-5.051-1.4L1.815 1h12.37l-1.127 12.599z" fill="#548AF7" />
    <path
      d="m4.257 5.121-.14-1.545h7.757l-.28 3.128-.037.415-.388 4.33-3.17.876-.006.002-3.173-.879-.216-2.426h1.554l.11 1.232 1.725.465h.002l1.727-.466.18-2.004H4.534l-.138-1.545h5.64l.14-1.583z"
      fill="#fff"
    />
  </svg>
);

export const Css: FC<CssProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CssLight : CssDark;

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
