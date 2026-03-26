import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type NewUIProps = IconProps;

const NewUILight: FC<SvgProps> = ({
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
        d="M7.5 2.565c.493 1.573 1.172 2.817 2.155 3.793.983.974 2.237 1.65 3.828 2.141-1.591.492-2.845 1.168-3.828 2.143-.983.976-1.662 2.219-2.155 3.792-.493-1.573-1.171-2.816-2.154-3.792-.983-.975-2.237-1.65-3.83-2.143 1.593-.492 2.847-1.166 3.83-2.141s1.66-2.22 2.154-3.793Z"
        stroke="#6C707E"
      />
      <path
        d="M12.994 4.907a1.905 1.905 0 1 0 0-3.81 1.905 1.905 0 0 0 0 3.81"
        fill="#6C707E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const NewUIDark: FC<SvgProps> = ({
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
        d="M7.5 2.565c.493 1.573 1.172 2.817 2.155 3.793.983.974 2.237 1.65 3.828 2.141-1.591.492-2.845 1.168-3.828 2.143-.983.976-1.662 2.219-2.155 3.792-.493-1.573-1.171-2.816-2.154-3.792-.983-.975-2.237-1.65-3.83-2.143 1.593-.492 2.847-1.166 3.83-2.141s1.66-2.22 2.154-3.793Z"
        stroke="#CED0D6"
      />
      <path
        d="M12.994 4.907a1.905 1.905 0 1 0 0-3.81 1.905 1.905 0 0 0 0 3.81"
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

export const NewUI: FC<NewUIProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NewUILight : NewUIDark;

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
