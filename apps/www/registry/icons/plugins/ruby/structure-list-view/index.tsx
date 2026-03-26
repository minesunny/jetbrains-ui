import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type StructureListViewProps = IconProps;

const StructureListViewLight: React.FC<SvgProps> = ({
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
    <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" stroke="#6C707E" />
    <rect x="5" y="5" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="5" y="7.5" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="5" y="10" width="6" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const StructureListViewDark: React.FC<SvgProps> = ({
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
    <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" stroke="#CED0D6" />
    <rect x="5" y="5" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="5" y="7.5" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="5" y="10" width="6" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const StructureListView: React.FC<StructureListViewProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? StructureListViewLight : StructureListViewDark;

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
