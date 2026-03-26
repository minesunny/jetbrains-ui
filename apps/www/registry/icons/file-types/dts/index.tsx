import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DtsProps = IconProps;

const DtsLight: FC<SvgProps> = ({
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
      d="M12 2a2 2 0 0 1 2 2v3.054a3.6 3.6 0 0 0-3.175 1.002l-2.77 2.77A3.6 3.6 0 0 0 7.055 14H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      fill="#3574F0"
    />
    <path
      d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
      fill="#6C707E"
    />
    <path
      d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
      fill="#6C707E"
    />
    <path
      d="m10.494 8.387-.795.795a1.7 1.7 0 0 1-.38-.204 1.6 1.6 0 0 1-.495-.577 1.7 1.7 0 0 1-.171-.765q0-.496.256-.89a1.75 1.75 0 0 1 .723-.62 2.34 2.34 0 0 1 1.043-.226q.594 0 1.056.218.466.218.726.607.111.165.176.352a3.6 3.6 0 0 0-.946.341.8.8 0 0 0-.106-.24.84.84 0 0 0-.359-.303 1.3 1.3 0 0 0-.534-.107q-.303 0-.535.102a.83.83 0 0 0-.359.291.76.76 0 0 0-.128.436q0 .29.188.505.188.21.492.26zM7.872 6H3.135v1H5v5h1V7h1.872z"
      fill="#fff"
    />
  </svg>
);

const DtsDark: FC<SvgProps> = ({
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
      d="M12 2a2 2 0 0 1 2 2v3.054a3.6 3.6 0 0 0-3.175 1.002l-2.77 2.77A3.6 3.6 0 0 0 7.055 14H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      fill="#548AF7"
    />
    <path
      d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
      fill="#CED0D6"
    />
    <path
      d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
      fill="#CED0D6"
    />
    <path
      d="m10.494 8.387-.795.795a1.7 1.7 0 0 1-.38-.204 1.6 1.6 0 0 1-.495-.577 1.7 1.7 0 0 1-.171-.765q0-.496.256-.89a1.75 1.75 0 0 1 .723-.62 2.34 2.34 0 0 1 1.043-.226q.594 0 1.056.218.466.218.726.607.111.165.176.352a3.6 3.6 0 0 0-.946.341.8.8 0 0 0-.106-.24.84.84 0 0 0-.359-.303 1.3 1.3 0 0 0-.534-.107q-.303 0-.535.102a.83.83 0 0 0-.359.291.76.76 0 0 0-.128.436q0 .29.188.505.188.21.492.26zM7.872 6H3.135v1H5v5h1V7h1.872z"
      fill="#fff"
    />
  </svg>
);

export const Dts: FC<DtsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DtsLight : DtsDark;

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
