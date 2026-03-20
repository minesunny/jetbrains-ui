import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TransferToolWindowProps = IconProps;

const TransferToolWindowLight: FC<SvgProps> = ({
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
      d="M11.854 3.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L11 4.707V12.5a.5.5 0 0 0 1 0V4.707l2.146 2.147a.5.5 0 0 0 .708-.708zM5 3.5a.5.5 0 0 0-1 0v7.793L1.854 9.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L5 11.293z"
      fill="#6C707E"
    />
  </svg>
);

const TransferToolWindowDark: FC<SvgProps> = ({
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
      d="M11.854 3.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L11 4.707V12.5a.5.5 0 0 0 1 0V4.707l2.146 2.147a.5.5 0 0 0 .708-.708zM5 3.5a.5.5 0 0 0-1 0v7.793L1.854 9.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L5 11.293z"
      fill="#CED0D6"
    />
  </svg>
);

export const TransferToolWindow: FC<TransferToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? TransferToolWindowLight : TransferToolWindowDark;

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
