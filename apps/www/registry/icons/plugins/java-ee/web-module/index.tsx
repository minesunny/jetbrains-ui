import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WebModuleProps = IconProps;

const WebModuleLight: React.FC<SvgProps> = ({
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
      d="M10.713 14.71c-.241-.597-.404-1.362-.45-2.21H9.041c.164.98.803 1.798 1.672 2.21M11.678 14.428c-.207-.473-.365-1.143-.413-1.928h1.47c-.049.785-.207 1.455-.414 1.928-.119.271-.236.437-.322.525-.085-.088-.202-.254-.32-.525M11.678 9.572c-.207.473-.365 1.143-.413 1.928h1.47c-.049-.785-.207-1.455-.414-1.928-.119-.271-.236-.437-.322-.525-.085.088-.202.254-.32.525M13.286 14.71c.241-.597.404-1.362.45-2.21h1.222a3 3 0 0 1-1.672 2.21M13.736 11.5h1.222a3 3 0 0 0-1.672-2.21c.241.597.404 1.362.45 2.21M9.041 11.5h1.222c.046-.848.209-1.613.45-2.21A3 3 0 0 0 9.04 11.5"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0m-5.736.5c.046.848.208 1.613.45 2.21A3 3 0 0 1 9.04 12.5zm1.001 0c.048.785.207 1.455.414 1.928.118.271.236.437.321.525.085-.088.203-.254.321-.525.207-.473.366-1.143.414-1.928zm1.47-1h-1.47c.048-.785.207-1.455.414-1.928.118-.271.236-.437.321-.525.085.088.203.254.321.525.207.473.366 1.143.414 1.928m1.002 1c-.047.848-.21 1.613-.45 2.21a3 3 0 0 0 1.672-2.21zm1.222-1h-1.223c-.046-.848-.208-1.613-.45-2.21a3 3 0 0 1 1.673 2.21m-4.695 0H9.04a3 3 0 0 1 1.672-2.21c-.24.597-.403 1.362-.45 2.21"
      fill="#6C707E"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.416A5 5 0 0 1 14 7.416V4a2 2 0 0 0-2-2z"
      fill="#FFF4EB"
    />
    <path
      d="M4 3h8a1 1 0 0 1 1 1v3.1q.523.106 1 .316V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.416a5 5 0 0 1-.316-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#E66D17"
    />
  </svg>
);

const WebModuleDark: React.FC<SvgProps> = ({
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
      d="M10.713 14.71c-.241-.597-.404-1.362-.45-2.21H9.041c.164.98.803 1.798 1.672 2.21M11.678 14.428c-.207-.473-.365-1.143-.413-1.928h1.47c-.049.785-.207 1.455-.414 1.928-.119.271-.236.437-.322.525-.085-.088-.202-.254-.32-.525M11.678 9.572c-.207.473-.365 1.143-.413 1.928h1.47c-.049-.785-.207-1.455-.414-1.928-.119-.271-.236-.437-.322-.525-.085.088-.202.254-.32.525M13.286 14.71c.241-.597.404-1.362.45-2.21h1.222a3 3 0 0 1-1.672 2.21M13.736 11.5h1.222a3 3 0 0 0-1.672-2.21c.241.597.404 1.362.45 2.21M9.041 11.5h1.222c.046-.848.209-1.613.45-2.21A3 3 0 0 0 9.04 11.5"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0m-5.736.5c.046.848.208 1.613.45 2.21A3 3 0 0 1 9.04 12.5zm1.001 0c.048.785.207 1.455.414 1.928.118.271.236.437.321.525.085-.088.203-.254.321-.525.207-.473.366-1.143.414-1.928zm1.47-1h-1.47c.048-.785.207-1.455.414-1.928.118-.271.236-.437.321-.525.085.088.203.254.321.525.207.473.366 1.143.414 1.928m1.002 1c-.047.848-.21 1.613-.45 2.21a3 3 0 0 0 1.672-2.21zm1.222-1h-1.223c-.046-.848-.208-1.613-.45-2.21a3 3 0 0 1 1.673 2.21m-4.695 0H9.04a3 3 0 0 1 1.672-2.21c-.24.597-.403 1.362-.45 2.21"
      fill="#CED0D6"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.416A5 5 0 0 1 14 7.416V4a2 2 0 0 0-2-2z"
      fill="#45322B"
    />
    <path
      d="M4 3h8a1 1 0 0 1 1 1v3.1q.523.106 1 .316V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.416a5 5 0 0 1-.316-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#C77D55"
    />
  </svg>
);

export const WebModule: React.FC<WebModuleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WebModuleLight : WebModuleDark;

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
