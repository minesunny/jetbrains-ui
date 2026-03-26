import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SiblingInheritedMethodProps = IconProps;

const SiblingInheritedMethodLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#F2FCF3" />
      <path d="M5.5 4v6M4 9.5h3m-3-5h3" stroke="#208A3C" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 7.5a.5.5 0 0 1 .5.5v4.293l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V8a.5.5 0 0 1 .5-.5"
        fill="#6C707E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 6.5A.5.5 0 0 1 11 6V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V6a.5.5 0 0 1-.5.5"
        fill="#DB3B4B"
      />
      <path
        d="M8.44 3.56a1.5 1.5 0 0 1-.392-1.436 5.5 5.5 0 1 0 0 9.751 1.5 1.5 0 0 1 .391-1.436l-.017-.017a4.5 4.5 0 1 1 0-6.844z"
        fill="#208A3C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H14V14H0z" />
      </clipPath>
    </defs>
  </svg>
);

const SiblingInheritedMethodDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#253627" />
      <path d="M5.5 4v6M4 9.5h3m-3-5h3" stroke="#57965C" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 7.5a.5.5 0 0 1 .5.5v4.293l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V8a.5.5 0 0 1 .5-.5"
        fill="#CED0D6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 6.5A.5.5 0 0 1 11 6V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V6a.5.5 0 0 1-.5.5"
        fill="#DB5C5C"
      />
      <path
        d="M8.44 3.56a1.5 1.5 0 0 1-.392-1.436 5.5 5.5 0 1 0 0 9.751 1.5 1.5 0 0 1 .391-1.436l-.017-.017a4.5 4.5 0 1 1 0-6.844z"
        fill="#57965C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H14V14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const SiblingInheritedMethod: FC<SiblingInheritedMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SiblingInheritedMethodLight : SiblingInheritedMethodDark;

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
