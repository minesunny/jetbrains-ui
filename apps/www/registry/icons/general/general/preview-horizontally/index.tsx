import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PreviewHorizontallyProps = IconProps;

const PreviewHorizontallyLight: FC<SvgProps> = ({
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
      d="M4 3h8a1 1 0 0 1 1 1v2H3V4a1 1 0 0 1 1-1M2 7v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3m1 0h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      fill="#6C707E"
    />
    <rect x="5" y="8.5" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="5" y="10.5" width="6" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const PreviewHorizontallyDark: FC<SvgProps> = ({
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
      d="M4 3h8a1 1 0 0 1 1 1v2H3V4a1 1 0 0 1 1-1M2 7v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3m1 0h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      fill="#CED0D6"
    />
    <rect x="5" y="8.5" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="5" y="10.5" width="6" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const PreviewHorizontally: FC<PreviewHorizontallyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PreviewHorizontallyLight : PreviewHorizontallyDark;

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
