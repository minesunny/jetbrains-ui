import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PreviewOnlyProps = IconProps;

const PreviewOnlyLight: FC<SvgProps> = ({
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
    <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="#6C707E" />
    <path
      d="m2.357 9.5 1.826-1.825a1 1 0 0 1 1.38-.033L12 13.5"
      stroke="#6C707E"
    />
    <circle cx="10" cy="6" r="1.5" stroke="#6C707E" />
  </svg>
);

const PreviewOnlyDark: FC<SvgProps> = ({
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
    <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="#CED0D6" />
    <path
      d="m2.357 9.5 1.826-1.825a1 1 0 0 1 1.38-.033L12 13.5"
      stroke="#CED0D6"
    />
    <circle cx="10" cy="6" r="1.5" stroke="#CED0D6" />
  </svg>
);

export const PreviewOnly: FC<PreviewOnlyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PreviewOnlyLight : PreviewOnlyDark;

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
