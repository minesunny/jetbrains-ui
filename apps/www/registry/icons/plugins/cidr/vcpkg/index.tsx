import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VCPKGProps = IconProps;

const VCPKGLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M18.547 14.106c-6.65-2.356-11.405.645-14.16 4.099-.105.127-.306.048-.281-.12.16-.915.538-2.706 1.277-4.345 3.004-6.662 10.995-9.901 15.75-9.734s10.45 3.28 8.474 7.672c-1.743 3.884-4.104 4.895-11.06 2.428"
      fill="url(#a)"
    />
    <path
      d="M13.559 13.996c0-.087-.064-.167-.16-.167-2.21.056-6.908 1.52-9.342 5.945a.1.1 0 0 0-.016.056c-.755 5.293 9.156 8.747 9.518-5.834"
      fill="url(#b)"
    />
    <path
      d="M21.482 25.894c6.65 2.356 11.405-.645 14.16-4.099.104-.127.305-.048.281.12-.16.915-.538 2.706-1.277 4.345-2.996 6.662-10.988 9.901-15.742 9.734s-10.45-3.28-8.474-7.673c1.735-3.875 4.104-4.886 11.052-2.427"
      fill="url(#c)"
    />
    <path
      d="M26.426 26.14c0 .088.064.167.16.167 2.21-.055 6.924-1.592 9.358-6.025q.014-.02.016-.055c.755-5.285-9.173-8.667-9.534 5.913"
      fill="url(#d)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.65"
        y1="19.735"
        x2="31.755"
        y2="3.092"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset=".592" stopColor="#F9C438" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="15.286"
        y1="12.175"
        x2="4.655"
        y2="24.73"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset="1" stopColor="#F9C438" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="38.576"
        y1="23.887"
        x2="8.192"
        y2="33.472"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset=".613" stopColor="#F9C438" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="32.25"
        y1="30.913"
        x2="29.396"
        y2="8.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset="1" stopColor="#F9C438" />
      </linearGradient>
    </defs>
  </svg>
);

const VCPKGDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M18.547 14.106c-6.65-2.356-11.405.645-14.16 4.099-.105.127-.306.048-.281-.12.16-.915.538-2.706 1.277-4.345 3.004-6.662 10.995-9.901 15.75-9.734s10.45 3.28 8.474 7.672c-1.743 3.884-4.104 4.895-11.06 2.428"
      fill="url(#a)"
    />
    <path
      d="M13.559 13.996c0-.087-.064-.167-.16-.167-2.21.056-6.908 1.52-9.342 5.945a.1.1 0 0 0-.016.056c-.755 5.293 9.156 8.747 9.518-5.834"
      fill="url(#b)"
    />
    <path
      d="M21.482 25.894c6.65 2.356 11.405-.645 14.16-4.099.104-.127.305-.048.281.12-.16.915-.538 2.706-1.277 4.345-2.996 6.662-10.988 9.901-15.742 9.734s-10.45-3.28-8.474-7.673c1.735-3.875 4.104-4.886 11.052-2.427"
      fill="url(#c)"
    />
    <path
      d="M26.426 26.14c0 .088.064.167.16.167 2.21-.055 6.924-1.592 9.358-6.025q.014-.02.016-.055c.755-5.285-9.173-8.667-9.534 5.913"
      fill="url(#d)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.65"
        y1="19.735"
        x2="31.755"
        y2="3.092"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset=".592" stopColor="#F9C438" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="15.286"
        y1="12.175"
        x2="4.655"
        y2="24.73"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset="1" stopColor="#F9C438" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="38.576"
        y1="23.887"
        x2="8.192"
        y2="33.472"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset=".613" stopColor="#F9C438" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="32.25"
        y1="30.913"
        x2="29.396"
        y2="8.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC950B" />
        <stop offset="1" stopColor="#F9C438" />
      </linearGradient>
    </defs>
  </svg>
);

export const VCPKG: React.FC<VCPKGProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VCPKGLight : VCPKGDark;

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
