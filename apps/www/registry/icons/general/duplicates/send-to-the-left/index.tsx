import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SendToTheLeftProps = IconProps;

const SendToTheLeftLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M8.855 3.147a.5.5 0 0 1 0 .707L5.708 7h7.794a.5.5 0 1 1 0 1H5.708l3.147 3.147a.5.5 0 0 1-.708.707l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .708 0"
      fill="#3574F0"
    />
    <path
      d="M2.499 11.5v-8"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SendToTheLeftDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M8.855 3.147a.5.5 0 0 1 0 .707L5.708 7h7.794a.5.5 0 1 1 0 1H5.708l3.147 3.147a.5.5 0 0 1-.708.707l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .708 0"
      fill="#548AF7"
    />
    <path
      d="M2.499 11.5v-8"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SendToTheLeft: FC<SendToTheLeftProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SendToTheLeftLight : SendToTheLeftDark;

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
