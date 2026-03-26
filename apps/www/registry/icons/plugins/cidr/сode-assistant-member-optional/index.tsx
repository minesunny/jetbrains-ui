import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type СodeAssistantMemberOptionalProps = IconProps;

const СodeAssistantMemberOptionalLight: React.FC<SvgProps> = ({
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
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M10.066 5.25c-.812 0-1.43.402-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.364-1.645 1.003v-.877H4v5.382h.999V7.595c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.595c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.364c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB3B4B"
    />
  </svg>
);

const СodeAssistantMemberOptionalDark: React.FC<SvgProps> = ({
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
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M10.066 5.25c-.812 0-1.43.402-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.364-1.645 1.003v-.877H4v5.382h.999V7.595c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.595c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.364c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB5C5C"
    />
  </svg>
);

export const СodeAssistantMemberOptional: React.FC<
  СodeAssistantMemberOptionalProps
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
      ? СodeAssistantMemberOptionalLight
      : СodeAssistantMemberOptionalDark;

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
