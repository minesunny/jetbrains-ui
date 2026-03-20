import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MakefileAppProps = IconProps;

const MakefileAppLight: React.FC<SvgProps> = ({
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
      d="M10 10h1.46L13 12.5l1.5-2.5H16v6h-1v-4.625l-1.59 2.621h-.719L11 11.377V16h-1z"
      fill="#3574F0"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V9h3.16l.84 1.961L13.84 9H15V4a2 2 0 0 0-2-2z"
      fill="#EBECF0"
    />
    <path
      d="M3 3h10a1 1 0 0 1 1 1v5h1V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#6C707E"
    />
    <path
      d="M3.5 5.5A.5.5 0 0 1 4 5h1a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5M7 5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
      fill="#6C707E"
    />
  </svg>
);

const MakefileAppDark: React.FC<SvgProps> = ({
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
        d="M10 10h1.46L13 12.5l1.5-2.5H16v6h-1v-4.625l-1.59 2.621h-.719L11 11.377V16h-1z"
        fill="#548AF7"
      />
      <path
        d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V9h3.16l.84 1.961L13.84 9H15V4a2 2 0 0 0-2-2z"
        fill="#43454A"
      />
      <path
        d="M3 3h10a1 1 0 0 1 1 1v5h1V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
        fill="#CED0D6"
      />
      <path
        d="M3.5 5.5A.5.5 0 0 1 4 5h1a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5M7 5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
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

export const MakefileApp: React.FC<MakefileAppProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MakefileAppLight : MakefileAppDark;

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
