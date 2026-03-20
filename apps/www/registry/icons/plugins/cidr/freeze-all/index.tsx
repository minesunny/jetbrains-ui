import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FreezeAllProps = IconProps;

const FreezeAllLight: React.FC<SvgProps> = ({
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
      d="M8 1.5a.5.5 0 1 0-1 0v1.066l-.722-.482a.5.5 0 0 0-.555.832l1.278.852v3.366L4.085 5.451l-.099-1.532a.5.5 0 1 0-.998.064l.056.867-.923-.533a.5.5 0 1 0-.5.866l.923.533-.778.385a.5.5 0 0 0 .443.896l1.376-.68L6.5 8 3.585 9.683l-1.376-.68a.5.5 0 1 0-.443.896l.778.385-.923.533a.5.5 0 1 0 .5.866l.923-.533-.056.867a.5.5 0 0 0 .998.064l.099-1.532 2.916-1.683v3.366l-1.278.852a.5.5 0 0 0 .555.832l.723-.482V14.5a.5.5 0 0 0 1 0zM11 1.5a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0zM14 1.5a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0z"
      fill="#3574F0"
    />
  </svg>
);

const FreezeAllDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#548AF7">
      <path d="M8 1.5a.5.5 0 1 0-1 0v1.066l-.722-.482a.5.5 0 0 0-.555.832l1.278.852v3.366L4.085 5.451l-.099-1.532a.5.5 0 1 0-.998.064l.056.867-.923-.533a.5.5 0 1 0-.5.866l.923.533-.778.385a.5.5 0 0 0 .443.896l1.376-.68L6.5 8 3.585 9.683l-1.376-.68a.5.5 0 1 0-.443.896l.778.385-.923.533a.5.5 0 1 0 .5.866l.923-.533-.056.867a.5.5 0 0 0 .998.064l.099-1.532 2.916-1.683v3.366l-1.278.852a.5.5 0 0 0 .555.832l.723-.482V14.5a.5.5 0 0 0 1 0zM11 1.5a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0zM14 1.5a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const FreezeAll: React.FC<FreezeAllProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FreezeAllLight : FreezeAllDark;

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
