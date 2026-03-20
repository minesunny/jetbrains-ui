import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SbtFileProps = IconProps;

const SbtFileLight: React.FC<SvgProps> = ({
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
      d="m9.249 12.737 2.027 2.045 2.742-.735.733-2.784-2.027-2.045-2.742.735zm1.316 2.75L8.54 13.44a1 1 0 0 1-.257-.958l.733-2.785a1 1 0 0 1 .708-.711l2.742-.735a1 1 0 0 1 .97.262l2.026 2.045a1 1 0 0 1 .257.958l-.733 2.785a1 1 0 0 1-.708.711l-2.742.735a1 1 0 0 1-.97-.262"
      fill="#A46704"
    />
    <path
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v4.1A5 5 0 0 0 8 15H5a2 2 0 0 1-2-2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v4.1a5 5 0 0 0-1-.1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.416q.235.537.584 1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
  </svg>
);

const SbtFileDark: React.FC<SvgProps> = ({
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
      d="m9.249 12.737 2.027 2.045 2.742-.735.733-2.784-2.027-2.045-2.742.735zm1.316 2.75L8.54 13.44a1 1 0 0 1-.257-.958l.733-2.785a1 1 0 0 1 .708-.711l2.742-.735a1 1 0 0 1 .97.262l2.026 2.045a1 1 0 0 1 .257.958l-.733 2.785a1 1 0 0 1-.708.711l-2.742.735a1 1 0 0 1-.97-.262"
      fill="#BA9752"
    />
    <path
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v4.1A5 5 0 0 0 8 15H5a2 2 0 0 1-2-2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v4.1a5 5 0 0 0-1-.1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.416q.235.537.584 1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const SbtFile: React.FC<SbtFileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SbtFileLight : SbtFileDark;

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
