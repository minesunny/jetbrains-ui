import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InalyQarkusProps = IconProps;

const InalyQarkusLight: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
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
      d="M6 2.667 9 1v3.333L12 6 9 7.667V4.902L6.5 6.29v2.765L9 7.666V11L6 9.334 3 11V7.667l2.5 1.388V6.291L3 4.902v2.765L0 6l3-1.666V1zm0 0L3.518 4.046 6 5.425l2.481-1.38h.001z"
      fill="#6C707E"
    />
  </svg>
);

const InalyQarkusDark: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
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
      d="M6 2.667 9 1v3.333L12 6 9 7.667V4.902L6.5 6.29v2.765L9 7.666V11L6 9.334 3 11V7.667l2.5 1.388V6.291L3 4.902v2.765L0 6l3-1.666V1zm0 0L3.518 4.046 6 5.425l2.481-1.38h.001z"
      fill="#CED0D6"
    />
  </svg>
);

export const InalyQarkus: FC<InalyQarkusProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InalyQarkusLight : InalyQarkusDark;

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
