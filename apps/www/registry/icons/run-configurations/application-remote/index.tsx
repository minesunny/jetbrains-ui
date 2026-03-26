import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ApplicationRemoteProps = IconProps;

const ApplicationRemoteLight: FC<SvgProps> = ({
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
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#3574F0"
    />
    <path
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-3.5a1.5 1.5 0 0 0 0 3h.379l-2 2H3a2 2 0 0 1-2-2z"
      fill="#EBECF0"
    />
    <path d="M4 5.5h1M7 5.5h1" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="M13 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7.879l-1 1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1V4a1 1 0 0 0-1-1"
      fill="#6C707E"
    />
  </svg>
);

const ApplicationRemoteDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
        fill="#548AF7"
      />
      <path
        d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-3.5a1.5 1.5 0 0 0 0 3h.379l-2 2H3a2 2 0 0 1-2-2z"
        fill="#43454A"
      />
      <path d="M4 5.5h1M7 5.5h1" stroke="#CED0D6" strokeLinecap="round" />
      <path
        d="M13 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7.879l-1 1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1V4a1 1 0 0 0-1-1"
        fill="#CED0D6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ApplicationRemote: FC<ApplicationRemoteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ApplicationRemoteLight : ApplicationRemoteDark;

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
