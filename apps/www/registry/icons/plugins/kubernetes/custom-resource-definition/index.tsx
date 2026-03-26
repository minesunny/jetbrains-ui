import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CustomResourceDefinitionProps = IconProps;

const CustomResourceDefinitionLight: React.FC<SvgProps> = ({
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
    <path d="M12 12h2v-1h-2zM12 14h2v-1h-2z" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      fill="#6C707E"
    />
    <path
      d="M5.5 2.5a2 2 0 1 1 4 0v1h3v3h1A2 2 0 0 1 15.437 8H11a2 2 0 0 0-2 2v3.5H2.5v-3h1a2 2 0 1 0 0-4h-1v-3h3z"
      fill="#EDF3FF"
    />
    <path
      d="M5 2.5a2.5 2.5 0 0 1 5 0V3h2.5a.5.5 0 0 1 .5.5V6h.5a2.5 2.5 0 0 1 2.45 2h-1.035A1.5 1.5 0 0 0 13.5 7h-1a.5.5 0 0 1-.5-.5V4H9.5a.5.5 0 0 1-.5-.5v-1a1.5 1.5 0 1 0-3 0v1a.5.5 0 0 1-.5.5H3v2h.5a2.5 2.5 0 0 1 0 5H3v2h6v1H2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 1 0 0-3h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H5z"
      fill="#3574F0"
    />
  </svg>
);

const CustomResourceDefinitionDark: React.FC<SvgProps> = ({
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
    <path d="M12 12h2v-1h-2zM12 14h2v-1h-2z" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      fill="#CED0D6"
    />
    <path
      d="M5.5 2.5a2 2 0 1 1 4 0v1h3v3h1A2 2 0 0 1 15.437 8H11a2 2 0 0 0-2 2v3.5H2.5v-3h1a2 2 0 1 0 0-4h-1v-3h3z"
      fill="#25324D"
    />
    <path
      d="M5 2.5a2.5 2.5 0 0 1 5 0V3h2.5a.5.5 0 0 1 .5.5V6h.5a2.5 2.5 0 0 1 2.45 2h-1.035A1.5 1.5 0 0 0 13.5 7h-1a.5.5 0 0 1-.5-.5V4H9.5a.5.5 0 0 1-.5-.5v-1a1.5 1.5 0 1 0-3 0v1a.5.5 0 0 1-.5.5H3v2h.5a2.5 2.5 0 0 1 0 5H3v2h6v1H2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 1 0 0-3h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H5z"
      fill="#548AF7"
    />
  </svg>
);

export const CustomResourceDefinition: React.FC<
  CustomResourceDefinitionProps
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
      ? CustomResourceDefinitionLight
      : CustomResourceDefinitionDark;

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
