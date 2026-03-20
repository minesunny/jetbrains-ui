import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantActorExtensionProps = IconProps;

const CodeAssistantActorExtensionLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.532 4.98H7.47L5.277 11h1.024l.49-1.484h2.477L9.797 11H10V8.877zM8.09 6.223l.903 2.507H7.045L7.9 6.223l.095-.374z"
      fill="#3574F0"
    />
  </svg>
);

const CodeAssistantActorExtensionDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.532 4.98H7.47L5.277 11h1.024l.49-1.484h2.477L9.797 11H10V8.877zM8.09 6.223l.903 2.507H7.045L7.9 6.223l.095-.374z"
      fill="#548AF7"
    />
  </svg>
);

export const CodeAssistantActorExtension: React.FC<
  CodeAssistantActorExtensionProps
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
      ? CodeAssistantActorExtensionLight
      : CodeAssistantActorExtensionDark;

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
