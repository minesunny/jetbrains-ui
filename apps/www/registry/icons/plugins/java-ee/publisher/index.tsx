import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PublisherProps = IconProps;

const PublisherLight: React.FC<SvgProps> = ({
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
    <path d="M8 12.401 9.064 14H6.934z" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 3.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425"
      fill="#FFF4EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 3.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425m-.707.708c.699.698 1.086 1.467 1.165 2.161a2.2 2.2 0 0 1-.399 1.556L6.112 3.405a2.23 2.23 0 0 1 1.543-.39c.7.074 1.472.453 2.164 1.145m-4.415-.05 4.475 4.475a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591"
      fill="#E66D17"
    />
    <path
      d="M1 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1H2v7h.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zM15 9.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h.5V2h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.416 11.223a.5.5 0 0 0-.832 0l-2 3A.5.5 0 0 0 6 15h4a.5.5 0 0 0 .416-.777zM8 12.4 9.066 14H6.934z"
      fill="#6C707E"
    />
  </svg>
);

const PublisherDark: React.FC<SvgProps> = ({
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
    <path d="M8 12.401 9.064 14H6.934z" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 3.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425"
      fill="#45322B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.526 3.453c1.638 1.638 2.09 3.87.434 5.525s-3.972 1.145-5.538-.42c-1.565-1.566-2.03-3.91-.411-5.53 1.62-1.619 3.878-1.212 5.515.425m-.707.708c.699.698 1.086 1.467 1.165 2.161a2.2 2.2 0 0 1-.399 1.556L6.112 3.405a2.23 2.23 0 0 1 1.543-.39c.7.074 1.472.453 2.164 1.145m-4.415-.05 4.475 4.475a2.26 2.26 0 0 1-1.604.396c-.719-.085-1.49-.477-2.146-1.132-.648-.648-1.032-1.423-1.113-2.148a2.3 2.3 0 0 1 .388-1.591"
      fill="#C77D55"
    />
    <path
      d="M1 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1H2v7h.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zM15 9.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h.5V2h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.416 11.223a.5.5 0 0 0-.832 0l-2 3A.5.5 0 0 0 6 15h4a.5.5 0 0 0 .416-.777zM8 12.4 9.066 14H6.934z"
      fill="#CED0D6"
    />
  </svg>
);

export const Publisher: React.FC<PublisherProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PublisherLight : PublisherDark;

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
