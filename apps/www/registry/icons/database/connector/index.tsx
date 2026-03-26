import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ConnectorProps = IconProps;

const ConnectorLight: FC<SvgProps> = ({
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
      d="M12 5V4a1 1 0 0 0-1-1H7a4 4 0 0 0-3.874 3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.126c.444 1.725 2.01 3 3.874 3h4a1 1 0 0 0 1-1v-1h3.5a.5.5 0 0 0 0-1H12V6h3.5a.5.5 0 0 0 0-1zm-1-1H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4zM3 7v2H1V7z"
      fill="#6C707E"
    />
  </svg>
);

const ConnectorDark: FC<SvgProps> = ({
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
      d="M12 5V4a1 1 0 0 0-1-1H7a4 4 0 0 0-3.874 3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.126c.444 1.725 2.01 3 3.874 3h4a1 1 0 0 0 1-1v-1h3.5a.5.5 0 0 0 0-1H12V6h3.5a.5.5 0 0 0 0-1zm-1-1H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4zM3 7v2H1V7z"
      fill="#CED0D6"
    />
  </svg>
);

export const Connector: FC<ConnectorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ConnectorLight : ConnectorDark;

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
