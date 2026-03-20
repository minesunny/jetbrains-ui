import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type StartMemoryProfileProps = IconProps;

const StartMemoryProfileLight: FC<SvgProps> = ({
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
        d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
        fill="#208A3C"
      />
      <path
        d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
        fill="#F2FCF3"
      />
      <path
        d="M4 12V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.492l-.176-.11C10.159 6.342 8 7.54 8 9.502V14H6a2 2 0 0 1-2-2"
        fill="#EBECF0"
      />
      <path
        d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2.5a.5.5 0 0 1 0 1H12v2.492l-.176-.11A2.5 2.5 0 0 0 11 7.049V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v1H6a2 2 0 0 1-2-2zM4 4v1H1.5a.5.5 0 0 1 0-1zM4 12H1.5a.5.5 0 0 1 0-1H4z"
        fill="#6C707E"
      />
      <path
        d="M13.615 8.5h.885a.5.5 0 0 0 0-1h-2.487zM1.5 7.5a.5.5 0 0 0 0 1H4v-1z"
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

const StartMemoryProfileDark: FC<SvgProps> = ({
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
        d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
        fill="#57965C"
      />
      <path
        d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
        fill="#253627"
      />
      <path
        d="M4 12V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.492l-.176-.11C10.159 6.342 8 7.54 8 9.502V14H6a2 2 0 0 1-2-2"
        fill="#43454A"
      />
      <path
        d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2.5a.5.5 0 0 1 0 1H12v2.492l-.176-.11A2.5 2.5 0 0 0 11 7.049V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v1H6a2 2 0 0 1-2-2zM4 4v1H1.5a.5.5 0 0 1 0-1zM4 12H1.5a.5.5 0 0 1 0-1H4z"
        fill="#CED0D6"
      />
      <path
        d="M13.615 8.5h.885a.5.5 0 0 0 0-1h-2.487zM1.5 7.5a.5.5 0 0 0 0 1H4v-1z"
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

export const StartMemoryProfile: FC<StartMemoryProfileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? StartMemoryProfileLight : StartMemoryProfileDark;

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
