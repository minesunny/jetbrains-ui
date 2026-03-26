import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SendToTheRightGrayedProps = IconProps;

const SendToTheRightGrayedLight: FC<SvgProps> = ({
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
      d="M9.146 3.147a.5.5 0 0 0 0 .707L12.292 7H2.5a.5.5 0 0 0 0 1h9.794l-3.147 3.147a.5.5 0 1 0 .707.707l4-4a.5.5 0 0 0 0-.707l-4-4a.5.5 0 0 0-.707 0"
      fill="#6C707E"
    />
  </svg>
);

const SendToTheRightGrayedDark: FC<SvgProps> = ({
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
      d="M9.146 3.147a.5.5 0 0 0 0 .707L12.292 7H2.5a.5.5 0 0 0 0 1h9.794l-3.147 3.147a.5.5 0 1 0 .707.707l4-4a.5.5 0 0 0 0-.707l-4-4a.5.5 0 0 0-.707 0"
      fill="#CED0D6"
    />
  </svg>
);

export const SendToTheRightGrayed: FC<SendToTheRightGrayedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SendToTheRightGrayedLight : SendToTheRightGrayedDark;

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
