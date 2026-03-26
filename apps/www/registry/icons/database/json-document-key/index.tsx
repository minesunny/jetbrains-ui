import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JsonDocumentKeyProps = IconProps;

const JsonDocumentKeyLight: FC<SvgProps> = ({
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
      d="M12 3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.035A3.5 3.5 0 0 1 12 10.337z"
      fill="#EBECF0"
    />
    <path d="M7 2.414 4.414 5H6a1 1 0 0 0 1-1z" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v8.05a3.5 3.5 0 0 0-1-.713V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.035c.051.353.154.69.302 1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#6C707E"
    />
  </svg>
);

const JsonDocumentKeyDark: FC<SvgProps> = ({
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
      d="M12 3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.035A3.5 3.5 0 0 1 12 10.337z"
      fill="#43454A"
    />
    <path d="M7 2.414 4.414 5H6a1 1 0 0 0 1-1z" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v8.05a3.5 3.5 0 0 0-1-.713V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.035c.051.353.154.69.302 1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.95 14a2.5 2.5 0 1 1 0-1H16v1h-1v2h-1v-2zm-2.45 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#CED0D6"
    />
  </svg>
);

export const JsonDocumentKey: FC<JsonDocumentKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JsonDocumentKeyLight : JsonDocumentKeyDark;

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
