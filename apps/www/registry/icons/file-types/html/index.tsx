import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type HtmlProps = IconProps;

const HtmlLight: FC<SvgProps> = ({
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
      d="M6.368 4.974a.6.6 0 1 0-.737-.948L.522 8l5.11 3.974a.6.6 0 0 0 .736-.948L2.477 8zM9.631 4.974a.6.6 0 0 1 .737-.948L15.478 8l-5.11 3.974a.6.6 0 0 1-.737-.948L13.523 8z"
      fill="#369650"
    />
  </svg>
);

const HtmlDark: FC<SvgProps> = ({
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
      d="M6.368 4.974a.6.6 0 1 0-.737-.948L.522 8l5.11 3.974a.6.6 0 0 0 .736-.948L2.477 8zM9.631 4.974a.6.6 0 0 1 .737-.948L15.478 8l-5.11 3.974a.6.6 0 0 1-.737-.948L13.523 8z"
      fill="#57965C"
    />
  </svg>
);

export const Html: FC<HtmlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HtmlLight : HtmlDark;

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
