import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PersistenceAttributeProps = IconProps;

const PersistenceAttributeLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF4EB" stroke="#E66D17" />
    <path
      d="M8.162 5q.678 0 1.196.247.523.248.81.725.288.471.288 1.115v3.939h-1.03V8.824h.265q0 .73-.258 1.259a1.84 1.84 0 0 1-.73.805q-.478.276-1.133.276-.57 0-1.024-.219a1.76 1.76 0 0 1-.707-.603 1.53 1.53 0 0 1-.259-.874q0-.465.242-.857.24-.39.667-.638.425-.253.96-.31l1.564-.168a.43.43 0 0 0 .293-.149q.11-.132.11-.391l.068 1.236-1.845.207q-.282.03-.506.161a.93.93 0 0 0-.34.351.94.94 0 0 0-.12.472q0 .28.15.5.149.217.413.339.264.12.61.12.471 0 .822-.189a1.35 1.35 0 0 0 .552-.535q.195-.345.195-.793V6.967q0-.328-.16-.575A1.06 1.06 0 0 0 8.804 6a1.5 1.5 0 0 0-.66-.138q-.375 0-.679.133-.3.127-.483.345a.95.95 0 0 0-.218.466H5.712q.07-.518.397-.926.333-.413.868-.644A2.9 2.9 0 0 1 8.162 5"
      fill="#E66D17"
    />
  </svg>
);

const PersistenceAttributeDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#45322B" stroke="#C77D55" />
    <path
      d="M8.162 5q.678 0 1.196.247.523.248.81.725.288.471.288 1.115v3.939h-1.03V8.824h.265q0 .73-.258 1.259a1.84 1.84 0 0 1-.73.805q-.478.276-1.133.276-.57 0-1.024-.219a1.76 1.76 0 0 1-.707-.603 1.53 1.53 0 0 1-.259-.874q0-.465.242-.857.24-.39.667-.638.425-.253.96-.31l1.564-.168a.43.43 0 0 0 .293-.149q.11-.132.11-.391l.068 1.236-1.845.207q-.282.03-.506.161a.93.93 0 0 0-.34.351.94.94 0 0 0-.12.472q0 .28.15.5.149.217.413.339.264.12.61.12.471 0 .822-.189a1.35 1.35 0 0 0 .552-.535q.195-.345.195-.793V6.967q0-.328-.16-.575A1.06 1.06 0 0 0 8.804 6a1.5 1.5 0 0 0-.66-.138q-.375 0-.679.133-.3.127-.483.345a.95.95 0 0 0-.218.466H5.712q.07-.518.397-.926.333-.413.868-.644A2.9 2.9 0 0 1 8.162 5"
      fill="#C77D55"
    />
  </svg>
);

export const PersistenceAttribute: React.FC<PersistenceAttributeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PersistenceAttributeLight : PersistenceAttributeDark;

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
