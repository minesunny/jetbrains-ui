import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HashKeyProps = IconProps;

const HashKeyLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.035a3.5 3.5 0 0 1 6.628-2H14V4a2 2 0 0 0-2-2z"
        fill="#FFF4EB"
      />
      <path
        d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.035a3.5 3.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7.05c.27.277.495.597.663.95H14V4a2 2 0 0 0-2-2z"
        fill="#E66D17"
      />
      <path
        d="M11 10.035v-1.7c0-.486-.064-.903-.246-1.248a1.86 1.86 0 0 0-.758-.793 2.26 2.26 0 0 0-1.112-.268q-.69 0-1.203.325c-.273.17-.512.401-.692.691l.003-.143V4H6v8h.992V8.557q0-.478.2-.85c.133-.25.341-.444.58-.58q.36-.211.827-.211.44 0 .753.182.318.177.49.524.17.342.17.827v1.585a3.5 3.5 0 0 1 .988.001"
        fill="#E66D17"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fill="#6C707E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const HashKeyDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.035a3.5 3.5 0 0 1 6.628-2H14V4a2 2 0 0 0-2-2z"
        fill="#45322B"
      />
      <path
        d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.035a3.5 3.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7.05c.27.277.495.597.663.95H14V4a2 2 0 0 0-2-2z"
        fill="#C77D55"
      />
      <path
        d="M11 10.035v-1.7c0-.486-.064-.903-.246-1.248a1.86 1.86 0 0 0-.758-.793 2.26 2.26 0 0 0-1.112-.268q-.69 0-1.203.325c-.273.17-.512.401-.692.691l.003-.143V4H6v8h.992V8.557q0-.478.2-.85c.133-.25.341-.444.58-.58q.36-.211.827-.211.44 0 .753.182.318.177.49.524.17.342.17.827v1.585a3.5 3.5 0 0 1 .988.001"
        fill="#C77D55"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fill="#CED0D6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const HashKey: React.FC<HashKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HashKeyLight : HashKeyDark;

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
