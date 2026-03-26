import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type IndexFunUniqueProps = IconProps;

const IndexFunUniqueLight: FC<SvgProps> = ({
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
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M13.225 16.12q-.825 0-1.465-.35a2.5 2.5 0 0 1-.995-.99 2.9 2.9 0 0 1-.355-1.45V9h1.015v4.325q0 .55.225.98t.63.665q.41.235.945.235.525 0 .92-.235.4-.24.62-.665a2.1 2.1 0 0 0 .22-.98V9H16v4.33a2.9 2.9 0 0 1-.355 1.45 2.5 2.5 0 0 1-.98.99q-.625.35-1.44.35"
      fill="#6C707E"
    />
    <path
      d="M6.5 2.5A.5.5 0 0 1 7 2h1a.5.5 0 0 1 .5.5v.974a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zM5 6a.5.5 0 0 0 0 1h2v7H4.5a.5.5 0 0 0 0 1h5.256a3.8 3.8 0 0 1-.296-1H8V6.5a.5.5 0 0 0-.5-.5z"
      fill="#834DF0"
    />
  </svg>
);

const IndexFunUniqueDark: FC<SvgProps> = ({
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
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M13.225 16.12q-.825 0-1.465-.35a2.5 2.5 0 0 1-.995-.99 2.9 2.9 0 0 1-.355-1.45V9h1.015v4.325q0 .55.225.98t.63.665q.41.235.945.235.525 0 .92-.235.4-.24.62-.665a2.1 2.1 0 0 0 .22-.98V9H16v4.33a2.9 2.9 0 0 1-.355 1.45 2.5 2.5 0 0 1-.98.99q-.625.35-1.44.35"
      fill="#CED0D6"
    />
    <path
      d="M6.5 2.5A.5.5 0 0 1 7 2h1a.5.5 0 0 1 .5.5v.974a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zM5 6a.5.5 0 0 0 0 1h2v7H4.5a.5.5 0 0 0 0 1h5.256a3.8 3.8 0 0 1-.296-1H8V6.5a.5.5 0 0 0-.5-.5z"
      fill="#A571E6"
    />
  </svg>
);

export const IndexFunUnique: FC<IndexFunUniqueProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? IndexFunUniqueLight : IndexFunUniqueDark;

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
