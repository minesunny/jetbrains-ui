import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ValueMutedProps = IconProps;

const ValueMutedLight: React.FC<SvgProps> = ({
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
      d="M1.146 1.146a.5.5 0 0 1 .708 0l13 13a.5.5 0 0 1-.708.708l-13-13a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
    <path
      d="M14 11.879V3a2 2 0 0 0-2-2H4c-.26 0-.51.05-.738.14l.86.86H12a1 1 0 0 1 1 1v7.879z"
      fill="#6C707E"
    />
    <path
      d="M10.61 8.488a.5.5 0 0 0-.11-.988h-.879zM8.121 6H10.5a.5.5 0 0 0 0-1H7.121zM3 5.121l-1-1V13a2 2 0 0 0 2 2h8c.26 0 .51-.05.738-.14l-.86-.86H4a1 1 0 0 1-1-1z"
      fill="#6C707E"
    />
    <path
      d="m7.879 10 1 1H5.5a.5.5 0 0 1 0-1zM6.379 8.5l-.988-.988A.5.5 0 0 0 5.5 8.5z"
      fill="#6C707E"
    />
  </svg>
);

const ValueMutedDark: React.FC<SvgProps> = ({
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
      d="M1.146 1.146a.5.5 0 0 1 .708 0l13 13a.5.5 0 0 1-.708.708l-13-13a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
    <path
      d="M14 11.879V3a2 2 0 0 0-2-2H4c-.26 0-.51.05-.738.14l.86.86H12a1 1 0 0 1 1 1v7.879z"
      fill="#CED0D6"
    />
    <path
      d="M10.61 8.488a.5.5 0 0 0-.11-.988h-.879zM8.121 6H10.5a.5.5 0 0 0 0-1H7.121zM3 5.121l-1-1V13a2 2 0 0 0 2 2h8c.26 0 .51-.05.738-.14l-.86-.86H4a1 1 0 0 1-1-1z"
      fill="#CED0D6"
    />
    <path
      d="m7.879 10 1 1H5.5a.5.5 0 0 1 0-1zM6.379 8.5l-.988-.988A.5.5 0 0 0 5.5 8.5z"
      fill="#CED0D6"
    />
  </svg>
);

export const ValueMuted: React.FC<ValueMutedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ValueMutedLight : ValueMutedDark;

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
