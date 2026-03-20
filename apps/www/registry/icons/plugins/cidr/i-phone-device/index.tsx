import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type IPhoneDeviceProps = IconProps;

const IPhoneDeviceLight: React.FC<SvgProps> = ({
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
      d="M11 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.168q.058.219.148.469.11.293.23.531H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.069q-.27.07-.516.19l-.004.002q-.255.123-.48.295V3a1 1 0 0 0-1-1"
      fill="#6C707E"
    />
    <path
      d="M14.874 14.455q-.16.367-.383.677-.302.423-.493.586-.295.267-.634.274-.243 0-.586-.137a1.7 1.7 0 0 0-.63-.137q-.303 0-.649.137-.346.138-.56.144-.325.015-.648-.281-.207-.177-.516-.607a4.2 4.2 0 0 1-.546-1.065A3.8 3.8 0 0 1 9 12.776q0-.703.31-1.212a1.8 1.8 0 0 1 1.526-.888q.257 0 .678.155.42.155.538.155.088 0 .597-.183.48-.17.81-.141.9.07 1.35.698-.804.479-.796 1.34.008.67.494 1.113.219.205.493.318-.06.168-.126.324M13.5 9.14q0 .525-.39.98c-.313.36-.691.567-1.102.534a1 1 0 0 1-.008-.132c0-.337.149-.696.413-.99q.198-.224.503-.372.305-.145.576-.16.009.07.008.14"
      fill="#6C707E"
    />
  </svg>
);

const IPhoneDeviceDark: React.FC<SvgProps> = ({
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
      d="M11 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.168q.058.219.148.469.11.293.23.531H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.069q-.27.07-.516.19l-.004.002q-.255.123-.48.295V3a1 1 0 0 0-1-1"
      fill="#CED0D6"
    />
    <path
      d="M14.874 14.455q-.16.367-.383.677-.302.423-.493.586-.295.267-.634.274-.243 0-.586-.137a1.7 1.7 0 0 0-.63-.137q-.303 0-.649.137-.346.138-.56.144-.325.015-.648-.281-.207-.177-.516-.607a4.2 4.2 0 0 1-.546-1.065A3.8 3.8 0 0 1 9 12.776q0-.703.31-1.212a1.8 1.8 0 0 1 1.526-.888q.257 0 .678.155.42.155.538.155.088 0 .597-.183.48-.17.81-.141.9.07 1.35.698-.804.479-.796 1.34.008.67.494 1.113.219.205.493.318-.06.168-.126.324M13.5 9.14q0 .525-.39.98c-.313.36-.691.567-1.102.534a1 1 0 0 1-.008-.132c0-.337.149-.696.413-.99q.198-.224.503-.372.305-.145.576-.16.009.07.008.14"
      fill="#CED0D6"
    />
  </svg>
);

export const IPhoneDevice: React.FC<IPhoneDeviceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IPhoneDeviceLight : IPhoneDeviceDark;

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
