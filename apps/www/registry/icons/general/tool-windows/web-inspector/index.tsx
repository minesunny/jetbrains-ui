import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WebInspectorProps = IconProps;

const WebInspectorLight: FC<SvgProps> = ({
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
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8a7 7 0 1 0-5.764 6.891 4 4 0 0 1-.818-1.108c-.207.19-.347.217-.418.217-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182A9 9 0 0 1 6.31 11h1.815q.138-.534.41-1H6.132A15 15 0 0 1 6 8c0-.705.047-1.376.133-2h3.734a15 15 0 0 1 .124 2.54c.312-.181.65-.322 1.008-.414L11 8c0-.695-.043-1.366-.124-2h2.783a6 6 0 0 1 .319 2.522c.338.193.646.434.913.714Q15 8.634 15 8M2.341 10h2.783A16 16 0 0 1 5 8c0-.695.043-1.366.124-2H2.341A6 6 0 0 0 2 8c0 .701.12 1.374.341 2m2.948 1H2.803a6.02 6.02 0 0 0 3.487 2.753c-.428-.695-.775-1.644-1.001-2.753m4.4-6H6.311a9 9 0 0 1 .487-1.556c.24-.56.5-.948.737-1.182C7.768 2.032 7.924 2 8 2s.232.032.465.262c.238.234.497.623.737 1.182.191.446.357.97.487 1.556m3.508 0h-2.486c-.226-1.11-.573-2.058-1.001-2.753A6.02 6.02 0 0 1 13.197 5M5.29 5c.226-1.11.573-2.058 1.001-2.753A6.02 6.02 0 0 0 2.803 5z"
      fill="#6C707E"
    />
  </svg>
);

const WebInspectorDark: FC<SvgProps> = ({
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
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8a7 7 0 1 0-5.764 6.891 4 4 0 0 1-.818-1.108c-.207.19-.347.217-.418.217-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182A9 9 0 0 1 6.31 11h1.815q.138-.534.41-1H6.132A15 15 0 0 1 6 8c0-.705.047-1.376.133-2h3.734a15 15 0 0 1 .124 2.54c.312-.181.65-.322 1.008-.414L11 8c0-.695-.043-1.366-.124-2h2.783a6 6 0 0 1 .319 2.522c.338.193.646.434.913.714Q15 8.634 15 8M2.341 10h2.783A16 16 0 0 1 5 8c0-.695.043-1.366.124-2H2.341A6 6 0 0 0 2 8c0 .701.12 1.374.341 2m2.948 1H2.803a6.02 6.02 0 0 0 3.487 2.753c-.428-.695-.775-1.644-1.001-2.753m4.4-6H6.311a9 9 0 0 1 .487-1.556c.24-.56.5-.948.737-1.182C7.768 2.032 7.924 2 8 2s.232.032.465.262c.238.234.497.623.737 1.182.191.446.357.97.487 1.556m3.508 0h-2.486c-.226-1.11-.573-2.058-1.001-2.753A6.02 6.02 0 0 1 13.197 5M5.29 5c.226-1.11.573-2.058 1.001-2.753A6.02 6.02 0 0 0 2.803 5z"
      fill="#CED0D6"
    />
  </svg>
);

export const WebInspector: FC<WebInspectorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WebInspectorLight : WebInspectorDark;

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
