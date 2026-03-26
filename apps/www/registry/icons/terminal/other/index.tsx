import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OtherProps = IconProps;

const OtherLight: FC<SvgProps> = ({
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
      d="m1.586 9.414 5 5a2 2 0 0 0 2.828 0l5-5a2 2 0 0 0 0-2.828l-5-5a2 2 0 0 0-2.828 0l-5 5a2 2 0 0 0 0 2.828"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m2.293 8.707 5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414l-5-5 .552-.552-.552.552a1 1 0 0 0-1.414 0l-.707-.707a2 2 0 0 1 2.828 0l5 5a2 2 0 0 1 0 2.828l-5 5a2 2 0 0 1-2.828 0l-5-5a2 2 0 0 1 0-2.828l5-5 .707.707-5 5a1 1 0 0 0 0 1.414"
      fill="#6C707E"
    />
  </svg>
);

const OtherDark: FC<SvgProps> = ({
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
      d="m1.586 9.414 5 5a2 2 0 0 0 2.828 0l5-5a2 2 0 0 0 0-2.828l-5-5a2 2 0 0 0-2.828 0l-5 5a2 2 0 0 0 0 2.828"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m2.293 8.707 5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414l-5-5 .552-.552-.552.552a1 1 0 0 0-1.414 0l-.707-.707a2 2 0 0 1 2.828 0l5 5a2 2 0 0 1 0 2.828l-5 5a2 2 0 0 1-2.828 0l-5-5a2 2 0 0 1 0-2.828l5-5 .707.707-5 5a1 1 0 0 0 0 1.414"
      fill="#CED0D6"
    />
  </svg>
);

export const Other: FC<OtherProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OtherLight : OtherDark;

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
