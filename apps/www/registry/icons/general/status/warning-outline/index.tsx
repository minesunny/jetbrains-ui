import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WarningOutlineProps = IconProps;

const WarningOutlineLight: FC<SvgProps> = ({
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
      d="m7.173 2.482-5.027 8.875A1.1 1.1 0 0 0 3.103 13h9.793a1.1 1.1 0 0 0 .957-1.643L8.826 2.482a.95.95 0 0 0-1.653 0m-5.897 8.381L6.303 1.99C7.05.67 8.949.67 9.696 1.989l5.027 8.874c.793 1.4-.218 3.137-1.827 3.137H3.103c-1.609 0-2.62-1.736-1.827-3.137"
      fill="#6C707E"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#6C707E"
    />
  </svg>
);

const WarningOutlineDark: FC<SvgProps> = ({
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
      d="m7.173 2.482-5.027 8.875A1.1 1.1 0 0 0 3.103 13h9.793a1.1 1.1 0 0 0 .957-1.643L8.826 2.482a.95.95 0 0 0-1.653 0m-5.897 8.381L6.303 1.99C7.05.67 8.949.67 9.696 1.989l5.027 8.874c.793 1.4-.218 3.137-1.827 3.137H3.103c-1.609 0-2.62-1.736-1.827-3.137"
      fill="#CED0D6"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#CED0D6"
    />
  </svg>
);

export const WarningOutline: FC<WarningOutlineProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? WarningOutlineLight : WarningOutlineDark;

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
