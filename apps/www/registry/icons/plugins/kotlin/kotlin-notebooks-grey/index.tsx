import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinNotebooksGreyProps = IconProps;

const KotlinNotebooksGreyLight: React.FC<SvgProps> = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#834DF0"
    />
    <path
      d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 1-2-2"
      fill="#EBECF0"
    />
    <path
      d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h-1V5.4L10.873 8H10q-.24 0-.463.054l3.45-4.217A1 1 0 0 0 12 3H4a1 1 0 0 0-1 1v6.599l3.613-4.416a.5.5 0 0 1 .803.039l1.43 2.144c-.287.204-.519.48-.666.804L6.96 7.339l-3.947 4.823A1 1 0 0 0 4 13h4v1H4a2 2 0 0 1-2-2"
      fill="#6C707E"
    />
  </svg>
);

const KotlinNotebooksGreyDark: React.FC<SvgProps> = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#A571E6"
    />
    <path
      d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 1-2-2"
      fill="#43454A"
    />
    <path
      d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h-1V5.4L10.873 8H10q-.24 0-.463.054l3.45-4.217A1 1 0 0 0 12 3H4a1 1 0 0 0-1 1v6.599l3.613-4.416a.5.5 0 0 1 .803.039l1.43 2.144c-.287.204-.519.48-.666.804L6.96 7.339l-3.947 4.823A1 1 0 0 0 4 13h4v1H4a2 2 0 0 1-2-2"
      fill="#CED0D6"
    />
  </svg>
);

export const KotlinNotebooksGrey: React.FC<KotlinNotebooksGreyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? KotlinNotebooksGreyLight : KotlinNotebooksGreyDark;

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
