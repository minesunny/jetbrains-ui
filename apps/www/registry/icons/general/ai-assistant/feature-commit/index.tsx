import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FeatureCommitProps = IconProps;

const FeatureCommitLight: FC<SvgProps> = ({
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
    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.041 8.5a3 3 0 0 0 5.918 0H15.5a.5.5 0 0 0 0-1h-4.541a3 3 0 0 0-5.918 0H.5a.5.5 0 0 0 0 1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#3574F0"
    />
  </svg>
);

const FeatureCommitDark: FC<SvgProps> = ({
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
    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.041 8.5a3 3 0 0 0 5.918 0H15.5a.5.5 0 0 0 0-1h-4.541a3 3 0 0 0-5.918 0H.5a.5.5 0 0 0 0 1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#548AF7"
    />
  </svg>
);

export const FeatureCommit: FC<FeatureCommitProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FeatureCommitLight : FeatureCommitDark;

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
