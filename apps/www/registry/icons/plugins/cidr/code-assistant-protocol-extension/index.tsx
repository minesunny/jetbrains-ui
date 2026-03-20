import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantProtocolExtensionProps = IconProps;

const CodeAssistantProtocolExtensionLight: React.FC<SvgProps> = ({
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
    <path d="M11 16h5v-1h-4v-2h3.5v-1h-3.51v-2H16V9h-5z" fill="#3574F0" />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V8h4V4a2 2 0 0 0-2-2z"
      fill="#EDF3FF"
    />
    <path
      d="M4 3h8a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#3574F0"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H6.98v1.948z"
      fill="#3574F0"
    />
  </svg>
);

const CodeAssistantProtocolExtensionDark: React.FC<SvgProps> = ({
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
    <path d="M11 16h5v-1h-4v-2h3.5v-1h-3.51v-2H16V9h-5z" fill="#548AF7" />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V8h4V4a2 2 0 0 0-2-2z"
      fill="#25324D"
    />
    <path
      d="M4 3h8a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#548AF7"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H6.98v1.948z"
      fill="#548AF7"
    />
  </svg>
);

export const CodeAssistantProtocolExtension: React.FC<
  CodeAssistantProtocolExtensionProps
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
      ? CodeAssistantProtocolExtensionLight
      : CodeAssistantProtocolExtensionDark;

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
