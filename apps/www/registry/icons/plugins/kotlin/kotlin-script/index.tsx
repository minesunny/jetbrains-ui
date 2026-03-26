import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinScriptProps = IconProps;

const KotlinScriptLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1m1.732 0H10.5A1.5 1.5 0 0 1 12 4.5V8h1V4.5A2.5 2.5 0 0 0 10.5 2H3a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5H4v7a2 2 0 0 0 2 2h2v-1H6a1 1 0 0 1-1-1V4a2 2 0 0 0-.268-1"
      fill="#6C707E"
    />
    <path
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#834DF0"
    />
  </svg>
);

const KotlinScriptDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1m1.732 0H10.5A1.5 1.5 0 0 1 12 4.5V8h1V4.5A2.5 2.5 0 0 0 10.5 2H3a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5H4v7a2 2 0 0 0 2 2h2v-1H6a1 1 0 0 1-1-1V4a2 2 0 0 0-.268-1"
      fill="#CED0D6"
    />
    <path
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#A571E6"
    />
  </svg>
);

export const KotlinScript: React.FC<KotlinScriptProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KotlinScriptLight : KotlinScriptDark;

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
