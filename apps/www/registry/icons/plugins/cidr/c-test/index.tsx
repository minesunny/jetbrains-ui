import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CTestProps = IconProps;

const CTestLight: React.FC<SvgProps> = ({
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
    <path d="m8 .52.768 7.385-3.281 2.856-.01-.004L.615 15z" fill="url(#a)" />
    <path
      d="M12.326 9.004 8 .52l.987 9.493.642-.617c.562-.54 1.359-.488 1.87-.066a1.44 1.44 0 0 1 .827-.326"
      fill="url(#b)"
    />
    <path
      d="m7.96 15.001-1.03-.992a1.4 1.4 0 0 1 0-2.018l.44-.423-1.893-.811L.615 15z"
      fill="url(#c)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#55A76A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#E55765"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.134"
        y1="-5.259"
        x2="-7.39"
        y2="1.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7777E9" />
        <stop offset="1" stopColor="#01009A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="4.409"
        y1="8.158"
        x2="15.942"
        y2="13.878"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B83535" />
        <stop offset="1" stopColor="#FD5B5A" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="18.339"
        y1="13.225"
        x2="14.309"
        y2="6.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01B202" />
        <stop offset="1" stopColor="#0FE90F" />
      </linearGradient>
    </defs>
  </svg>
);

const CTestDark: React.FC<SvgProps> = ({
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
    <path d="m8 .52.768 7.385-3.281 2.856-.01-.004L.615 15z" fill="url(#a)" />
    <path
      d="M12.326 9.004 8 .52l.987 9.493.642-.617c.562-.54 1.359-.488 1.87-.066a1.44 1.44 0 0 1 .827-.326"
      fill="url(#b)"
    />
    <path
      d="m7.96 15.001-1.03-.992a1.4 1.4 0 0 1 0-2.018l.44-.423-1.893-.811L.615 15z"
      fill="url(#c)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#DB5C5C"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.134"
        y1="-5.259"
        x2="-7.39"
        y2="1.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7777E9" />
        <stop offset="1" stopColor="#01009A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="4.409"
        y1="8.158"
        x2="15.942"
        y2="13.878"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B83535" />
        <stop offset="1" stopColor="#FD5B5A" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="18.339"
        y1="13.225"
        x2="14.309"
        y2="6.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01B202" />
        <stop offset="1" stopColor="#0FE90F" />
      </linearGradient>
    </defs>
  </svg>
);

export const CTest: React.FC<CTestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CTestLight : CTestDark;

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
