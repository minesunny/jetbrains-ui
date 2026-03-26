import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantPropertyOptionalProps = IconProps;

const CodeAssistantPropertyOptionalLight: React.FC<SvgProps> = ({
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
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="5.5"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.223.465.223.714.634.255.412.254.952 0 .544-.258.955-.255.412-.722.639a2.5 2.5 0 0 1-1.093.227H6.98v2.37H6zm2.477 2.786q.318 0 .559-.116a.87.87 0 0 0 .37-.339q.129-.222.129-.518a1 1 0 0 0-.13-.514.84.84 0 0 0-.37-.335q-.24-.12-.558-.12H6.98v1.942z"
      fill="#DB3B4B"
    />
  </svg>
);

const CodeAssistantPropertyOptionalDark: React.FC<SvgProps> = ({
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
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="5.5"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.223.465.223.714.634.255.412.254.952 0 .544-.258.955-.255.412-.722.639a2.5 2.5 0 0 1-1.093.227H6.98v2.37H6zm2.477 2.786q.318 0 .559-.116a.87.87 0 0 0 .37-.339q.129-.222.129-.518a1 1 0 0 0-.13-.514.84.84 0 0 0-.37-.335q-.24-.12-.558-.12H6.98v1.942z"
      fill="#DB5C5C"
    />
  </svg>
);

export const CodeAssistantPropertyOptional: React.FC<
  CodeAssistantPropertyOptionalProps
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
      ? CodeAssistantPropertyOptionalLight
      : CodeAssistantPropertyOptionalDark;

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
