import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ConsoleShowPlanProps = IconProps;

const ConsoleShowPlanLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2v2h-3a.5.5 0 0 0-.5.5V10H1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H5V8h6v2H9.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H12V7.5a.5.5 0 0 0-.5-.5h-3V5h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM6 4V1h4v3zm-4 7v3h4v-3zm8 0v3h4v-3z"
      fill="#6C707E"
    />
  </svg>
);

const ConsoleShowPlanDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2v2h-3a.5.5 0 0 0-.5.5V10H1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H5V8h6v2H9.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H12V7.5a.5.5 0 0 0-.5-.5h-3V5h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM6 4V1h4v3zm-4 7v3h4v-3zm8 0v3h4v-3z"
      fill="#CED0D6"
    />
  </svg>
);

export const ConsoleShowPlan: FC<ConsoleShowPlanProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ConsoleShowPlanLight : ConsoleShowPlanDark;

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
