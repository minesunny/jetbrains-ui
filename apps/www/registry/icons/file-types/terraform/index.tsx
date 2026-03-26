import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TerraformProps = IconProps;

const TerraformLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.4.5v4.735l4.1 2.368V2.868zm13.2 7.378L10.5 10.245V5.51L14.6 3.142zM10.05 5.51l-4.1-2.368v4.736l4.1 2.367zm0 9.99-4.1-2.368V8.397l4.1 2.368V15.5"
      fill="#7B42BC"
    />
  </svg>
);

const TerraformDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.4.5v4.735l4.1 2.368V2.868zm13.2 7.378L10.5 10.245V5.51L14.6 3.142zM10.05 5.51l-4.1-2.368v4.736l4.1 2.367zm0 9.99-4.1-2.368V8.397l4.1 2.368V15.5"
      fill="#7B42BC"
    />
  </svg>
);

export const Terraform: FC<TerraformProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TerraformLight : TerraformDark;

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
