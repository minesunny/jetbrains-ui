import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DenodoProps = IconProps;

const DenodoLight: FC<SvgProps> = ({
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
      d="M9.5 1h-3v3h3zM9.5 12h-3v3h3zM14.812 5.799l-1.5-2.598-2.598 1.5 1.5 2.598zM5.286 11.299l-1.5-2.598-2.598 1.5 1.5 2.598zM2.688 3.201l-1.5 2.598 2.598 1.5 1.5-2.598zM12.214 8.701l-1.5 2.598 2.598 1.5 1.5-2.598z"
      fill="#F05049"
    />
    <path d="M6.5 6.5h3v3h-3z" fill="#000" />
  </svg>
);

const DenodoDark: FC<SvgProps> = ({
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
      d="M9.5 1h-3v3h3zM9.5 12h-3v3h3zM14.812 5.799l-1.5-2.598-2.598 1.5 1.5 2.598zM5.286 11.299l-1.5-2.598-2.598 1.5 1.5 2.598zM2.688 3.201l-1.5 2.598 2.598 1.5 1.5-2.598zM12.214 8.701l-1.5 2.598 2.598 1.5 1.5-2.598z"
      fill="#EF5049"
    />
    <path d="M6.5 6.5h3v3h-3z" fill="#fff" />
  </svg>
);

export const Denodo: FC<DenodoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DenodoLight : DenodoDark;

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
