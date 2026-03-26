import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OptionProps = IconProps;

const OptionLight: FC<SvgProps> = ({
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
      d="M3 2a1 1 0 0 1 1-1h4.118l2 1H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9.882l-2-1H4v5.5a.5.5 0 0 1-1 0zm1 6h4.118l2 1H12V3H9.882l-2-1H4z"
      fill="#6C707E"
    />
    <path d="M8.118 8H4V2h3.882l2 1H12v6h-1.882z" fill="#EBECF0" />
  </svg>
);

const OptionDark: FC<SvgProps> = ({
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
      d="M3 2a1 1 0 0 1 1-1h4.118l2 1H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9.882l-2-1H4v5.5a.5.5 0 0 1-1 0zm1 6h4.118l2 1H12V3H9.882l-2-1H4z"
      fill="#CED0D6"
    />
    <path d="M8.118 8H4V2h3.882l2 1H12v6h-1.882z" fill="#43454A" />
  </svg>
);

export const Option: FC<OptionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OptionLight : OptionDark;

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
