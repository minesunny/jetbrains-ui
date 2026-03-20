import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowPlatformIOProps = IconProps;

const ToolWindowPlatformIOLight: FC<SvgProps> = ({
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
      d="M5.115 8.177a.745.745 0 1 0 .77.744.76.76 0 0 0-.77-.744M10.996 8.154a.745.745 0 1 0 .77.745.76.76 0 0 0-.77-.745"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m5.393 2.513.412 1.497a9.5 9.5 0 0 1 2.19-.304 9.3 9.3 0 0 1 2.18.27l.415-1.44a.81.81 0 0 1-.41-.7.844.844 0 0 1 1.69 0 .83.83 0 0 1-.77.813l-.421 1.468C12.278 4.622 14 5.746 14 8.249 13.988 11.744 9.11 15 7.995 15 6.878 14.999 2.035 11.812 2 8.249 2 5.784 3.742 4.655 5.348 4.14l-.412-1.499a.83.83 0 0 1-.841-.817.845.845 0 0 1 1.69 0 .81.81 0 0 1-.392.69m-2.438 4.7c-.62 2.04 3.034 4.897 3.7 4.09h.002c.951-1.47.55-4.89-1.937-5.378a1.62 1.62 0 0 0-1.765 1.288m8.486-1.289c-2.487.49-2.887 3.909-1.937 5.378.667.806 4.32-2.049 3.699-4.089a1.62 1.62 0 0 0-1.762-1.289"
      fill="#6C707E"
    />
  </svg>
);

const ToolWindowPlatformIODark: FC<SvgProps> = ({
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
      d="M5.115 8.177a.745.745 0 1 0 .77.744.76.76 0 0 0-.77-.744M10.996 8.154a.745.745 0 1 0 .77.745.76.76 0 0 0-.77-.745"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m5.393 2.513.412 1.497a9.5 9.5 0 0 1 2.19-.304 9.3 9.3 0 0 1 2.18.27l.415-1.44a.81.81 0 0 1-.41-.7.844.844 0 0 1 1.69 0 .83.83 0 0 1-.77.813l-.421 1.468C12.278 4.622 14 5.746 14 8.249 13.988 11.744 9.11 15 7.995 15 6.878 14.999 2.035 11.812 2 8.249 2 5.784 3.742 4.655 5.348 4.14l-.412-1.499a.83.83 0 0 1-.841-.817.845.845 0 0 1 1.69 0 .81.81 0 0 1-.392.69m-2.438 4.7c-.62 2.04 3.034 4.897 3.7 4.09h.002c.951-1.47.55-4.89-1.937-5.378a1.62 1.62 0 0 0-1.765 1.288m8.486-1.289c-2.487.49-2.887 3.909-1.937 5.378.667.806 4.32-2.049 3.699-4.089a1.62 1.62 0 0 0-1.762-1.289"
      fill="#CED0D6"
    />
  </svg>
);

export const ToolWindowPlatformIO: FC<ToolWindowPlatformIOProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowPlatformIOLight : ToolWindowPlatformIODark;

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
