import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ModulemapProps = IconProps;

const ModulemapLight: React.FC<SvgProps> = ({
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
      d="M.96 12V3.95h1.651l.891 5.388.07 1.07.068-1.07.834-5.388h1.673V12H5.13V5.56l.028-1.023L3.951 12h-.788L1.944 4.571l.029.989V12zM6.808 12l1.466-8.05h1.392l1.5 8.05h-1.098L9.045 5.692l-.075-.534-.075.534L7.935 12zm.845-2.087V9.01h2.576v.903zM11.823 12V3.95h1.673q.69 0 1.139.265.455.258.672.782.219.522.219 1.316 0 .8-.224 1.329-.225.529-.685.793-.459.26-1.167.259h-.552V12zm1.656-4.278q.477 0 .696-.34.218-.345.218-1.063 0-.713-.218-1.052-.219-.345-.696-.345h-.58v2.8z"
      fill="#DB3B4B"
    />
  </svg>
);

const ModulemapDark: React.FC<SvgProps> = ({
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
      d="M.96 12V3.95h1.651l.891 5.388.07 1.07.068-1.07.834-5.388h1.673V12H5.13V5.56l.028-1.023L3.951 12h-.788L1.944 4.571l.029.989V12zM6.808 12l1.466-8.05h1.392l1.5 8.05h-1.098L9.045 5.692l-.075-.534-.075.534L7.935 12zm.845-2.087V9.01h2.576v.903zM11.823 12V3.95h1.673q.69 0 1.139.265.455.258.672.782.219.522.219 1.316 0 .8-.224 1.329-.225.529-.685.793-.459.26-1.167.259h-.552V12zm1.656-4.278q.477 0 .696-.34.218-.345.218-1.063 0-.713-.218-1.052-.219-.345-.696-.345h-.58v2.8z"
      fill="#DB5C5C"
    />
  </svg>
);

export const Modulemap: React.FC<ModulemapProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ModulemapLight : ModulemapDark;

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
