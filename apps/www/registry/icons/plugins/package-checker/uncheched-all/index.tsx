import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type UnchechedAllProps = IconProps;

const UnchechedAllLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 4.818 12 1 3 4.818v7.95c0 2.649 1.339 4.586 3.049 6.118 1.257 1.128 2.789 2.094 4.194 2.98.467.296.92.581 1.344.861L12 23l.413-.273c.424-.28.877-.565 1.344-.86 1.405-.887 2.937-1.854 4.194-2.98 1.71-1.533 3.049-3.47 3.049-6.119zm-9.587 7.933q-.154.345-.154.794v.337h1.44v-.267q0-.28.12-.513.118-.238.3-.428.188-.196.503-.477.441-.372.713-.674.273-.31.47-.766.195-.464.195-1.081.008-.794-.357-1.398a2.37 2.37 0 0 0-1.02-.94Q12.956 7 12.076 7q-.923 0-1.623.365A2.6 2.6 0 0 0 9.378 8.39Q9 9.058 9 9.942h1.517q0-.47.19-.828a1.33 1.33 0 0 1 .538-.562q.35-.204.81-.204.414 0 .728.183.322.176.497.498.18.324.181.738a1.6 1.6 0 0 1-.146.695q-.14.309-.35.534-.203.225-.56.555a10 10 0 0 0-.608.597q-.223.253-.385.603m1.489 2.451h-1.79V17h1.79z"
      fill="#4682FA"
    />
  </svg>
);

const UnchechedAllDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 4.818 12 1 3 4.818v7.95c0 2.649 1.339 4.586 3.049 6.118 1.257 1.128 2.789 2.094 4.194 2.98.467.296.92.581 1.344.861L12 23l.413-.273c.424-.28.877-.565 1.344-.86 1.405-.887 2.937-1.854 4.194-2.98 1.71-1.533 3.049-3.47 3.049-6.119zm-9.587 7.933q-.154.345-.154.794v.337h1.44v-.267q0-.28.12-.513.118-.238.3-.428.188-.196.503-.477.441-.372.713-.674.273-.31.47-.766.195-.464.195-1.081.008-.794-.357-1.398a2.37 2.37 0 0 0-1.02-.94Q12.956 7 12.076 7q-.923 0-1.623.365A2.6 2.6 0 0 0 9.378 8.39Q9 9.058 9 9.942h1.517q0-.47.19-.828a1.33 1.33 0 0 1 .538-.562q.35-.204.81-.204.414 0 .728.183.322.176.497.498.18.324.181.738a1.6 1.6 0 0 1-.146.695q-.14.309-.35.534-.203.225-.56.555a10 10 0 0 0-.608.597q-.223.253-.385.603m1.489 2.451h-1.79V17h1.79z"
      fill="#548AF7"
    />
  </svg>
);

export const UnchechedAll: React.FC<UnchechedAllProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UnchechedAllLight : UnchechedAllDark;

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
