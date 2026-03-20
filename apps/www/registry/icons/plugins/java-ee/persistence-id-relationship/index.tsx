import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PersistenceIdRelationshipProps = IconProps;

const PersistenceIdRelationshipLight: React.FC<SvgProps> = ({
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
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
    <path
      d="M15 4.5c0 .604-.153 1.173-.423 1.669a3.5 3.5 0 0 0-4.154 1.662A3.502 3.502 0 0 1 11.5 1 3.5 3.5 0 0 1 15 4.5M4.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#FFF4EB"
    />
    <path
      d="M14 4.5a2.5 2.5 0 0 1-.5 1.5c.376 0 .738.06 1.077.169a3.5 3.5 0 1 0-4.154 1.662c.175-.322.4-.614.663-.865A2.5 2.5 0 1 1 14 4.5"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      fill="#E66D17"
    />
    <path
      d="M8.332 3.01Q8.168 3 8 3a5 5 0 0 0-4.99 5.332c.309-.145.641-.247.99-.297V8a4 4 0 0 1 4.035-4c.05-.349.152-.681.297-.99M7.668 12.99c.145-.309.247-.641.297-.99H8c.913 0 1.755-.306 2.428-.821.162.295.365.564.6.8a4.98 4.98 0 0 1-3.36 1.01"
      fill="#6C707E"
    />
  </svg>
);

const PersistenceIdRelationshipDark: React.FC<SvgProps> = ({
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
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
    <path
      d="M15 4.5c0 .604-.153 1.173-.423 1.669a3.5 3.5 0 0 0-4.154 1.662A3.502 3.502 0 0 1 11.5 1 3.5 3.5 0 0 1 15 4.5M4.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#45322B"
    />
    <path
      d="M14 4.5a2.5 2.5 0 0 1-.5 1.5c.376 0 .738.06 1.077.169a3.5 3.5 0 1 0-4.154 1.662c.175-.322.4-.614.663-.865A2.5 2.5 0 1 1 14 4.5"
      fill="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      fill="#C77D55"
    />
    <path
      d="M8.332 3.01Q8.168 3 8 3a5 5 0 0 0-4.99 5.332c.309-.145.641-.247.99-.297V8a4 4 0 0 1 4.035-4c.05-.349.152-.681.297-.99M7.668 12.99c.145-.309.247-.641.297-.99H8c.913 0 1.755-.306 2.428-.821.162.295.365.564.6.8a4.98 4.98 0 0 1-3.36 1.01"
      fill="#CED0D6"
    />
  </svg>
);

export const PersistenceIdRelationship: React.FC<
  PersistenceIdRelationshipProps
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
      ? PersistenceIdRelationshipLight
      : PersistenceIdRelationshipDark;

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
