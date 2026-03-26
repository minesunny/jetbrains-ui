import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LiquibasePluginLogoProps = IconProps;

const LiquibasePluginLogoLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M33.543 7.486c0-2.629-5.6-5.486-13.601-5.486-8 0-13.601 2.857-13.601 5.486s5.6 5.486 13.6 5.486 13.602-2.857 13.602-5.486M8.628 35.373c2.857-1.829 7.315-2.972 11.658-4 6.515-1.486 13.258-3.087 13.373-7.315v-3.772c-2.817 2.365-7.853 3.51-12.812 4.637l-.218.05-.248.056c-6.893 1.582-13.925 3.195-13.925 7.486 0 .915.8 1.943 2.172 2.858M20.055 22.8c-5.257 1.143-10.743 2.4-13.715 5.029v-.915c0-7.543 8.23-9.486 16.23-11.315 5.829-1.371 8.572-2.057 10.972-4v4.229c0 3.886-6.858 5.486-13.487 6.972M33.429 28.95q.057-.046.114-.094h-.114zM33.429 28.95c-2.662 2.163-7.11 3.291-11.603 4.43l-1.084.277c-3.543.8-7.086 1.714-9.715 2.972 2.286.8 5.372 1.371 8.8 1.371 7.887 0 13.602-2.858 13.602-5.486z"
      fill="#FF3D00"
    />
  </svg>
);

const LiquibasePluginLogoDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M33.543 7.486c0-2.629-5.6-5.486-13.601-5.486-8 0-13.601 2.857-13.601 5.486s5.6 5.486 13.6 5.486 13.602-2.857 13.602-5.486M8.628 35.373c2.857-1.829 7.315-2.972 11.658-4 6.515-1.486 13.258-3.087 13.373-7.315v-3.772c-2.817 2.365-7.853 3.51-12.812 4.637l-.218.05-.248.056c-6.893 1.582-13.925 3.195-13.925 7.486 0 .915.8 1.943 2.172 2.858M20.055 22.8c-5.257 1.143-10.743 2.4-13.715 5.029v-.915c0-7.543 8.23-9.486 16.23-11.315 5.829-1.371 8.572-2.057 10.972-4v4.229c0 3.886-6.858 5.486-13.487 6.972M33.429 28.95q.057-.046.114-.094h-.114zM33.429 28.95c-2.662 2.163-7.11 3.291-11.603 4.43l-1.084.277c-3.543.8-7.086 1.714-9.715 2.972 2.286.8 5.372 1.371 8.8 1.371 7.887 0 13.602-2.858 13.602-5.486z"
      fill="#FF3D00"
    />
  </svg>
);

export const LiquibasePluginLogo: React.FC<LiquibasePluginLogoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? LiquibasePluginLogoLight : LiquibasePluginLogoDark;

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
