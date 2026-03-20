import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AspectJProps = IconProps;

const AspectJLight: FC<SvgProps> = ({
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
      d="m3.603 13 1.92-10.5h1.815L9.295 13H7.863L6.528 4.773l-.098-.698-.097.697L5.073 13zm1.11-2.722V9.1h3.36v1.178z"
      fill="#E66D17"
    />
    <path
      d="M8.805 13v-1.305h.757q.405 0 .608-.33.21-.338.21-1.005V2.5h1.41v7.95q0 .848-.24 1.418-.24.561-.713.847-.465.285-1.162.285z"
      fill="#E66D17"
    />
  </svg>
);

const AspectJDark: FC<SvgProps> = ({
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
      d="m3.603 13 1.92-10.5h1.815L9.295 13H7.863L6.528 4.773l-.098-.698-.097.697L5.073 13zm1.11-2.722V9.1h3.36v1.178z"
      fill="#E08855"
    />
    <path
      d="M8.805 13v-1.305h.757q.405 0 .608-.33.21-.338.21-1.005V2.5h1.41v7.95q0 .848-.24 1.418-.24.561-.713.847-.465.285-1.162.285z"
      fill="#E08855"
    />
  </svg>
);

export const AspectJ: FC<AspectJProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AspectJLight : AspectJDark;

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
