import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DataprocToolWindowProps = IconProps;

const DataprocToolWindowLight: FC<SvgProps> = ({
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
      d="M9.248 5.5c0 .482-.228.912-.581 1.186l2.403 1.56A1.499 1.499 0 0 1 10.248 11a1.5 1.5 0 0 1-1.497-1.596l-2.147 1.328a1.5 1.5 0 1 1-.356-2.647V5.5a1.5 1.5 0 1 1 3 0m-1 0a.5.5 0 0 1-.713.452l-.112-.072A.499.499 0 0 1 7.748 5a.5.5 0 0 1 .5.5m-1 3.658v-2.2l1.737 1.126zm-1 .342a.5.5 0 0 1-.2.4l-.077.048a.5.5 0 1 1 .277-.448m4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.417 1a1 1 0 0 1 .869.504l3.428 6a1 1 0 0 1 0 .992l-3.428 6a1 1 0 0 1-.869.504H4.578a1 1 0 0 1-.868-.504l-3.429-6a1 1 0 0 1 0-.992l3.429-6A1 1 0 0 1 4.578 1zM4.578 14 1.149 8l3.429-6h6.84l3.428 6-3.429 6z"
      fill="#6C707E"
    />
  </svg>
);

const DataprocToolWindowDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#CED0D6">
      <path d="M9.248 5.5c0 .482-.228.912-.581 1.186l2.403 1.56A1.499 1.499 0 0 1 10.248 11a1.5 1.5 0 0 1-1.497-1.596l-2.147 1.328a1.5 1.5 0 1 1-.356-2.647V5.5a1.5 1.5 0 1 1 3 0m-1 0a.5.5 0 0 1-.713.452l-.112-.072A.499.499 0 0 1 7.748 5a.5.5 0 0 1 .5.5m-1 3.658v-2.2l1.737 1.126zm-1 .342a.5.5 0 0 1-.2.4l-.077.048a.5.5 0 1 1 .277-.448m4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
      <path d="M11.417 1a1 1 0 0 1 .869.504l3.428 6a1 1 0 0 1 0 .992l-3.428 6a1 1 0 0 1-.869.504H4.578a1 1 0 0 1-.868-.504l-3.429-6a1 1 0 0 1 0-.992l3.429-6A1 1 0 0 1 4.578 1zM4.578 14 1.149 8l3.429-6h6.84l3.428 6-3.429 6z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const DataprocToolWindow: FC<DataprocToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DataprocToolWindowLight : DataprocToolWindowDark;

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
