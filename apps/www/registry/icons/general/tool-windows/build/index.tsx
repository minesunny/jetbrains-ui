import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BuildProps = IconProps;

const BuildLight: FC<SvgProps> = ({
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
      d="M3.6 1.5h-2v3.2h2l.8-.4h1.2l1 .8h2.2l1.6-1.2c1.2 0 2 0 4 1.4-1.2-3.8-3.6-3.8-4.8-3.8h-3l-1 .4H4.4z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path
      d="M6 14.5h3.4V9.426a5 5 0 0 0-.404-1.97L8.8 7V5H6.6v2l-.196.457A5 5 0 0 0 6 9.427z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildDark: FC<SvgProps> = ({
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
      d="M3.6 1.5h-2v3.2h2l.8-.4h1.2l1 .8h2.2l1.6-1.2c1.2 0 2 0 4 1.4-1.2-3.8-3.6-3.8-4.8-3.8h-3l-1 .4H4.4z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path
      d="M6 14.5h3.4V9.426a5 5 0 0 0-.404-1.97L8.8 7V5H6.6v2l-.196.457A5 5 0 0 0 6 9.427z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
  </svg>
);

export const Build: FC<BuildProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BuildLight : BuildDark;

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
