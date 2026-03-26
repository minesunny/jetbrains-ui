import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PersistenceIdProps = IconProps;

const PersistenceIdLight: React.FC<SvgProps> = ({
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
      d="M14.777 6.24A3.5 3.5 0 0 0 12 12.663v1.082a7 7 0 1 1 2.777-7.505"
      fill="#FFF4EB"
    />
    <path
      d="M8.162 5q.678 0 1.196.247.523.248.81.725.288.471.288 1.115v3.939h-1.03V8.824h.265q0 .73-.258 1.259a1.84 1.84 0 0 1-.73.805q-.478.276-1.133.276-.57 0-1.024-.219a1.76 1.76 0 0 1-.707-.603 1.53 1.53 0 0 1-.259-.874q0-.465.242-.857.24-.39.667-.638.425-.253.96-.31l1.564-.168a.43.43 0 0 0 .293-.149q.11-.132.11-.391l.068 1.236-1.845.207q-.282.03-.506.161a.93.93 0 0 0-.34.351.94.94 0 0 0-.12.472q0 .28.15.5.149.217.413.339.264.12.61.12.471 0 .822-.189a1.35 1.35 0 0 0 .552-.535q.195-.345.195-.793V6.967q0-.328-.16-.575A1.06 1.06 0 0 0 8.804 6a1.5 1.5 0 0 0-.66-.138q-.375 0-.679.133-.3.127-.483.345a.95.95 0 0 0-.218.466H5.712q.07-.518.397-.926.333-.413.868-.644A2.9 2.9 0 0 1 8.162 5"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
    <path
      d="M11.86 12.593a6 6 0 1 1 1.799-6.59c.394.018.77.1 1.118.237A7 7 0 1 0 12 13.745v-1.082z"
      fill="#E66D17"
    />
  </svg>
);

const PersistenceIdDark: React.FC<SvgProps> = ({
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
      d="M14.777 6.24A3.5 3.5 0 0 0 12 12.663v1.082a7 7 0 1 1 2.777-7.505"
      fill="#45322B"
    />
    <path
      d="M8.162 5q.678 0 1.196.247.523.248.81.725.288.471.288 1.115v3.939h-1.03V8.824h.265q0 .73-.258 1.259a1.84 1.84 0 0 1-.73.805q-.478.276-1.133.276-.57 0-1.024-.219a1.76 1.76 0 0 1-.707-.603 1.53 1.53 0 0 1-.259-.874q0-.465.242-.857.24-.39.667-.638.425-.253.96-.31l1.564-.168a.43.43 0 0 0 .293-.149q.11-.132.11-.391l.068 1.236-1.845.207q-.282.03-.506.161a.93.93 0 0 0-.34.351.94.94 0 0 0-.12.472q0 .28.15.5.149.217.413.339.264.12.61.12.471 0 .822-.189a1.35 1.35 0 0 0 .552-.535q.195-.345.195-.793V6.967q0-.328-.16-.575A1.06 1.06 0 0 0 8.804 6a1.5 1.5 0 0 0-.66-.138q-.375 0-.679.133-.3.127-.483.345a.95.95 0 0 0-.218.466H5.712q.07-.518.397-.926.333-.413.868-.644A2.9 2.9 0 0 1 8.162 5"
      fill="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
    <path
      d="M11.86 12.593a6 6 0 1 1 1.799-6.59c.394.018.77.1 1.118.237A7 7 0 1 0 12 13.745v-1.082z"
      fill="#C77D55"
    />
  </svg>
);

export const PersistenceId: React.FC<PersistenceIdProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PersistenceIdLight : PersistenceIdDark;

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
