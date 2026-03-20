import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ApiProps = IconProps;

const ApiLight: FC<SvgProps> = ({
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
      d="m2.25 13 1.561-8.995h1.53L6.933 13H5.745L4.66 5.933l-.083-.598-.084.598L3.471 13zm.9-2.345v-.99h2.782v.99zM8 12.995V4h1.774q.762 0 1.252.29.497.288.735.873.24.585.239 1.471 0 .894-.245 1.478-.24.585-.748.88-.504.29-1.284.29h-.555v3.713zm1.761-4.774q.535 0 .768-.379.24-.386.239-1.208 0-.81-.239-1.188-.232-.386-.768-.386h-.593v3.161zM13 13V4.005h1V13z"
      fill="#3574F0"
    />
  </svg>
);

const ApiDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#548AF7">
      <path d="m2.25 13 1.561-8.995h1.53L6.933 13H5.745L4.66 5.933l-.083-.598-.084.598L3.471 13zm.9-2.345v-.99h2.782v.99zM8 12.995V4h1.774q.762 0 1.252.29.497.288.735.873.24.585.239 1.471 0 .894-.245 1.478-.24.585-.748.88-.504.29-1.284.29h-.555v3.713zm1.761-4.774q.535 0 .768-.379.24-.386.239-1.208 0-.81-.239-1.188-.232-.386-.768-.386h-.593v3.161zM13 13V4.005h1V13z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Api: FC<ApiProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ApiLight : ApiDark;

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
