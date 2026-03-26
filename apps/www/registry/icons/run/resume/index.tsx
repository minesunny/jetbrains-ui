import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ResumeProps = IconProps;

const ResumeLight: FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="2.5"
      width="3"
      height="11"
      rx=".5"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
    <path
      d="M14.356 7.26a1 1 0 0 1 0 1.512L9.158 13.27a1 1 0 0 1-1.655-.756V3.516a1 1 0 0 1 1.655-.756z"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
  </svg>
);

const ResumeDark: FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="2.5"
      width="3"
      height="11"
      rx=".5"
      fill="#253627"
      stroke="#57965C"
    />
    <path
      d="M14.356 7.26a1 1 0 0 1 0 1.512L9.158 13.27a1 1 0 0 1-1.655-.756V3.516a1 1 0 0 1 1.655-.756z"
      fill="#253627"
      stroke="#57965C"
    />
  </svg>
);

export const Resume: FC<ResumeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ResumeLight : ResumeDark;

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
