import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SharedProps = IconProps;

const SharedLight: FC<SvgProps> = ({
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
      d="M14.5 11a1.5 1.5 0 1 0-1.489-1.315l-2.47 1.235a1.5 1.5 0 1 0 0 2.16l2.47 1.235q-.01.09-.011.185a1.5 1.5 0 1 0 .459-1.08l-2.47-1.235a1.5 1.5 0 0 0 0-.37l2.47-1.235c.27.26.636.42 1.041.42M10 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#3574F0"
    />
  </svg>
);

const SharedDark: FC<SvgProps> = ({
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
      d="M14.5 11a1.5 1.5 0 1 0-1.489-1.315l-2.47 1.235a1.5 1.5 0 1 0 0 2.16l2.47 1.235q-.01.09-.011.185a1.5 1.5 0 1 0 .459-1.08l-2.47-1.235a1.5 1.5 0 0 0 0-.37l2.47-1.235c.27.26.636.42 1.041.42M10 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#3574F0"
    />
  </svg>
);

export const Shared: FC<SharedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SharedLight : SharedDark;

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
