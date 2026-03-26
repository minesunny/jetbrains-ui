import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RerunAutomaticallyProps = IconProps;

const RerunAutomaticallyLight: FC<SvgProps> = ({
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
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#208A3C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#F2FCF3"
    />
    <path
      d="M10.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V4a5 5 0 0 1 1.999 4.115l.959.598Q14 8.362 14 8a6 6 0 0 0-2.682-5H13.5a.5.5 0 0 0 0-1zM6 10.5a.5.5 0 0 0-1 0V12a5.002 5.002 0 0 1 2.09-8.918.5.5 0 0 0-.18-.983A6.002 6.002 0 0 0 4.682 13H2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3"
      fill="#6C707E"
    />
  </svg>
);

const RerunAutomaticallyDark: FC<SvgProps> = ({
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
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#57965C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#253627"
    />
    <path
      d="M10.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V4a5 5 0 0 1 1.999 4.115l.959.598Q14 8.362 14 8a6 6 0 0 0-2.682-5H13.5a.5.5 0 0 0 0-1zM6 10.5a.5.5 0 0 0-1 0V12a5.002 5.002 0 0 1 2.09-8.918.5.5 0 0 0-.18-.983A6.002 6.002 0 0 0 4.682 13H2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3"
      fill="#CED0D6"
    />
  </svg>
);

export const RerunAutomatically: FC<RerunAutomaticallyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RerunAutomaticallyLight : RerunAutomaticallyDark;

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
