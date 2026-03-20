import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JpaToolWindowProps = IconProps;

const JpaToolWindowLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13.996C16 15.1 14.21 16 12 16s-4-.9-4-2.004V9.999C8 8.895 9.79 8 12 8s4 .895 4 1.999zm-1-3.997v.005l-.007.019a.4.4 0 0 1-.07.108c-.092.108-.263.248-.542.387-.558.279-1.398.48-2.381.48s-1.823-.201-2.381-.48c-.279-.14-.45-.28-.541-.387A.4.4 0 0 1 9 10.004L9 10v-.006l.007-.019a.4.4 0 0 1 .07-.108c.092-.108.263-.248.542-.387C10.177 9.201 11.017 9 12 9s1.823.202 2.381.48c.279.14.45.28.541.387a.4.4 0 0 1 .077.127zm0 1.322c-.733.415-1.805.676-3 .676s-2.267-.261-3-.676v.682l.007.019c.008.02.027.056.07.108.092.108.263.247.542.387.558.278 1.398.48 2.381.48s1.823-.202 2.381-.48c.279-.14.45-.28.541-.387a.4.4 0 0 0 .077-.127l.001-.006v-.676m0 1.998c-.733.415-1.805.677-3 .677s-2.267-.262-3-.677v.688l.007.019c.008.02.027.056.07.108.092.108.263.248.542.387.558.278 1.398.48 2.381.48s1.823-.201 2.381-.48c.279-.14.45-.28.541-.387a.4.4 0 0 0 .077-.127L15 14v-.682"
      fill="#6C707E"
    />
    <path
      d="M12 3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.233a8 8 0 0 0-1-.177V4a1 1 0 0 0-1-1"
      fill="#6C707E"
    />
  </svg>
);

const JpaToolWindowDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13.996C16 15.1 14.21 16 12 16s-4-.9-4-2.004V9.999C8 8.895 9.79 8 12 8s4 .895 4 1.999zm-1-3.997v.005l-.007.019a.4.4 0 0 1-.07.108c-.092.108-.263.248-.542.387-.558.279-1.398.48-2.381.48s-1.823-.201-2.381-.48c-.279-.14-.45-.28-.541-.387A.4.4 0 0 1 9 10.004L9 10v-.006l.007-.019a.4.4 0 0 1 .07-.108c.092-.108.263-.248.542-.387C10.177 9.201 11.017 9 12 9s1.823.202 2.381.48c.279.14.45.28.541.387a.4.4 0 0 1 .077.127zm0 1.322c-.733.415-1.805.676-3 .676s-2.267-.261-3-.676v.682l.007.019c.008.02.027.056.07.108.092.108.263.247.542.387.558.278 1.398.48 2.381.48s1.823-.202 2.381-.48c.279-.14.45-.28.541-.387a.4.4 0 0 0 .077-.127l.001-.006v-.676m0 1.998c-.733.415-1.805.677-3 .677s-2.267-.262-3-.677v.688l.007.019c.008.02.027.056.07.108.092.108.263.248.542.387.558.278 1.398.48 2.381.48s1.823-.201 2.381-.48c.279-.14.45-.28.541-.387a.4.4 0 0 0 .077-.127L15 14v-.682"
      fill="#CED0D6"
    />
    <path
      d="M12 3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.233a8 8 0 0 0-1-.177V4a1 1 0 0 0-1-1"
      fill="#CED0D6"
    />
  </svg>
);

export const JpaToolWindow: FC<JpaToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JpaToolWindowLight : JpaToolWindowDark;

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
