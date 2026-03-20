import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowTestSparkProps = IconProps;

const ToolWindowTestSparkLight: FC<SvgProps> = ({
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
      d="m8.322 4.475.177.513.498-.218 4.009-1.767-1.72 4.01-.212.494.506.177 1.728.603-1.671 3.49-.149.312.239.249 1.106 1.162H2.5V3.166l1.162 1.107.25.239.31-.149 3.487-1.67z"
      stroke="#6C707E"
    />
  </svg>
);

const ToolWindowTestSparkDark: FC<SvgProps> = ({
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
      d="m8.322 4.475.177.513.498-.218 4.009-1.767-1.72 4.01-.212.494.506.177 1.728.603-1.671 3.49-.149.312.239.249 1.106 1.162H2.5V3.166l1.162 1.107.25.239.31-.149 3.487-1.67z"
      stroke="#CED0D6"
    />
  </svg>
);

export const ToolWindowTestSpark: FC<ToolWindowTestSparkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowTestSparkLight : ToolWindowTestSparkDark;

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
