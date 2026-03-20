import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TargetProps = IconProps;

const TargetLight: React.FC<SvgProps> = ({
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
      d="M14 .5a.5.5 0 0 0-.854-.354l-2 2A.5.5 0 0 0 11 2.5v1.793L9.016 6.277a2 2 0 1 0 .707.707L11.707 5H13.5a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 15.5 2H14zM13.293 4H12V2.707l1-1V2.5a.5.5 0 0 0 .5.5h.793zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#6C707E"
    />
    <path
      d="M10.008 2.344a6 6 0 1 0 3.648 3.648 1.5 1.5 0 0 0 .905-.431l.002-.002a7 7 0 1 1-4.121-4.121l-.003.001a1.5 1.5 0 0 0-.43.905"
      fill="#6C707E"
    />
  </svg>
);

const TargetDark: React.FC<SvgProps> = ({
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
      d="M14 .5a.5.5 0 0 0-.854-.354l-2 2A.5.5 0 0 0 11 2.5v1.793L9.016 6.277a2 2 0 1 0 .707.707L11.707 5H13.5a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 15.5 2H14zM13.293 4H12V2.707l1-1V2.5a.5.5 0 0 0 .5.5h.793zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#CED0D6"
    />
    <path
      d="M10.008 2.344a6 6 0 1 0 3.648 3.648 1.5 1.5 0 0 0 .905-.431l.002-.002a7 7 0 1 1-4.121-4.121l-.003.001a1.5 1.5 0 0 0-.43.905"
      fill="#CED0D6"
    />
  </svg>
);

export const Target: React.FC<TargetProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TargetLight : TargetDark;

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
