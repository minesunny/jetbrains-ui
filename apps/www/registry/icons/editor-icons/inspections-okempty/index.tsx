import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InspectionsOKEmptyProps = IconProps;

const InspectionsOKEmptyLight: FC<SvgProps> = ({
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
      clipRule="evenodd"
      d="M13.202 5.146a.5.5 0 0 1 0 .708L6.5 12.556 2.842 8.847a.5.5 0 0 1-.004-.698l.805-.834a.5.5 0 0 1 .717-.003L6.5 9.5 11.646 4.3a.5.5 0 0 1 .71-.001z"
      stroke="#369650"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InspectionsOKEmptyDark: FC<SvgProps> = ({
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
      clipRule="evenodd"
      d="M13.202 5.146a.5.5 0 0 1 0 .708L6.5 12.556 2.842 8.847a.5.5 0 0 1-.004-.698l.805-.834a.5.5 0 0 1 .717-.003L6.5 9.5 11.646 4.3a.5.5 0 0 1 .71-.001z"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InspectionsOKEmpty: FC<InspectionsOKEmptyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InspectionsOKEmptyLight : InspectionsOKEmptyDark;

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
