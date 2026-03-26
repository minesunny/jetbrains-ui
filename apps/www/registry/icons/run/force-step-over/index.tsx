import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ForceStepOverProps = IconProps;

const ForceStepOverLight: FC<SvgProps> = ({
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
    <rect x="2" y="13" width="12" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.48 4.728a.5.5 0 0 1 .502.498L14 9.47l.002.5-.5.002-4.243.017a.5.5 0 1 1-.004-1l1.11-.004-2.742-2.312-2.775 2.686a.5.5 0 0 1-.696-.719l3.1-3 .325-.314.345.291 3.938 3.32q.024.02.043.041l1.095-.004-.005-1.195L7.516 2.79 2.854 7.452a.5.5 0 0 1-.707-.707l5-5 .337-.337.353.32 5.15 4.693-.005-1.19a.5.5 0 0 1 .498-.503"
      fill="#DB3B4B"
    />
  </svg>
);

const ForceStepOverDark: FC<SvgProps> = ({
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
    <rect x="2" y="13" width="12" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.48 4.728a.5.5 0 0 1 .502.498L14 9.47l.002.5-.5.002-4.243.017a.5.5 0 1 1-.004-1l1.11-.004-2.742-2.312-2.775 2.686a.5.5 0 0 1-.696-.719l3.1-3 .325-.314.345.291 3.938 3.32q.024.02.043.041l1.095-.004-.005-1.195L7.516 2.79 2.854 7.452a.5.5 0 0 1-.707-.707l5-5 .337-.337.353.32 5.15 4.693-.005-1.19a.5.5 0 0 1 .498-.503"
      fill="#DB5C5C"
    />
  </svg>
);

export const ForceStepOver: FC<ForceStepOverProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ForceStepOverLight : ForceStepOverDark;

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
