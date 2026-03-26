import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HelmArchiveProps = IconProps;

const HelmArchiveLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.5a.5.5 0 0 0-1 0v.535a3.5 3.5 0 0 0-1.596.662l-.379-.379a.5.5 0 0 0-.707.707l.379.379A3.5 3.5 0 0 0 8.035 11H7.5a.5.5 0 0 0 0 1h.535c.085.593.319 1.138.662 1.596l-.379.379a.5.5 0 1 0 .707.707l.379-.379a3.5 3.5 0 0 0 1.596.662v.535a.5.5 0 0 0 1 0v-.535a3.5 3.5 0 0 0 1.596-.662l.379.379a.5.5 0 0 0 .707-.707l-.379-.379A3.5 3.5 0 0 0 14.965 12h.535a.5.5 0 0 0 0-1h-.535a3.5 3.5 0 0 0-.662-1.596l.379-.379a.5.5 0 0 0-.707-.707l-.379.379A3.5 3.5 0 0 0 12 8.035zm2 4a2.49 2.49 0 0 0-1.121-2.086A2.5 2.5 0 1 0 14 11.5"
      fill="#039BA1"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.6A5.5 5.5 0 0 1 14 6.6V4a2 2 0 0 0-2-2z"
      fill="#EDF3FF"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.6a5.5 5.5 0 0 1-.393-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2.207q.524.149 1 .393V4a2 2 0 0 0-2-2z"
      fill="#3574F0"
    />
    <path
      d="M9.92 6.23a.5.5 0 0 0-.193-.176C9.62 6 9.48 6 9.2 6h-.4c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219C8 6.38 8 6.52 8 6.8v.457A5.5 5.5 0 0 1 9.92 6.23M7.257 8H6.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218C6 8.38 6 8.52 6 8.8v.4c0 .28 0 .42.054.527a.5.5 0 0 0 .176.194A5.5 5.5 0 0 1 7.257 8M6.055 4.273C6 4.38 6 4.52 6 4.8v.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C6.38 6 6.52 6 6.8 6h.4c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219C8 5.62 8 5.48 8 5.2v-.4c0-.28 0-.42-.054-.527a.5.5 0 0 0-.219-.218C7.62 4 7.48 4 7.2 4h-.4c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219"
      fill="#3574F0"
    />
  </svg>
);

const HelmArchiveDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.5a.5.5 0 0 0-1 0v.535a3.5 3.5 0 0 0-1.596.662l-.379-.379a.5.5 0 0 0-.707.707l.379.379A3.5 3.5 0 0 0 8.035 11H7.5a.5.5 0 0 0 0 1h.535c.085.593.319 1.138.662 1.596l-.379.379a.5.5 0 1 0 .707.707l.379-.379a3.5 3.5 0 0 0 1.596.662v.535a.5.5 0 0 0 1 0v-.535a3.5 3.5 0 0 0 1.596-.662l.379.379a.5.5 0 0 0 .707-.707l-.379-.379A3.5 3.5 0 0 0 14.965 12h.535a.5.5 0 0 0 0-1h-.535a3.5 3.5 0 0 0-.662-1.596l.379-.379a.5.5 0 0 0-.707-.707l-.379.379A3.5 3.5 0 0 0 12 8.035zm2 4a2.49 2.49 0 0 0-1.121-2.086A2.5 2.5 0 1 0 14 11.5"
      fill="#24A394"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.6A5.5 5.5 0 0 1 14 6.6V4a2 2 0 0 0-2-2z"
      fill="#25324D"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.6a5.5 5.5 0 0 1-.393-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2.207q.524.149 1 .393V4a2 2 0 0 0-2-2z"
      fill="#548AF7"
    />
    <path
      d="M9.92 6.23a.5.5 0 0 0-.193-.176C9.62 6 9.48 6 9.2 6h-.4c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219C8 6.38 8 6.52 8 6.8v.457A5.5 5.5 0 0 1 9.92 6.23M7.257 8H6.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218C6 8.38 6 8.52 6 8.8v.4c0 .28 0 .42.054.527a.5.5 0 0 0 .176.194A5.5 5.5 0 0 1 7.257 8M6.055 4.273C6 4.38 6 4.52 6 4.8v.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C6.38 6 6.52 6 6.8 6h.4c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219C8 5.62 8 5.48 8 5.2v-.4c0-.28 0-.42-.054-.527a.5.5 0 0 0-.219-.218C7.62 4 7.48 4 7.2 4h-.4c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219"
      fill="#548AF7"
    />
  </svg>
);

export const HelmArchive: React.FC<HelmArchiveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HelmArchiveLight : HelmArchiveDark;

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
