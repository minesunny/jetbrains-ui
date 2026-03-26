import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LibValidatorProps = IconProps;

const LibValidatorLight: React.FC<SvgProps> = ({
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
      d="M6.827 11.176a.6.6 0 0 1 0 .848L3.03 15.821a.6.6 0 0 1-.848 0L.176 13.815a.6.6 0 1 1 .848-.848l1.582 1.581 3.372-3.372a.6.6 0 0 1 .849 0"
      fill="#369650"
    />
    <path d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      fill="#3574F0"
    />
    <path
      d="M6.5 10.004c-.44-.025-.889.13-1.225.466L3.38 12.365C.73 9.627-.026 5.595 2.77 2.8 5.603-.034 9.556.678 12.42 3.543c1.793 1.793 2.773 3.993 2.547 6.098A2 2 0 0 0 13 8h-1a2 2 0 0 0-1.732 1H10a2 2 0 0 0-1.735 1.004z"
      fill="#FFF4EB"
    />
    <path
      d="M14.968 9.64c.226-2.104-.754-4.304-2.547-6.097C9.556.678 5.603-.034 2.77 2.8c-2.796 2.796-2.04 6.827.611 9.565l.71-.709C2.917 10.442 2.192 8.98 2.034 7.562c-.144-1.29.174-2.574 1.104-3.684l5.583 5.583c.274-.227.61-.383.978-.439L3.846 3.17c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.235 1.237 1.998 2.633 2.218 3.979.534.281.926.797 1.037 1.41"
      fill="#E66D17"
    />
  </svg>
);

const LibValidatorDark: React.FC<SvgProps> = ({
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
      d="M6.827 11.176a.6.6 0 0 1 0 .848L3.03 15.821a.6.6 0 0 1-.848 0L.176 13.815a.6.6 0 1 1 .848-.848l1.582 1.581 3.372-3.372a.6.6 0 0 1 .849 0"
      fill="#57965C"
    />
    <path d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      fill="#548AF7"
    />
    <path
      d="M6.5 10.004c-.44-.025-.889.13-1.225.466L3.38 12.365C.73 9.627-.026 5.595 2.77 2.8 5.603-.034 9.556.678 12.42 3.543c1.793 1.793 2.773 3.993 2.547 6.098A2 2 0 0 0 13 8h-1a2 2 0 0 0-1.732 1H10a2 2 0 0 0-1.735 1.004z"
      fill="#45322B"
    />
    <path
      d="M14.968 9.64c.226-2.104-.754-4.304-2.547-6.097C9.556.678 5.603-.034 2.77 2.8c-2.796 2.796-2.04 6.827.611 9.565l.71-.709C2.917 10.442 2.192 8.98 2.034 7.562c-.144-1.29.174-2.574 1.104-3.684l5.583 5.583c.274-.227.61-.383.978-.439L3.846 3.17c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.235 1.237 1.998 2.633 2.218 3.979.534.281.926.797 1.037 1.41"
      fill="#C77D55"
    />
  </svg>
);

export const LibValidator: React.FC<LibValidatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LibValidatorLight : LibValidatorDark;

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
