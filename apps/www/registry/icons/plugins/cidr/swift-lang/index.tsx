import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SwiftLangProps = IconProps;

const SwiftLangLight: React.FC<SvgProps> = ({
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
      d="M11.56 13.1c-1.65.988-3.917 1.09-6.198.076-1.847-.814-3.38-2.24-4.362-3.869.472.408 1.022.733 1.611 1.018 2.356 1.145 4.712 1.066 6.37.003q-.003 0-.003-.003C6.62 8.452 4.615 6.01 3.122 4.013c-.314-.325-.55-.733-.786-1.1 1.808 1.711 4.677 3.87 5.698 4.48C5.874 5.032 3.947 2.1 4.026 2.182c3.419 3.584 6.602 5.62 6.602 5.62.106.061.187.113.252.158q.105-.272.18-.565c.55-2.077-.078-4.44-1.454-6.394 3.183 1.995 5.07 5.742 4.284 8.878q-.03.127-.067.25.014.017.027.035c1.572 2.036 1.14 4.194.944 3.787-.853-1.729-2.431-1.2-3.234-.85"
      fill="#DB3B4B"
    />
  </svg>
);

const SwiftLangDark: React.FC<SvgProps> = ({
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
      d="M11.56 13.1c-1.65.988-3.917 1.09-6.198.076-1.847-.814-3.38-2.24-4.362-3.869.472.408 1.022.733 1.611 1.018 2.356 1.145 4.712 1.066 6.37.003q-.003 0-.003-.003C6.62 8.452 4.615 6.01 3.122 4.013c-.314-.325-.55-.733-.786-1.1 1.808 1.711 4.677 3.87 5.698 4.48C5.874 5.032 3.947 2.1 4.026 2.182c3.419 3.584 6.602 5.62 6.602 5.62.106.061.187.113.252.158q.105-.272.18-.565c.55-2.077-.078-4.44-1.454-6.394 3.183 1.995 5.07 5.742 4.284 8.878q-.03.127-.067.25.014.017.027.035c1.572 2.036 1.14 4.194.944 3.787-.853-1.729-2.431-1.2-3.234-.85"
      fill="#DB5C5C"
    />
  </svg>
);

export const SwiftLang: React.FC<SwiftLangProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SwiftLangLight : SwiftLangDark;

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
