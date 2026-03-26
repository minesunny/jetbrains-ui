import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SparkProps = IconProps;

const SparkLight: FC<SvgProps> = ({
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
      d="m1.45 8.84 3.795 1.607.813 4.01a.7.7 0 0 0 1.209.327l2.742-3.078 4.218.48a.7.7 0 0 0 .671-1.07l-2.204-3.482 1.727-3.695a.7.7 0 0 0-.786-.98l-4.047.9L6.52 1.18a.7.7 0 0 0-1.157.46l-.379 3.957-3.599 1.985a.7.7 0 0 0 .065 1.257m2.286-.771 2.92 1.168.661 3.033 2.049-2.376 3.141.3-1.653-2.636 1.28-2.848-3.07.747-2.35-2.06-.245 3.098z"
      fill="#E25A1C"
    />
  </svg>
);

const SparkDark: FC<SvgProps> = ({
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
      d="m1.45 8.84 3.795 1.607.813 4.01a.7.7 0 0 0 1.209.327l2.742-3.078 4.218.48a.7.7 0 0 0 .671-1.07l-2.204-3.482 1.727-3.695a.7.7 0 0 0-.786-.98l-4.047.9L6.52 1.18a.7.7 0 0 0-1.157.46l-.379 3.957-3.599 1.985a.7.7 0 0 0 .065 1.257m2.286-.771 2.92 1.168.661 3.033 2.049-2.376 3.141.3-1.653-2.636 1.28-2.848-3.07.747-2.35-2.06-.245 3.098z"
      fill="#E25A1C"
    />
  </svg>
);

export const Spark: FC<SparkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SparkLight : SparkDark;

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
