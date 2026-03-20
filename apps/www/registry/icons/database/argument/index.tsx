import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ArgumentProps = IconProps;

const ArgumentLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF4EB" stroke="#E66D17" />
    <path
      d="M11.593 10.961 10.477 8l1.024-2.961h-.96l-.602 1.797C9.658 5.66 8.763 4.9 7.556 4.9 5.908 4.9 4.77 6.16 4.77 8s1.139 3.1 2.787 3.1c1.218 0 2.118-.773 2.39-1.968l.635 1.83zm-3.886-.734C6.56 10.227 5.78 9.319 5.78 8s.78-2.227 1.926-2.227c1.093 0 1.839.908 1.839 2.227s-.746 2.227-1.84 2.227"
      fill="#E66D17"
    />
  </svg>
);

const ArgumentDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#45322B" stroke="#C77D55" />
    <path
      d="M11.593 10.961 10.477 8l1.024-2.961h-.96l-.602 1.797C9.658 5.66 8.763 4.9 7.556 4.9 5.908 4.9 4.77 6.16 4.77 8s1.139 3.1 2.787 3.1c1.218 0 2.118-.773 2.39-1.968l.635 1.83zm-3.886-.734C6.56 10.227 5.78 9.319 5.78 8s.78-2.227 1.926-2.227c1.093 0 1.839.908 1.839 2.227s-.746 2.227-1.84 2.227"
      fill="#C77D55"
    />
  </svg>
);

export const Argument: FC<ArgumentProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ArgumentLight : ArgumentDark;

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
