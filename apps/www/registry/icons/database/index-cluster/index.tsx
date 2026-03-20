import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type IndexClusterProps = IconProps;

const IndexClusterLight: FC<SvgProps> = ({
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
      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v3h1v-3A2.5 2.5 0 0 0 12.5 1h-9A2.5 2.5 0 0 0 1 3.5v9A2.5 2.5 0 0 0 3.5 15h7v-1h-7A1.5 1.5 0 0 1 2 12.5z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h1.5a.5.5 0 0 1 .5.5V15h-1v-4h-1zM15.5 16h-4v-1h4z"
      fill="#3574F0"
    />
    <path d="M12.5 7.5H14V9h-1.5z" fill="#3574F0" />
  </svg>
);

const IndexClusterDark: FC<SvgProps> = ({
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
      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v3h1v-3A2.5 2.5 0 0 0 12.5 1h-9A2.5 2.5 0 0 0 1 3.5v9A2.5 2.5 0 0 0 3.5 15h7v-1h-7A1.5 1.5 0 0 1 2 12.5z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h1.5a.5.5 0 0 1 .5.5V15h-1v-4h-1zM15.5 16h-4v-1h4z"
      fill="#548AF7"
    />
    <path d="M12.5 7.5H14V9h-1.5z" fill="#548AF7" />
  </svg>
);

export const IndexCluster: FC<IndexClusterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IndexClusterLight : IndexClusterDark;

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
