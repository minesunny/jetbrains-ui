import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowDartProps = IconProps;

const ToolWindowDartLight: FC<SvgProps> = ({
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
      d="M7.985 1.865a1.5 1.5 0 0 1 1.536.363l4.833 4.833a.5.5 0 0 1 .146.353V11a.5.5 0 0 1-.5.5h-2.5V14a.5.5 0 0 1-.5.5H7.414a.5.5 0 0 1-.353-.146L2.228 9.52a1.5 1.5 0 0 1-.363-1.536l1.293-3.879a1.5 1.5 0 0 1 .948-.948z"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="M3.5 10.5v-6a1 1 0 0 1 1-1h6"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const ToolWindowDartDark: FC<SvgProps> = ({
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
      d="M7.985 1.865a1.5 1.5 0 0 1 1.536.363l4.833 4.833a.5.5 0 0 1 .146.353V11a.5.5 0 0 1-.5.5h-2.5V14a.5.5 0 0 1-.5.5H7.414a.5.5 0 0 1-.353-.146L2.228 9.52a1.5 1.5 0 0 1-.363-1.536l1.293-3.879a1.5 1.5 0 0 1 .948-.948z"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="M3.5 10.5v-6a1 1 0 0 1 1-1h6"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const ToolWindowDart: FC<ToolWindowDartProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowDartLight : ToolWindowDartDark;

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
