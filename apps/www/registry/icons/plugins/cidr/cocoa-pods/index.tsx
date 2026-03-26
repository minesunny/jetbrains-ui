import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CocoaPodsProps = IconProps;

const CocoaPodsLight: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M5.47 10.61q.669.39 1.498.39.706 0 1.308-.295a2.7 2.7 0 0 0 .975-.788 2.07 2.07 0 0 0 .427-1.071H8.6q-.075.303-.31.568-.234.266-.582.428Q7.36 10 6.964 10q-.514 0-.925-.258a1.8 1.8 0 0 1-.64-.714 2.25 2.25 0 0 1-.232-1.033q0-.577.233-1.033a1.8 1.8 0 0 1 .639-.714q.41-.257.925-.257.394 0 .743.161.349.162.581.432.237.266.311.577h1.08a2.1 2.1 0 0 0-.428-1.08 2.65 2.65 0 0 0-.975-.792 2.9 2.9 0 0 0-1.308-.299q-.83 0-1.498.39a2.77 2.77 0 0 0-1.045 1.075q-.378.685-.378 1.54t.378 1.54q.377.684 1.045 1.075M10.18 6.037l.934-.359.892 2.326.005.002-.002.005v.001h-.001l-.893 2.328-.934-.359.757-1.97z"
      fill="#DB3B4B"
    />
  </svg>
);

const CocoaPodsDark: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M5.47 10.61q.669.39 1.498.39.706 0 1.308-.295a2.7 2.7 0 0 0 .975-.788 2.07 2.07 0 0 0 .427-1.071H8.6q-.075.303-.31.568-.234.266-.582.428Q7.36 10 6.964 10q-.514 0-.925-.258a1.8 1.8 0 0 1-.64-.714 2.25 2.25 0 0 1-.232-1.033q0-.577.233-1.033a1.8 1.8 0 0 1 .639-.714q.41-.257.925-.257.394 0 .743.161.349.162.581.432.237.266.311.577h1.08a2.1 2.1 0 0 0-.428-1.08 2.65 2.65 0 0 0-.975-.792 2.9 2.9 0 0 0-1.308-.299q-.83 0-1.498.39a2.77 2.77 0 0 0-1.045 1.075q-.378.685-.378 1.54t.378 1.54q.377.684 1.045 1.075M10.18 6.037l.934-.359.892 2.326.005.002-.002.005v.001h-.001l-.893 2.328-.934-.359.757-1.97z"
      fill="#DB5C5C"
    />
  </svg>
);

export const CocoaPods: React.FC<CocoaPodsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CocoaPodsLight : CocoaPodsDark;

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
