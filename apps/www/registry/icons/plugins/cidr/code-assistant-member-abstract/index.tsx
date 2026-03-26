import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantMemberAbstractProps = IconProps;

const CodeAssistantMemberAbstractLight: React.FC<SvgProps> = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      fill="#FFF7F7"
    />
    <path
      d="M9 3h3a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2H9zM7 3V2H4a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1zM3 9H2v3a2 2 0 0 0 2 2h3v-1H4a1 1 0 0 1-1-1zM9 13v1h3a2 2 0 0 0 2-2V9h-1v3a1 1 0 0 1-1 1z"
      fill="#DB3B4B"
    />
    <path
      d="M10.066 5.25c-.812 0-1.43.402-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.364-1.645 1.003v-.877H4v5.382h.999V7.595c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.595c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.364c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB3B4B"
    />
  </svg>
);

const CodeAssistantMemberAbstractDark: React.FC<SvgProps> = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      fill="#402929"
    />
    <path
      d="M9 3h3a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2H9zM7 3V2H4a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1zM3 9H2v3a2 2 0 0 0 2 2h3v-1H4a1 1 0 0 1-1-1zM9 13v1h3a2 2 0 0 0 2-2V9h-1v3a1 1 0 0 1-1 1z"
      fill="#DB5C5C"
    />
    <path
      d="M10.066 5.25c-.812 0-1.43.402-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.364-1.645 1.003v-.877H4v5.382h.999V7.595c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.595c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.364c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB5C5C"
    />
  </svg>
);

export const CodeAssistantMemberAbstract: React.FC<
  CodeAssistantMemberAbstractProps
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
      ? CodeAssistantMemberAbstractLight
      : CodeAssistantMemberAbstractDark;

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
