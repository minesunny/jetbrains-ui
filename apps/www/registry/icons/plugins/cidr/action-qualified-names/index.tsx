import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ActionQualifiedNamesProps = IconProps;

const ActionQualifiedNamesLight: React.FC<SvgProps> = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="M3.205 4.5H4.25l3.565 5.435V4.5h.98v7h-1.05l-3.56-5.435V11.5h-.98z"
      fill="#6C707E"
    />
    <path fill="#6C707E" d="M10 8H11V9H10z" />
    <path fill="#6C707E" d="M12 8H13V9H12z" />
    <path fill="#6C707E" d="M12 10H13V11H12z" />
    <path fill="#6C707E" d="M10 10H11V11H10z" />
  </svg>
);

const ActionQualifiedNamesDark: React.FC<SvgProps> = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="M3.205 4.5H4.25l3.565 5.435V4.5h.98v7h-1.05l-3.56-5.435V11.5h-.98z"
      fill="#CED0D6"
    />
    <path fill="#CED0D6" d="M10 8H11V9H10z" />
    <path fill="#CED0D6" d="M12 8H13V9H12z" />
    <path fill="#CED0D6" d="M12 10H13V11H12z" />
    <path fill="#CED0D6" d="M10 10H11V11H10z" />
  </svg>
);

export const ActionQualifiedNames: React.FC<ActionQualifiedNamesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ActionQualifiedNamesLight : ActionQualifiedNamesDark;

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
