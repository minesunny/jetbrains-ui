import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantFieldOptionalProps = IconProps;

const CodeAssistantFieldOptionalLight: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5v6h1V9.04h2.495v-1H7V6h3V5z"
      fill="#834DF0"
    />
  </svg>
);

const CodeAssistantFieldOptionalDark: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#2F2936"
      stroke="#B589EC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5v6h1V9.04h2.495v-1H7V6h3V5z"
      fill="#B589EC"
    />
  </svg>
);

export const CodeAssistantFieldOptional: React.FC<
  CodeAssistantFieldOptionalProps
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
      ? CodeAssistantFieldOptionalLight
      : CodeAssistantFieldOptionalDark;

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
