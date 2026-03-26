import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type HashClusterProps = IconProps;

const HashClusterLight: FC<SvgProps> = ({
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
    <path d="M3.5 9.5v-6h4v6z" stroke="#6C707E" strokeLinejoin="round" />
    <path d="M4 5.5h3M4 7.5h3" stroke="#6C707E" />
    <path
      d="M10 7.6h1v4.896h-.368q0-.846.288-1.476.294-.63.834-.966.546-.342 1.278-.342.66 0 1.17.282t.798.834q.288.546.288 1.314V16h-1.032v-3.744q0-.522-.186-.888a1.26 1.26 0 0 0-.522-.558 1.6 1.6 0 0 0-.798-.192q-.504 0-.888.222-.384.216-.6.618c-.14.268-.262.577-.262.917V16h-1z"
      fill="#3574F0"
    />
    <path
      d="M2 13V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.84a3.2 3.2 0 0 1 1 .48V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v-1H3a1 1 0 0 1-1-1"
      fill="#6C707E"
    />
  </svg>
);

const HashClusterDark: FC<SvgProps> = ({
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
    <path d="M3.5 9.5v-6h4v6z" stroke="#CED0D6" strokeLinejoin="round" />
    <path d="M4 5.5h3M4 7.5h3" stroke="#CED0D6" />
    <path
      d="M10 7.6h1v4.896h-.368q0-.846.288-1.476.294-.63.834-.966.546-.342 1.278-.342.66 0 1.17.282t.798.834q.288.546.288 1.314V16h-1.032v-3.744q0-.522-.186-.888a1.26 1.26 0 0 0-.522-.558 1.6 1.6 0 0 0-.798-.192q-.504 0-.888.222-.384.216-.6.618c-.14.268-.262.577-.262.917V16h-1z"
      fill="#548AF7"
    />
    <path
      d="M2 13V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.84a3.2 3.2 0 0 1 1 .48V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v-1H3a1 1 0 0 1-1-1"
      fill="#CED0D6"
    />
  </svg>
);

export const HashCluster: FC<HashClusterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HashClusterLight : HashClusterDark;

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
