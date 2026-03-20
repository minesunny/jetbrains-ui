import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StreamKeyProps = IconProps;

const StreamKeyLight: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#6C707E">
      <path d="M1.124 4.17a.5.5 0 0 1 .705-.046L6.26 8l-4.43 3.876a.5.5 0 0 1-.658-.752L4.74 8 1.17 4.876a.5.5 0 0 1-.047-.705" />
      <path d="M5.624 4.17a.5.5 0 0 1 .705-.046L10.76 8l-4.43 3.876a.5.5 0 0 1-.658-.752L9.24 8 5.67 4.876a.5.5 0 0 1-.047-.705M10.124 4.17a.5.5 0 0 1 .705-.046L15.26 8l-2.897 2.536a3.5 3.5 0 0 0-1.023-.435L13.741 8l-3.57-3.124a.5.5 0 0 1-.047-.705" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const StreamKeyDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#CED0D6">
      <path d="M1.124 4.17a.5.5 0 0 1 .705-.046L6.26 8l-4.43 3.876a.5.5 0 0 1-.658-.752L4.74 8 1.17 4.876a.5.5 0 0 1-.047-.705" />
      <path d="M5.624 4.17a.5.5 0 0 1 .705-.046L10.76 8l-4.43 3.876a.5.5 0 0 1-.658-.752L9.24 8 5.67 4.876a.5.5 0 0 1-.047-.705M10.124 4.17a.5.5 0 0 1 .705-.046L15.26 8l-2.897 2.536a3.5 3.5 0 0 0-1.023-.435L13.741 8l-3.57-3.124a.5.5 0 0 1-.047-.705" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const StreamKey: FC<StreamKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StreamKeyLight : StreamKeyDark;

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
