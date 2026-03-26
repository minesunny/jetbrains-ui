import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MesonPluginLogoProps = IconProps;

const MesonPluginLogoLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M32.222 4C14.87 13.903 4.1 32.458 4 52.612c18.156 10.004 39.473 9.662 55.994.104q.004-.072.006-.143C59.977 32.528 49.39 14.013 32.222 4m9.346 21.458c2.573 1.767 2.19 6.02 1.776 8.934-.527 3.209-3.57 8.485-7.524 11.928a4.6 4.6 0 0 1 .803 2.629c-2.45 1.252-4.881-.16-7.822-2.706s-6.113-7.647-7.166-12.889a4.2 4.2 0 0 1-2.71-.633c.215-2.94 3.302-4.687 6.037-5.717 2.736-1.031 9.784-1.379 14.753.407a4.26 4.26 0 0 1 1.853-1.954"
      fill="#39207C"
    />
  </svg>
);

const MesonPluginLogoDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M32.222 4C14.87 13.903 4.1 32.458 4 52.612c18.156 10.004 39.473 9.662 55.994.104q.004-.072.006-.143C59.977 32.528 49.39 14.013 32.222 4m9.346 21.458c2.573 1.767 2.19 6.02 1.776 8.934-.527 3.209-3.57 8.485-7.524 11.928a4.6 4.6 0 0 1 .803 2.629c-2.45 1.252-4.881-.16-7.822-2.706s-6.113-7.647-7.166-12.889a4.2 4.2 0 0 1-2.71-.633c.215-2.94 3.302-4.687 6.037-5.717 2.736-1.031 9.784-1.379 14.753.407a4.26 4.26 0 0 1 1.853-1.954"
      fill="#fff"
    />
  </svg>
);

export const MesonPluginLogo: React.FC<MesonPluginLogoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MesonPluginLogoLight : MesonPluginLogoDark;

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
