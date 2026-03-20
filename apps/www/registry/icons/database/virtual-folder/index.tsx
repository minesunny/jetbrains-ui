import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type VirtualFolderProps = IconProps;

const VirtualFolderLight: FC<SvgProps> = ({
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
      d="M2.634 2.5h3.488a.5.5 0 0 1 .36.154l1.623 1.692.149.154H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .82-.569 1.366-1.134 1.366H2.634c-.565 0-1.134-.547-1.134-1.366V3.866c0-.768.5-1.297 1.027-1.36z"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
  </svg>
);

const VirtualFolderDark: FC<SvgProps> = ({
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
      d="M2.634 2.5h3.488a.5.5 0 0 1 .36.154l1.623 1.692.149.154H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .82-.569 1.366-1.134 1.366H2.634c-.565 0-1.134-.547-1.134-1.366V3.866c0-.768.5-1.297 1.027-1.36z"
      fill="#2F2936"
      stroke="#A571E6"
    />
  </svg>
);

export const VirtualFolder: FC<VirtualFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? VirtualFolderLight : VirtualFolderDark;

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
