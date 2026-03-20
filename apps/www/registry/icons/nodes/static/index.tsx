import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StaticProps = IconProps;

const StaticLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF4EB" stroke="#E66D17" />
    <path
      d="M7.975 11.5q-.758 0-1.371-.242a2.4 2.4 0 0 1-.973-.672 1.64 1.64 0 0 1-.385-.986H6.31q.026.3.248.542.222.235.588.372t.816.137q.457 0 .803-.15.353-.15.542-.418.196-.267.196-.607a.92.92 0 0 0-.209-.614.9.9 0 0 0-.568-.32l-1.613-.294q-.77-.143-1.201-.62-.431-.484-.431-1.221 0-.53.3-.96.308-.438.855-.692Q7.185 4.5 7.89 4.5q.699 0 1.26.229.562.228.895.633t.36.901H9.34a.76.76 0 0 0-.216-.47 1.26 1.26 0 0 0-.509-.327 2.1 2.1 0 0 0-.718-.117q-.405 0-.719.137a1.17 1.17 0 0 0-.49.379.9.9 0 0 0-.17.535q0 .34.19.562t.555.287l1.652.294q.51.09.875.359.373.268.562.666.196.398.196.869 0 .587-.34 1.057-.333.471-.92.738a3.1 3.1 0 0 1-1.313.268"
      fill="#E66D17"
    />
  </svg>
);

const StaticDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#45322B" stroke="#C77D55" />
    <path
      d="M7.975 11.5q-.758 0-1.371-.242a2.4 2.4 0 0 1-.973-.672 1.64 1.64 0 0 1-.385-.986H6.31q.026.3.248.542.222.235.588.372t.816.137q.457 0 .803-.15.353-.15.542-.418.196-.267.196-.607a.92.92 0 0 0-.209-.614.9.9 0 0 0-.568-.32l-1.613-.294q-.77-.143-1.201-.62-.431-.484-.431-1.221 0-.53.3-.96.308-.438.855-.692Q7.185 4.5 7.89 4.5q.699 0 1.26.229.562.228.895.633t.36.901H9.34a.76.76 0 0 0-.216-.47 1.26 1.26 0 0 0-.509-.327 2.1 2.1 0 0 0-.718-.117q-.405 0-.719.137a1.17 1.17 0 0 0-.49.379.9.9 0 0 0-.17.535q0 .34.19.562t.555.287l1.652.294q.51.09.875.359.373.268.562.666.196.398.196.869 0 .587-.34 1.057-.333.471-.92.738a3.1 3.1 0 0 1-1.313.268"
      fill="#C77D55"
    />
  </svg>
);

export const Static: FC<StaticProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StaticLight : StaticDark;

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
