import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AngularJSMonochromeProps = IconProps;

const AngularJSMonochromeLight: FC<SvgProps> = ({
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
      d="M2.43 10.575 2 3.772l4.574-2.117zM6.353 9.025h3.294L8 5.016zM8 14.342l-3.137-1.78.639-1.545h4.996l.639 1.546zM13.57 10.575 14 3.772 9.426 1.654z"
      fill="#0F0F11"
    />
  </svg>
);

const AngularJSMonochromeDark: FC<SvgProps> = ({
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
      d="M2.43 10.575 2 3.772l4.574-2.117zM6.353 9.025h3.294L8 5.016zM8 14.342l-3.137-1.78.639-1.545h4.996l.639 1.546zM13.57 10.575 14 3.772 9.426 1.654z"
      fill="#fff"
    />
  </svg>
);

export const AngularJSMonochrome: FC<AngularJSMonochromeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AngularJSMonochromeLight : AngularJSMonochromeDark;

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
