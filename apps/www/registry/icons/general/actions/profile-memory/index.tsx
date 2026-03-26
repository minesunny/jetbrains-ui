import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ProfileMemoryProps = IconProps;

const ProfileMemoryLight: FC<SvgProps> = ({
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
        d="M4 4v8a2 2 0 0 0 2 2h2v-4a2 2 0 0 1 2-2h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
        fill="#EBECF0"
      />
      <path d="M11.5 11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" fill="#6C707E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15v-5a1 1 0 0 1 1-1h3.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 1 .293.707V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1m1-5v5h1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1v-3.586L13.586 10zm3 5h-1v-1h1z"
        fill="#6C707E"
      />
      <path
        d="M6 2a2 2 0 0 0-2 2H1.5a.5.5 0 0 0 0 1H4V4v8-1H1.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2 2h2v-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h1V5h2.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2-2z"
        fill="#6C707E"
      />
      <path d="M1.5 7.5a.5.5 0 0 0 0 1H4v-1z" fill="#6C707E" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ProfileMemoryDark: FC<SvgProps> = ({
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
        d="M4 4v8a2 2 0 0 0 2 2h2v-4a2 2 0 0 1 2-2h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
        fill="#43454A"
      />
      <path d="M11.5 11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" fill="#CED0D6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15v-5a1 1 0 0 1 1-1h3.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 1 .293.707V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1m1-5v5h1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1v-3.586L13.586 10zm3 5h-1v-1h1z"
        fill="#CED0D6"
      />
      <path
        d="M6 2a2 2 0 0 0-2 2H1.5a.5.5 0 0 0 0 1H4V4v8-1H1.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2 2h2v-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h1V5h2.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2-2z"
        fill="#CED0D6"
      />
      <path d="M1.5 7.5a.5.5 0 0 0 0 1H4v-1z" fill="#CED0D6" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ProfileMemory: FC<ProfileMemoryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ProfileMemoryLight : ProfileMemoryDark;

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
