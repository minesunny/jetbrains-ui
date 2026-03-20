import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AddSDKProps = IconProps;

const AddSDKLight: FC<SvgProps> = ({
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
      d="M9.05 12a2.5 2.5 0 0 1 2.45-2h2a.5.5 0 0 1 .5.5v.5h1.5a.5.5 0 0 1 0 1H14v2h1.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-.5.5h-2a2.5 2.5 0 0 1-2.45-2H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm.95 1.5v-1a1.5 1.5 0 0 1 1.5-1.5H13v4h-1.5a1.5 1.5 0 0 1-1.5-1.5"
      fill="#3574F0"
    />
    <path
      d="M8 1.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H7v4.5a1.5 1.5 0 0 1 1-1.415V8h5.5a.5.5 0 0 0 0-1H8z"
      fill="#6C707E"
    />
  </svg>
);

const AddSDKDark: FC<SvgProps> = ({
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
      d="M9.05 12a2.5 2.5 0 0 1 2.45-2h2a.5.5 0 0 1 .5.5v.5h1.5a.5.5 0 0 1 0 1H14v2h1.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-.5.5h-2a2.5 2.5 0 0 1-2.45-2H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm.95 1.5v-1a1.5 1.5 0 0 1 1.5-1.5H13v4h-1.5a1.5 1.5 0 0 1-1.5-1.5"
      fill="#548AF7"
    />
    <path
      d="M8 1.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H7v4.5a1.5 1.5 0 0 1 1-1.415V8h5.5a.5.5 0 0 0 0-1H8z"
      fill="#CED0D6"
    />
  </svg>
);

export const AddSDK: FC<AddSDKProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AddSDKLight : AddSDKDark;

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
