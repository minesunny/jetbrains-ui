import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinNotebooksPromoProps = IconProps;

const KotlinNotebooksPromoLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M13.558 2.746A2 2 0 0 0 12 2H4a2 2 0 0 0-2 2v7.428l4.42-5.403a.75.75 0 0 1 1.204.06L9.062 8.24z"
      fill="url(#a)"
    />
    <path
      d="M2.443 13.255C2.809 13.71 3.37 14 4 14h8a2 2 0 0 0 2-2V4.574L9.58 9.975a.75.75 0 0 1-1.204-.059L6.94 7.76z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="13.938"
        y1="2.062"
        x2="2.568"
        y2="13.432"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E44857" />
        <stop offset=".47" stopColor="#C711E1" />
        <stop offset="1" stopColor="#7F52FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="13.938"
        y1="2.062"
        x2="2.568"
        y2="13.432"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E44857" />
        <stop offset=".47" stopColor="#C711E1" />
        <stop offset="1" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
  </svg>
);

const KotlinNotebooksPromoDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M13.558 2.746A2 2 0 0 0 12 2H4a2 2 0 0 0-2 2v7.428l4.42-5.403a.75.75 0 0 1 1.204.06L9.062 8.24z"
      fill="url(#a)"
    />
    <path
      d="M2.443 13.255C2.809 13.71 3.37 14 4 14h8a2 2 0 0 0 2-2V4.574L9.58 9.975a.75.75 0 0 1-1.204-.059L6.94 7.76z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="13.938"
        y1="2.062"
        x2="2.568"
        y2="13.432"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E44857" />
        <stop offset=".47" stopColor="#C711E1" />
        <stop offset="1" stopColor="#7F52FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="13.938"
        y1="2.062"
        x2="2.568"
        y2="13.432"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E44857" />
        <stop offset=".47" stopColor="#C711E1" />
        <stop offset="1" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const KotlinNotebooksPromo: React.FC<KotlinNotebooksPromoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? KotlinNotebooksPromoLight : KotlinNotebooksPromoDark;

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
