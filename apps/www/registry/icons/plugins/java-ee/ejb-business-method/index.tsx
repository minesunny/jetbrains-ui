import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EjbBusinessMethodProps = IconProps;

const EjbBusinessMethodLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M13.004 14.982a2.9 2.9 0 0 1-.936-.244A2.13 2.13 0 0 1 11.19 14a2 2 0 0 1-.319-1.095h1.226q0 .308.159.545.164.236.453.371.29.13.666.13.363 0 .637-.115a1 1 0 0 0 .425-.338q.15-.217.15-.502a.9.9 0 0 0-.218-.608.9.9 0 0 0-.57-.318l-1.157-.193a2 2 0 0 1-.854-.348 1.8 1.8 0 0 1-.56-.66 1.96 1.96 0 0 1-.193-.87q0-.569.294-1.022a2 2 0 0 1 .82-.71 2.6 2.6 0 0 1 .855-.237V7h.999v1.076q.297.063.56.187.53.246.824.69.3.444.304 1.013h-1.225a.8.8 0 0 0-.14-.468.9.9 0 0 0-.386-.323 1.36 1.36 0 0 0-.574-.116q-.323 0-.575.111a.9.9 0 0 0-.39.309.8.8 0 0 0-.136.463q0 .308.198.536.202.221.526.28l1.13.183a2.02 2.02 0 0 1 1.712 1.992q0 .59-.313 1.062a2.1 2.1 0 0 1-.874.738q-.3.141-.642.207V16h-.998z"
      fill="#6C707E"
    />
    <path
      d="M14.71 6h-2.706v1.244a3 3 0 0 0-.288.123l-.003.001c-.5.244-.919.597-1.222 1.065A2.84 2.84 0 0 0 10.035 10c0 .456.094.896.294 1.307l.005.009q.161.322.393.588h-.864l.008 1.008c.005.588.16 1.144.483 1.637l.006.01.019.027A7 7 0 1 1 14.71 6"
      fill="#FFF7F7"
    />
    <path
      d="M10.379 14.586A7 7 0 1 1 14.71 6H13.66a6 6 0 1 0-3.692 7.67q.116.464.387.878l.006.01z"
      fill="#DB3B4B"
    />
  </svg>
);

const EjbBusinessMethodDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M13.004 14.982a2.9 2.9 0 0 1-.936-.244A2.13 2.13 0 0 1 11.19 14a2 2 0 0 1-.319-1.095h1.226q0 .308.159.545.164.236.453.371.29.13.666.13.363 0 .637-.115a1 1 0 0 0 .425-.338q.15-.217.15-.502a.9.9 0 0 0-.218-.608.9.9 0 0 0-.57-.318l-1.157-.193a2 2 0 0 1-.854-.348 1.8 1.8 0 0 1-.56-.66 1.96 1.96 0 0 1-.193-.87q0-.569.294-1.022a2 2 0 0 1 .82-.71 2.6 2.6 0 0 1 .855-.237V7h.999v1.076q.297.063.56.187.53.246.824.69.3.444.304 1.013h-1.225a.8.8 0 0 0-.14-.468.9.9 0 0 0-.386-.323 1.36 1.36 0 0 0-.574-.116q-.323 0-.575.111a.9.9 0 0 0-.39.309.8.8 0 0 0-.136.463q0 .308.198.536.202.221.526.28l1.13.183a2.02 2.02 0 0 1 1.712 1.992q0 .59-.313 1.062a2.1 2.1 0 0 1-.874.738q-.3.141-.642.207V16h-.998z"
      fill="#CED0D6"
    />
    <path
      d="M14.71 6h-2.706v1.244a3 3 0 0 0-.288.123l-.003.001c-.5.244-.919.597-1.222 1.065A2.84 2.84 0 0 0 10.035 10c0 .456.094.896.294 1.307l.005.009q.161.322.393.588h-.864l.008 1.008c.005.588.16 1.144.483 1.637l.006.01.019.027A7 7 0 1 1 14.71 6"
      fill="#402929"
    />
    <path
      d="M10.379 14.586A7 7 0 1 1 14.71 6H13.66a6 6 0 1 0-3.692 7.67q.116.464.387.878l.006.01z"
      fill="#DB5C5C"
    />
  </svg>
);

export const EjbBusinessMethod: React.FC<EjbBusinessMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EjbBusinessMethodLight : EjbBusinessMethodDark;

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
