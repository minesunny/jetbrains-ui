import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OperatorProps = IconProps;

const OperatorLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#EDF3FF" stroke="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V8c0 1.127.812 2.055 1.951 2.055"
      fill="#3574F0"
    />
  </svg>
);

const OperatorDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#25324D" stroke="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V8c0 1.127.812 2.055 1.951 2.055"
      fill="#548AF7"
    />
  </svg>
);

export const Operator: FC<OperatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OperatorLight : OperatorDark;

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
