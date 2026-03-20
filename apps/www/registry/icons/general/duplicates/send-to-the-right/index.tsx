import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SendToTheRightProps = IconProps;

const SendToTheRightLight: FC<SvgProps> = ({
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
      d="M7.146 3.147a.5.5 0 0 0 0 .707L10.293 7H2.499a.5.5 0 0 0 0 1h7.794l-3.147 3.147a.5.5 0 1 0 .708.707l4-4a.5.5 0 0 0 0-.707l-4-4a.5.5 0 0 0-.708 0"
      fill="#369650"
    />
    <path
      d="M13.5 11.5v-8"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SendToTheRightDark: FC<SvgProps> = ({
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
      d="M7.146 3.147a.5.5 0 0 0 0 .707L10.293 7H2.499a.5.5 0 0 0 0 1h7.794l-3.147 3.147a.5.5 0 1 0 .708.707l4-4a.5.5 0 0 0 0-.707l-4-4a.5.5 0 0 0-.708 0"
      fill="#57965C"
    />
    <path
      d="M13.5 11.5v-8"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SendToTheRight: FC<SendToTheRightProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SendToTheRightLight : SendToTheRightDark;

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
