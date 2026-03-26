import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ReplaceProps = IconProps;

const ReplaceLight: FC<SvgProps> = ({
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
      d="M10.164 10.872a5.015 5.015 0 0 1-4.341.989l-.46-1.21A4 4 0 1 0 3.126 8H2.1a5 5 0 1 1 8.771 2.165l2.982 2.976a.5.5 0 0 1-.707.708z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.665 9H2.57L0 16h1.075l.595-1.78h2.965l.64 1.78h1.05zm-.44 1.33 1.11 3.055H1.95L3 10.33l.11-.43z"
      fill="#6C707E"
    />
  </svg>
);

const ReplaceDark: FC<SvgProps> = ({
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
      d="M10.164 10.872a5.015 5.015 0 0 1-4.341.989l-.46-1.21A4 4 0 1 0 3.126 8H2.1a5 5 0 1 1 8.771 2.165l2.982 2.976a.5.5 0 0 1-.707.708z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.665 9H2.57L0 16h1.075l.595-1.78h2.965l.64 1.78h1.05zm-.44 1.33 1.11 3.055H1.95L3 10.33l.11-.43z"
      fill="#CED0D6"
    />
  </svg>
);

export const Replace: FC<ReplaceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ReplaceLight : ReplaceDark;

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
