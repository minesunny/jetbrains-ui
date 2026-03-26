import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AccessPublicProps = IconProps;

const AccessPublicLight: FC<SvgProps> = ({
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
    <path fill="#F2FCF3" d="M6 8H10V11H6z" />
    <path
      d="M9.5 7V6a1.5 1.5 0 0 1 3 0v1.5M6 7.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5"
      stroke="#208A3C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AccessPublicDark: FC<SvgProps> = ({
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
    <path fill="#253627" d="M6 8H10V11H6z" />
    <path
      d="M9.5 7V6a1.5 1.5 0 0 1 3 0v1.5M6 7.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AccessPublic: FC<AccessPublicProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AccessPublicLight : AccessPublicDark;

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
