import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HelpersFolderClosedProps = IconProps;

const HelpersFolderClosedLight: React.FC<SvgProps> = ({
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
      d="M10.992 9.7H12v2.615h2.997V9.7h1.008V16h-1.008v-2.745H12V16h-1.008z"
      fill="#3574F0"
    />
    <path
      d="M2.633 2C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h7.36V8.7H15V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2z"
      fill="#EBECF0"
    />
    <path
      d="M6.122 3H2.633C2.405 3 2 3.258 2 3.867v8.266c0 .609.405.867.633.867h7.36v1h-7.36C1.731 14 1 13.164 1 12.133V3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.7h-1V6a1 1 0 0 0-1-1H8.04zM15 9.7v.78l-.002-.001V9.7z"
      fill="#6C707E"
    />
  </svg>
);

const HelpersFolderClosedDark: React.FC<SvgProps> = ({
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
      d="M10.992 9.7H12v2.615h2.997V9.7h1.008V16h-1.008v-2.745H12V16h-1.008z"
      fill="#548AF7"
    />
    <path
      d="M2.633 2C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h7.36V8.7H15V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2z"
      fill="#43454A"
    />
    <path
      d="M6.122 3H2.633C2.405 3 2 3.258 2 3.867v8.266c0 .609.405.867.633.867h7.36v1h-7.36C1.731 14 1 13.164 1 12.133V3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.7h-1V6a1 1 0 0 0-1-1H8.04zM15 9.7v.78l-.002-.001V9.7z"
      fill="#CED0D6"
    />
  </svg>
);

export const HelpersFolderClosed: React.FC<HelpersFolderClosedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? HelpersFolderClosedLight : HelpersFolderClosedDark;

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
