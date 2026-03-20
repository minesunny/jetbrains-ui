import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WebRootFileProps = IconProps;

const WebRootFileLight: React.FC<SvgProps> = ({
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
      d="M2.713 6.71c-.241-.597-.404-1.362-.45-2.21H1.041c.164.98.803 1.798 1.672 2.21M3.678 6.428c-.206-.473-.365-1.143-.413-1.928h1.47c-.049.785-.207 1.455-.414 1.928-.119.271-.236.437-.321.525-.086-.088-.203-.254-.322-.525M3.678 1.572c-.206.473-.365 1.143-.413 1.928h1.47c-.049-.785-.207-1.455-.414-1.928-.119-.271-.236-.437-.321-.525-.086.088-.203.254-.322.525M5.286 6.71c.241-.597.404-1.362.45-2.21h1.222a3 3 0 0 1-1.672 2.21M5.736 3.5h1.222a3 3 0 0 0-1.672-2.21c.241.597.404 1.362.45 2.21M1.041 3.5h1.222c.046-.848.209-1.613.45-2.21A3 3 0 0 0 1.04 3.5"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4a4 4 0 1 0-8 0 4 4 0 0 0 8 0m-5.736.5c.046.848.208 1.613.45 2.21A3 3 0 0 1 1.04 4.5zm1.001 0c.048.785.207 1.455.414 1.928.119.271.236.437.321.525.085-.088.202-.254.321-.525.207-.473.366-1.143.414-1.928zm1.47-1h-1.47c.048-.785.207-1.455.414-1.928.119-.271.236-.437.321-.525.085.088.202.254.321.525.207.473.366 1.143.414 1.928m1.001 1c-.046.848-.208 1.613-.45 2.21A3 3 0 0 0 6.96 4.5zm1.223-1H5.736c-.046-.848-.208-1.613-.45-2.21A3 3 0 0 1 6.96 3.5m-4.695 0H1.04a3 3 0 0 1 1.672-2.21c-.24.597-.403 1.362-.45 2.21"
      fill="#6C707E"
    />
  </svg>
);

const WebRootFileDark: React.FC<SvgProps> = ({
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
      d="M2.713 6.71c-.241-.597-.404-1.362-.45-2.21H1.041c.164.98.803 1.798 1.672 2.21M3.678 6.428c-.206-.473-.365-1.143-.413-1.928h1.47c-.049.785-.207 1.455-.414 1.928-.119.271-.236.437-.321.525-.086-.088-.203-.254-.322-.525M3.678 1.572c-.206.473-.365 1.143-.413 1.928h1.47c-.049-.785-.207-1.455-.414-1.928-.119-.271-.236-.437-.321-.525-.086.088-.203.254-.322.525M5.286 6.71c.241-.597.404-1.362.45-2.21h1.222a3 3 0 0 1-1.672 2.21M5.736 3.5h1.222a3 3 0 0 0-1.672-2.21c.241.597.404 1.362.45 2.21M1.041 3.5h1.222c.046-.848.209-1.613.45-2.21A3 3 0 0 0 1.04 3.5"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4a4 4 0 1 0-8 0 4 4 0 0 0 8 0m-5.736.5c.046.848.208 1.613.45 2.21A3 3 0 0 1 1.04 4.5zm1.001 0c.048.785.207 1.455.414 1.928.119.271.236.437.321.525.085-.088.202-.254.321-.525.207-.473.366-1.143.414-1.928zm1.47-1h-1.47c.048-.785.207-1.455.414-1.928.119-.271.236-.437.321-.525.085.088.202.254.321.525.207.473.366 1.143.414 1.928m1.001 1c-.046.848-.208 1.613-.45 2.21A3 3 0 0 0 6.96 4.5zm1.223-1H5.736c-.046-.848-.208-1.613-.45-2.21A3 3 0 0 1 6.96 3.5m-4.695 0H1.04a3 3 0 0 1 1.672-2.21c-.24.597-.403 1.362-.45 2.21"
      fill="#CED0D6"
    />
  </svg>
);

export const WebRootFile: React.FC<WebRootFileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WebRootFileLight : WebRootFileDark;

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
