import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PySparkProps = IconProps;

const PySparkLight: React.FC<SvgProps> = ({
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
      d="M14 11.5V11h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1M12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#FFAF0F"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 13.5v.5h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1m1.5-2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#4682FA"
    />
    <path
      d="m1.45 8.84 3.795 1.607.813 4.01a.7.7 0 0 0 1.209.327L8 13.961v-2.483l-.683.792-.662-3.033-2.919-1.168L6.47 6.495l.244-3.099 2.35 2.06 3.071-.746-1.28 2.848.278.442h1.794l-.232-.366 1.727-3.695a.7.7 0 0 0-.786-.98l-4.047.9L6.52 1.18a.7.7 0 0 0-1.157.46l-.379 3.957-3.599 1.985a.7.7 0 0 0 .065 1.257"
      fill="#E25A1C"
    />
  </svg>
);

const PySparkDark: React.FC<SvgProps> = ({
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
      d="M14 11.5V11h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1M12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#F2C55C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 13.5v.5h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1m1.5-2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#548AF7"
    />
    <path
      d="m1.45 8.84 3.795 1.607.813 4.01a.7.7 0 0 0 1.209.327L8 13.961v-2.483l-.683.792-.662-3.033-2.919-1.168L6.47 6.495l.244-3.099 2.35 2.06 3.071-.746-1.28 2.848.278.442h1.794l-.232-.366 1.727-3.695a.7.7 0 0 0-.786-.98l-4.047.9L6.52 1.18a.7.7 0 0 0-1.157.46l-.379 3.957-3.599 1.985a.7.7 0 0 0 .065 1.257"
      fill="#E25A1C"
    />
  </svg>
);

export const PySpark: React.FC<PySparkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PySparkLight : PySparkDark;

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
