import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RunRackTaskProps = IconProps;

const RunRackTaskLight: React.FC<SvgProps> = ({
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
      d="M2.5 11.5V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1.5M2.5 6.5V8a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6.5M2.5 1.5V3a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V1.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const RunRackTaskDark: React.FC<SvgProps> = ({
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
      d="M2.5 11.5V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1.5M2.5 6.5V8a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6.5M2.5 1.5V3a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V1.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const RunRackTask: React.FC<RunRackTaskProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RunRackTaskLight : RunRackTaskDark;

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
