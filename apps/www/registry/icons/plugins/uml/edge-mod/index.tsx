import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EdgeModProps = IconProps;

const EdgeModLight: React.FC<SvgProps> = ({
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
      d="M12.5 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2.5 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      stroke="#6C707E"
    />
    <path d="M11 12.5H9.5a2 2 0 0 1-2-2v-5a2 2 0 0 0-2-2H4" stroke="#6C707E" />
  </svg>
);

const EdgeModDark: React.FC<SvgProps> = ({
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
      d="M12.5 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2.5 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      stroke="#CED0D6"
    />
    <path d="M11 12.5H9.5a2 2 0 0 1-2-2v-5a2 2 0 0 0-2-2H4" stroke="#CED0D6" />
  </svg>
);

export const EdgeMod: React.FC<EdgeModProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EdgeModLight : EdgeModDark;

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
