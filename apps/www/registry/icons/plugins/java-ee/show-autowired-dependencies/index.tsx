import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShowAutowiredDependenciesProps = IconProps;

const ShowAutowiredDependenciesLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L13.293 12H7.5a.5.5 0 0 1 0-1h5.793l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
    <path
      d="M14.945 9.824c.305-2.16-.68-4.436-2.524-6.28C9.556.677 5.603-.035 2.77 2.8s-2.02 6.936.72 9.675c1.844 1.844 4.284 2.851 6.566 2.43a1.5 1.5 0 0 1 .384-1.466l.44-.439H7.5a1.5 1.5 0 0 1 0-3h3.379l-.44-.44a1.5 1.5 0 0 1 2.122-2.12z"
      fill="#FFF4EB"
    />
    <path
      d="M14.945 9.824c.305-2.16-.68-4.436-2.524-6.28C9.556.677 5.603-.035 2.77 2.8s-2.02 6.936.72 9.675c1.844 1.844 4.284 2.851 6.566 2.43a1.5 1.5 0 0 1 .087-1.044 4.9 4.9 0 0 1-1.748.1c-1.455-.172-2.955-.953-4.196-2.194-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684L9.26 10h1.417L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228q.022.197.03.395z"
      fill="#E66D17"
    />
  </svg>
);

const ShowAutowiredDependenciesDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L13.293 12H7.5a.5.5 0 0 1 0-1h5.793l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
    <path
      d="M14.945 9.824c.305-2.16-.68-4.436-2.524-6.28C9.556.677 5.603-.035 2.77 2.8s-2.02 6.936.72 9.675c1.844 1.844 4.284 2.851 6.566 2.43a1.5 1.5 0 0 1 .384-1.466l.44-.439H7.5a1.5 1.5 0 0 1 0-3h3.379l-.44-.44a1.5 1.5 0 0 1 2.122-2.12z"
      fill="#45322B"
    />
    <path
      d="M14.945 9.824c.305-2.16-.68-4.436-2.524-6.28C9.556.677 5.603-.035 2.77 2.8s-2.02 6.936.72 9.675c1.844 1.844 4.284 2.851 6.566 2.43a1.5 1.5 0 0 1 .087-1.044 4.9 4.9 0 0 1-1.748.1c-1.455-.172-2.955-.953-4.196-2.194-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684L9.26 10h1.417L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228q.022.197.03.395z"
      fill="#C77D55"
    />
  </svg>
);

export const ShowAutowiredDependencies: React.FC<
  ShowAutowiredDependenciesProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? ShowAutowiredDependenciesLight
      : ShowAutowiredDependenciesDark;

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
