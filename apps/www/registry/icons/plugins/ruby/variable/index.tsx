import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VariableProps = IconProps;

const VariableLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="7" fill="#FFF4EB" />
    <path
      d="M9.769 5.385v.974h-.03c-.345-.669-.984-1.054-1.829-1.054-1.488 0-2.607 1.174-2.607 2.735s1.119 2.736 2.607 2.736c.94 0 1.717-.437 2.132-1.122.439.682 1.257 1.098 2.286 1.098 1.633 0 2.711-1.15 2.711-2.832 0-3.806-3.146-6.92-7-6.92s-7 3.186-7 7.08c0 3.806 3.146 6.92 7 6.92 1.85 0 3.516-.764 4.433-1.593l-.724-.797a5.63 5.63 0 0 1-3.709 1.384c-3.299 0-5.994-2.663-5.994-5.914 0-3.339 2.695-6.074 5.994-6.074s5.994 2.663 5.994 5.914c0 1.11-.667 1.866-1.705 1.866-.942 0-1.634-.595-1.634-1.464V5.385zm-1.77 4.506c-.966 0-1.69-.797-1.69-1.85 0-1.055.724-1.851 1.69-1.851.965 0 1.69.796 1.69 1.85s-.725 1.85-1.69 1.85"
      fill="#E66D17"
    />
  </svg>
);

const VariableDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="7" fill="#45322B" />
    <path
      d="M9.769 5.385v.974h-.03c-.345-.669-.984-1.054-1.829-1.054-1.488 0-2.607 1.174-2.607 2.735s1.119 2.736 2.607 2.736c.94 0 1.717-.437 2.132-1.122.439.682 1.257 1.098 2.286 1.098 1.633 0 2.711-1.15 2.711-2.832 0-3.806-3.146-6.92-7-6.92s-7 3.186-7 7.08c0 3.806 3.146 6.92 7 6.92 1.85 0 3.516-.764 4.433-1.593l-.724-.797a5.63 5.63 0 0 1-3.709 1.384c-3.299 0-5.994-2.663-5.994-5.914 0-3.339 2.695-6.074 5.994-6.074s5.994 2.663 5.994 5.914c0 1.11-.667 1.866-1.705 1.866-.942 0-1.634-.595-1.634-1.464V5.385zm-1.77 4.506c-.966 0-1.69-.797-1.69-1.85 0-1.055.724-1.851 1.69-1.851.965 0 1.69.796 1.69 1.85s-.725 1.85-1.69 1.85"
      fill="#C77D55"
    />
  </svg>
);

export const Variable: React.FC<VariableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VariableLight : VariableDark;

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
