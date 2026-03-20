import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointExceptionDisabledProps = IconProps;

const BreakpointExceptionDisabledLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.016 7.979c.237.275.343.64.29 1l-.29 1.955 3.8-4.48H7.931a1.25 1.25 0 0 1-1.237-1.433l.29-1.955-3.8 4.48h2.885c.364 0 .71.158.947.433m-5.471-.433L7.33.725 7.402.64l.232-.273.17-.2c.299-.353.888-.103.822.347l-.046.31-.05.335-.015.102-.399 2.693-.185 1.25h4.603c.392 0 .608.44.36.734l-.36.424-.075.088-.004.004-5.786 6.821-.071.085-.232.273-.17.2c-.299.352-.888.103-.822-.347l.046-.31.05-.335.015-.102.399-2.693.185-1.25H1.466c-.392 0-.609-.44-.36-.734l.36-.424.075-.088z"
      fill="#E55765"
    />
  </svg>
);

const BreakpointExceptionDisabledDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.016 7.979c.237.275.343.64.29 1l-.29 1.955 3.8-4.48H7.931a1.25 1.25 0 0 1-1.237-1.433l.29-1.955-3.8 4.48h2.885c.364 0 .71.158.947.433m-5.471-.433L7.33.725 7.402.64l.232-.273.17-.2c.299-.353.888-.103.822.347l-.046.31-.05.335-.015.102-.399 2.693-.185 1.25h4.603c.392 0 .608.44.36.734l-.36.424-.075.088-.004.004-5.786 6.821-.071.085-.232.273-.17.2c-.299.352-.888.103-.822-.347l.046-.31.05-.335.015-.102.399-2.693.185-1.25H1.466c-.392 0-.609-.44-.36-.734l.36-.424.075-.088z"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointExceptionDisabled: FC<
  BreakpointExceptionDisabledProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointExceptionDisabledLight
      : BreakpointExceptionDisabledDark;

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
