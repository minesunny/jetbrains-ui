import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GraphLayoutProps = IconProps;

const GraphLayoutLight: FC<SvgProps> = ({
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
      d="M6 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.5v1.5H5a1 1 0 0 0-1 1V10H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H5V8.5h6V10h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2V8.5a1 1 0 0 0-1-1H8.5V6H10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 1h4v3H6zm0 12v-3H2v3zm8 0v-3h-4v3z"
      fill="#6C707E"
    />
  </svg>
);

const GraphLayoutDark: FC<SvgProps> = ({
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
      d="M6 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.5v1.5H5a1 1 0 0 0-1 1V10H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H5V8.5h6V10h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2V8.5a1 1 0 0 0-1-1H8.5V6H10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 1h4v3H6zm0 12v-3H2v3zm8 0v-3h-4v3z"
      fill="#CED0D6"
    />
  </svg>
);

export const GraphLayout: FC<GraphLayoutProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GraphLayoutLight : GraphLayoutDark;

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
