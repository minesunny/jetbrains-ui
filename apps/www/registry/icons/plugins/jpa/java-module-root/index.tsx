import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JavaModuleRootProps = IconProps;

const JavaModuleRootLight: React.FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2.17c-.313-.11-.65-.17-1-.17h-3a3 3 0 0 0-3 3v3H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="M8.094 5H13a1 1 0 0 1 1 1v2c.35 0 .687.06 1 .17V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H8v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#6C707E"
    />
    <rect
      x="9.5"
      y="9.5"
      width="6"
      height="6"
      rx="1.5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const JavaModuleRootDark: React.FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2.17c-.313-.11-.65-.17-1-.17h-3a3 3 0 0 0-3 3v3H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="M8.094 5H13a1 1 0 0 1 1 1v2c.35 0 .687.06 1 .17V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H8v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#CED0D6"
    />
    <rect
      x="9.5"
      y="9.5"
      width="6"
      height="6"
      rx="1.5"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const JavaModuleRoot: React.FC<JavaModuleRootProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JavaModuleRootLight : JavaModuleRootDark;

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
