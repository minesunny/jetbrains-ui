import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WritersideProps = IconProps;

const WritersideLight: FC<SvgProps> = ({
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
    <rect x="2.5" y="3.5" width="10" height="10" rx="1.5" stroke="#6C707E" />
    <rect
      x="5"
      y="10.25"
      width="4"
      height=".5"
      rx=".25"
      stroke="#6C707E"
      strokeWidth=".5"
    />
    <path
      d="M4.5 1.5H12A2.5 2.5 0 0 1 14.5 4v7.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const WritersideDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" stroke="#CED0D6">
      <rect x="2.5" y="3.5" width="10" height="10" rx="1.5" />
      <rect x="5" y="10.25" width="4" height=".5" rx=".25" strokeWidth=".5" />
      <path d="M4.5 1.5H12A2.5 2.5 0 0 1 14.5 4v7.5" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Writerside: FC<WritersideProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WritersideLight : WritersideDark;

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
