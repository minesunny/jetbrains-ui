import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PreviewVerticallyProps = IconProps;

const PreviewVerticallyLight: FC<SvgProps> = ({
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
      d="M7 3h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7zM6 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 11H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2z"
      fill="#6C707E"
    />
    <rect x="8" y="5" width="4" height="1" rx=".5" fill="#6C707E" />
    <rect x="8" y="7.5" width="4" height="1" rx=".5" fill="#6C707E" />
    <rect x="8" y="10" width="4" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const PreviewVerticallyDark: FC<SvgProps> = ({
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
      d="M7 3h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7zM6 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 11H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2z"
      fill="#CED0D6"
    />
    <rect x="8" y="5" width="4" height="1" rx=".5" fill="#CED0D6" />
    <rect x="8" y="7.5" width="4" height="1" rx=".5" fill="#CED0D6" />
    <rect x="8" y="10" width="4" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const PreviewVertically: FC<PreviewVerticallyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PreviewVerticallyLight : PreviewVerticallyDark;

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
