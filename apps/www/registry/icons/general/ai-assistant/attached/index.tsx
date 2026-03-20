import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AttachedProps = IconProps;

const AttachedLight: FC<SvgProps> = ({
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
      d="m9.5 5.5-5.586 5.586a1.4 1.4 0 0 0-.414 1A1.41 1.41 0 0 0 4.914 13.5a1.4 1.4 0 0 0 1-.414l5.757-5.757a2.82 2.82 0 0 0 .828-2 2.82 2.82 0 0 0-.828-2 2.82 2.82 0 0 0-2-.828 2.82 2.82 0 0 0-2 .828L2.999 8.001"
      stroke="#6C707E"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

const AttachedDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="m9.5 5.5-5.586 5.586a1.4 1.4 0 0 0-.414 1A1.41 1.41 0 0 0 4.914 13.5a1.4 1.4 0 0 0 1-.414l5.757-5.757a2.82 2.82 0 0 0 .828-2 2.82 2.82 0 0 0-.828-2 2.82 2.82 0 0 0-2-.828 2.82 2.82 0 0 0-2 .828L2.999 8.001"
        stroke="#CED0D6"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Attached: FC<AttachedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AttachedLight : AttachedDark;

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
