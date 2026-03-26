import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantProtocolProps = IconProps;

const CodeAssistantProtocolLight: React.FC<SvgProps> = ({
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
      rx="1.5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H6.98v1.948z"
      fill="#3574F0"
    />
  </svg>
);

const CodeAssistantProtocolDark: React.FC<SvgProps> = ({
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
      rx="1.5"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H6.98v1.948z"
      fill="#548AF7"
    />
  </svg>
);

export const CodeAssistantProtocol: React.FC<CodeAssistantProtocolProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CodeAssistantProtocolLight : CodeAssistantProtocolDark;

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
