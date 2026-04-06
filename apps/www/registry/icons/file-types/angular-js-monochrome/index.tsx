import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type AngularJsMonochromeProps = SvgProps;

const AngularJsMonochromeLight: FC<SvgProps> = ({
  size,
  className,
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
    <path
      d="M2.43 10.575 2 3.772l4.574-2.117zM6.353 9.025h3.294L8 5.016zM8 14.342l-3.137-1.78.639-1.545h4.996l.639 1.546zM13.57 10.575 14 3.772 9.426 1.654z"
      fill="#0F0F11"
    />
  </svg>
);

const AngularJsMonochromeDark: FC<SvgProps> = ({
  size,
  className,
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
    <path
      d="M2.43 10.575 2 3.772l4.574-2.117zM6.353 9.025h3.294L8 5.016zM8 14.342l-3.137-1.78.639-1.545h4.996l.639 1.546zM13.57 10.575 14 3.772 9.426 1.654z"
      fill="#fff"
    />
  </svg>
);

export const AngularJsMonochrome: FC<AngularJsMonochromeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AngularJsMonochromeLight : AngularJsMonochromeDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
