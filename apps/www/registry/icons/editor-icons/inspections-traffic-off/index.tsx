import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InspectionsTrafficOffProps = IconProps;

const InspectionsTrafficOffLight: FC<SvgProps> = ({
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
      d="M9.5 5A1.5 1.5 0 0 0 8 6.5V7H7v1h1v4h1V8h1.25V7H9v-.5a.5.5 0 0 1 .5-.5h.75V5z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#6C707E"
    />
    <path
      d="M12 6.5A1.5 1.5 0 0 1 13.5 5h.75v1h-.75a.5.5 0 0 0-.5.5V7h1.25v1H13v4h-1V8h-1V7h1z"
      fill="#6C707E"
    />
  </svg>
);

const InspectionsTrafficOffDark: FC<SvgProps> = ({
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
      d="M9.5 5A1.5 1.5 0 0 0 8 6.5V7H7v1h1v4h1V8h1.25V7H9v-.5a.5.5 0 0 1 .5-.5h.75V5z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#CED0D6"
    />
    <path
      d="M12 6.5A1.5 1.5 0 0 1 13.5 5h.75v1h-.75a.5.5 0 0 0-.5.5V7h1.25v1H13v4h-1V8h-1V7h1z"
      fill="#CED0D6"
    />
  </svg>
);

export const InspectionsTrafficOff: FC<InspectionsTrafficOffProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InspectionsTrafficOffLight : InspectionsTrafficOffDark;

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
