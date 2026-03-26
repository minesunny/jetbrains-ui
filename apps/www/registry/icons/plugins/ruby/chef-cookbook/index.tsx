import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChefCookbookProps = IconProps;

const ChefCookbookLight: React.FC<SvgProps> = ({
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
      d="M10.089 1.317 9.64 2.749A5.51 5.51 0 0 1 13.41 7h1.52a7.01 7.01 0 0 0-4.84-5.683M5.912 14.683A7 7 0 0 1 1 8h1.5a5.5 5.5 0 0 0 3.859 5.251zM8 5a3 3 0 0 0-2.599 4.5l1.3-.75A1.5 1.5 0 0 1 8 6.5zM9.118 9h1.711a3 3 0 0 1-1.934 1.864l-.447-1.432c.261-.082.492-.233.67-.432"
      fill="#E66D17"
    />
    <path
      d="M8 1a7 7 0 0 0-6.684 4.912l1.433.447A5.5 5.5 0 0 1 7.999 2.5zM13.409 9a5.5 5.5 0 0 1-5.41 4.5V15a7 7 0 0 0 6.93-6zM10.829 7H9.118c-.179-.2-.41-.35-.67-.432l.447-1.432c.902.281 1.62.977 1.934 1.864M6.983 9.103l-1.016 1.104A3 3 0 0 0 8 11V9.5c-.392 0-.75-.15-1.017-.397"
      fill="#6C707E"
    />
    <path
      d="M8 11.5A3.5 3.5 0 0 0 11.355 9h1.544A5.002 5.002 0 0 1 3 8a5 5 0 0 1 9.9-1h-1.544A3.502 3.502 0 0 0 4.5 8 3.5 3.5 0 0 0 8 11.5"
      fill="#6C707E"
    />
  </svg>
);

const ChefCookbookDark: React.FC<SvgProps> = ({
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
      d="M10.089 1.317 9.64 2.749A5.51 5.51 0 0 1 13.41 7h1.52a7.01 7.01 0 0 0-4.84-5.683M5.912 14.683A7 7 0 0 1 1 8h1.5a5.5 5.5 0 0 0 3.859 5.251zM8 5a3 3 0 0 0-2.599 4.5l1.3-.75A1.5 1.5 0 0 1 8 6.5zM9.118 9h1.711a3 3 0 0 1-1.934 1.864l-.447-1.432c.261-.082.492-.233.67-.432"
      fill="#E08855"
    />
    <path
      d="M8 1a7 7 0 0 0-6.684 4.912l1.433.447A5.5 5.5 0 0 1 7.999 2.5zM13.409 9a5.5 5.5 0 0 1-5.41 4.5V15a7 7 0 0 0 6.93-6zM10.829 7H9.118c-.179-.2-.41-.35-.67-.432l.447-1.432c.902.281 1.62.977 1.934 1.864M6.983 9.103l-1.016 1.104A3 3 0 0 0 8 11V9.5c-.392 0-.75-.15-1.017-.397"
      fill="#CED0D6"
    />
    <path
      d="M8 11.5A3.5 3.5 0 0 0 11.355 9h1.544A5.002 5.002 0 0 1 3 8a5 5 0 0 1 9.9-1h-1.544A3.502 3.502 0 0 0 4.5 8 3.5 3.5 0 0 0 8 11.5"
      fill="#CED0D6"
    />
  </svg>
);

export const ChefCookbook: React.FC<ChefCookbookProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChefCookbookLight : ChefCookbookDark;

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
