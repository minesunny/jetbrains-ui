import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InlayRenameInNoCodeFilesProps = IconProps;

const InlayRenameInNoCodeFilesLight: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <rect x="1" y="5" width="10" height="1.5" rx=".75" fill="#818594" />
    <rect x="1" y="9" width="6" height="1.5" rx=".75" fill="#818594" />
    <rect x="1" y="1" width="10" height="1.5" rx=".75" fill="#818594" />
  </svg>
);

const InlayRenameInNoCodeFilesDark: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <rect x="1" y="5" width="10" height="1.5" rx=".75" fill="#9DA0A8" />
    <rect x="1" y="9" width="6" height="1.5" rx=".75" fill="#9DA0A8" />
    <rect x="1" y="1" width="10" height="1.5" rx=".75" fill="#9DA0A8" />
  </svg>
);

export const InlayRenameInNoCodeFiles: FC<InlayRenameInNoCodeFilesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? InlayRenameInNoCodeFilesLight
      : InlayRenameInNoCodeFilesDark;

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
