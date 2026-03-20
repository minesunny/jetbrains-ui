import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolwindowFlinkProps = IconProps;

const ToolwindowFlinkLight: FC<SvgProps> = ({
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
      d="M6 1h3v1H6zM6 3H5V2h1zM6 4V3h1v1zM5 5V4h1v1zM4 6V5h1v1zM3 7V6h1v1zM2 9V7h1v2zM2 13H1V9h1zM3 14H2v-1h1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 13v1H3v1h10v-1h1v-1h-1v-1h1v-1h1V9h-1V7h-1V6h-1V5h-1V3h-1V2H9v1h1v2h1v1h-1v1H9v2H6v1H5v1h1v-1h3V9h1V7h1V6h1v1h1v2h-2v1h2V9h1v2h-1v1h-1v-1h-2v1H9v-1H7v1h2v1zm1 0v-1h-1v1zm0 0v1h1v-1z"
      fill="#6C707E"
    />
  </svg>
);

const ToolwindowFlinkDark: FC<SvgProps> = ({
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
      d="M6 1h3v1H6zM6 3H5V2h1zM6 4V3h1v1zM5 5V4h1v1zM4 6V5h1v1zM3 7V6h1v1zM2 9V7h1v2zM2 13H1V9h1zM3 14H2v-1h1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 13v1H3v1h10v-1h1v-1h-1v-1h1v-1h1V9h-1V7h-1V6h-1V5h-1V3h-1V2H9v1h1v2h1v1h-1v1H9v2H6v1H5v1h1v-1h3V9h1V7h1V6h1v1h1v2h-2v1h2V9h1v2h-1v1h-1v-1h-2v1H9v-1H7v1h2v1zm1 0v-1h-1v1zm0 0v1h1v-1z"
      fill="#CED0D6"
    />
  </svg>
);

export const ToolwindowFlink: FC<ToolwindowFlinkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolwindowFlinkLight : ToolwindowFlinkDark;

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
