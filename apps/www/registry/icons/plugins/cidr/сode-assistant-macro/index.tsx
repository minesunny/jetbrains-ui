import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type СodeAssistantMacroProps = IconProps;

const СodeAssistantMacroLight: React.FC<SvgProps> = ({
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
      fill="#F2FCF3"
      stroke="#208A3C"
    />
    <path
      d="M6.992 4.5h1.025l-1.5 7H5.492zm2.495 0h1.025l-1.5 7H7.987zm1.125 4.31v.92l-5.725.01v-.92zm.5-2.545v.92l-5.725.01v-.92z"
      fill="#208A3C"
    />
  </svg>
);

const СodeAssistantMacroDark: React.FC<SvgProps> = ({
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
      fill="#253627"
      stroke="#57965C"
    />
    <path
      d="M6.992 4.5h1.025l-1.5 7H5.492zm2.495 0h1.025l-1.5 7H7.987zm1.125 4.31v.92l-5.725.01v-.92zm.5-2.545v.92l-5.725.01v-.92z"
      fill="#57965C"
    />
  </svg>
);

export const СodeAssistantMacro: React.FC<СodeAssistantMacroProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? СodeAssistantMacroLight : СodeAssistantMacroDark;

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
