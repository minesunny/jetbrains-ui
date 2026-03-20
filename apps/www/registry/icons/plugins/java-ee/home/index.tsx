import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HomeProps = IconProps;

const HomeLight: React.FC<SvgProps> = ({
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
      d="M12.161 8.632a.5.5 0 0 1 .678 0l2.5 2.305a.5.5 0 0 1 .161.368v3.694a.5.5 0 0 1-.5.501h-5a.5.5 0 0 1-.5-.501v-3.694c0-.14.059-.274.161-.368z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path
      d="M14.978 8.564Q14.999 8.285 15 8a7 7 0 1 0-7 7v-3.695c0-.559.234-1.093.645-1.472l2.5-2.304a2 2 0 0 1 2.71 0z"
      fill="#F2FCF3"
    />
    <path
      d="M14.978 8.564Q14.999 8.285 15 8a7 7 0 1 0-7 7v-1a6 6 0 1 1 5.99-6.346z"
      fill="#208A3C"
    />
    <path
      d="M8 11.5H6v-1h1.5v-5H6v-1h4v1H8.5v4.482c-.32.363-.5.834-.5 1.323z"
      fill="#208A3C"
    />
  </svg>
);

const HomeDark: React.FC<SvgProps> = ({
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
      d="M12.161 8.632a.5.5 0 0 1 .678 0l2.5 2.305a.5.5 0 0 1 .161.368v3.694a.5.5 0 0 1-.5.501h-5a.5.5 0 0 1-.5-.501v-3.694c0-.14.059-.274.161-.368z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path
      d="M14.978 8.564Q14.999 8.285 15 8a7 7 0 1 0-7 7v-3.695c0-.559.234-1.093.645-1.472l2.5-2.304a2 2 0 0 1 2.71 0z"
      fill="#253627"
    />
    <path
      d="M14.978 8.564Q14.999 8.285 15 8a7 7 0 1 0-7 7v-1a6 6 0 1 1 5.99-6.346z"
      fill="#57965C"
    />
    <path
      d="M8 11.5H6v-1h1.5v-5H6v-1h4v1H8.5v4.482c-.32.363-.5.834-.5 1.323z"
      fill="#57965C"
    />
  </svg>
);

export const Home: React.FC<HomeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HomeLight : HomeDark;

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
