import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JunitProps = IconProps;

const JunitLight: FC<SvgProps> = ({
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
      d="M1.385 8.42a.6.6 0 0 1 0-.81l4.071-4.466a.6.6 0 0 1 1.044.404v8.91a.6.6 0 0 1-1.042.405z"
      fill="#FFF7F7"
      stroke="#DB3B4B"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.628 7.595a.6.6 0 0 1 0 .81l-4.086 4.458a.6.6 0 0 1-1.042-.406V3.543a.6.6 0 0 1 1.043-.406z"
      fill="#F2FCF3"
      stroke="#208A3C"
      strokeLinecap="round"
    />
  </svg>
);

const JunitDark: FC<SvgProps> = ({
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
    <g
      clipPath="url(#a)"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
    >
      <path
        d="M1.385 8.42a.6.6 0 0 1 0-.81l4.071-4.466a.6.6 0 0 1 1.044.404v8.91a.6.6 0 0 1-1.042.405z"
        fill="#5E3838"
        stroke="#DB5C5C"
      />
      <path
        d="M14.628 7.595a.6.6 0 0 1 0 .81l-4.086 4.458a.6.6 0 0 1-1.042-.406V3.543a.6.6 0 0 1 1.043-.406z"
        fill="#375239"
        stroke="#57965C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Junit: FC<JunitProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JunitLight : JunitDark;

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
