import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type IncompleteClosedProps = IconProps;

const IncompleteClosedLight: React.FC<SvgProps> = ({
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
      d="M1 12.133C1 13.164 1.731 14 2.633 14h10.734c.902 0 1.633-.836 1.633-1.867V8H1z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v6.133C15 13.164 14.269 14 13.367 14H2.633C1.731 14 1 13.164 1 12.133zM2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v2H2V3.867C2 3.258 2.405 3 2.633 3M14 9v3.133c0 .609-.405.867-.633.867H2.633C2.405 13 2 12.742 2 12.133V9z"
      fill="#6C707E"
    />
  </svg>
);

const IncompleteClosedDark: React.FC<SvgProps> = ({
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
      d="M1 12.133C1 13.164 1.731 14 2.633 14h10.734c.902 0 1.633-.836 1.633-1.867V8H1z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v6.133C15 13.164 14.269 14 13.367 14H2.633C1.731 14 1 13.164 1 12.133zM2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v2H2V3.867C2 3.258 2.405 3 2.633 3M14 9v3.133c0 .609-.405.867-.633.867H2.633C2.405 13 2 12.742 2 12.133V9z"
      fill="#CED0D6"
    />
  </svg>
);

export const IncompleteClosed: React.FC<IncompleteClosedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? IncompleteClosedLight : IncompleteClosedDark;

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
