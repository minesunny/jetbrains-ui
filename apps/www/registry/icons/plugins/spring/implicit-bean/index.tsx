import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ImplicitBeanProps = IconProps;

const ImplicitBeanLight: React.FC<SvgProps> = ({
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
    <path fill="#EBECF0" d="M11 12H15V15H11z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#6C707E"
    />
    <path
      d="M14.831 7.623c-.341-1.443-1.186-2.856-2.41-4.08C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.051 14.037 7.041 15 9 15v-3a2 2 0 0 1 1-1.732V10a3 3 0 0 1 4.831-2.377"
      fill="#F2FCF3"
    />
    <path
      d="M14.831 7.623c-.341-1.443-1.186-2.856-2.41-4.08C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.051 14.037 7.041 15 9 15v-1.002q-.303 0-.606-.037c-1.455-.172-2.955-.953-4.196-2.194-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l6.583 6.583q.13-.108.278-.193V10q0-.316.063-.615L3.846 3.17c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22.88.882 1.52 1.844 1.895 2.81.454.094.87.29 1.223.562"
      fill="#208A3C"
    />
  </svg>
);

const ImplicitBeanDark: React.FC<SvgProps> = ({
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
    <path fill="#43454A" d="M11 12H15V15H11z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#CED0D6"
    />
    <path
      d="M14.831 7.623c-.341-1.443-1.186-2.856-2.41-4.08C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.051 14.037 7.041 15 9 15v-3a2 2 0 0 1 1-1.732V10a3 3 0 0 1 4.831-2.377"
      fill="#253627"
    />
    <path
      d="M14.831 7.623c-.341-1.443-1.186-2.856-2.41-4.08C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.051 14.037 7.041 15 9 15v-1.002q-.303 0-.606-.037c-1.455-.172-2.955-.953-4.196-2.194-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l6.583 6.583q.13-.108.278-.193V10q0-.316.063-.615L3.846 3.17c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22.88.882 1.52 1.844 1.895 2.81.454.094.87.29 1.223.562"
      fill="#57965C"
    />
  </svg>
);

export const ImplicitBean: React.FC<ImplicitBeanProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ImplicitBeanLight : ImplicitBeanDark;

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
