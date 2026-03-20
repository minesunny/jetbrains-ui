import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AutoscrollToSourceProps = IconProps;

const AutoscrollToSourceLight: FC<SvgProps> = ({
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
      d="M13.5 6a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V3h10v2.5a.5.5 0 0 0 .5.5"
      fill="#6C707E"
    />
    <path
      d="M5.146 8.353a.5.5 0 0 1 0-.707l2.5-2.5a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.707.708L8.5 6.707V13.5a.5.5 0 1 1-1 0V6.707L5.854 8.353a.5.5 0 0 1-.708 0"
      fill="#6C707E"
    />
  </svg>
);

const AutoscrollToSourceDark: FC<SvgProps> = ({
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
      d="M13.5 6a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V3h10v2.5a.5.5 0 0 0 .5.5"
      fill="#CED0D6"
    />
    <path
      d="M5.146 8.353a.5.5 0 0 1 0-.707l2.5-2.5a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.707.708L8.5 6.707V13.5a.5.5 0 1 1-1 0V6.707L5.854 8.353a.5.5 0 0 1-.708 0"
      fill="#CED0D6"
    />
  </svg>
);

export const AutoscrollToSource: FC<AutoscrollToSourceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AutoscrollToSourceLight : AutoscrollToSourceDark;

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
