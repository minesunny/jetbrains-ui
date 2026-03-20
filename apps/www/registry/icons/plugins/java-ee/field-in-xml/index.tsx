import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FieldInXmlProps = IconProps;

const FieldInXmlLight: React.FC<SvgProps> = ({
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
      d="M10.854 10.146a.5.5 0 0 1 0 .708L8.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m1.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
    <path
      d="M14.563 10.441A7 7 0 1 0 7.878 15l-.939-.938a1.5 1.5 0 0 1 0-2.122l2.5-2.5C9.732 9.146 10.116 9 10.5 9h2c.383 0 .768.146 1.06.44z"
      fill="#FFF4EB"
    />
    <path
      d="M14.563 10.441A7 7 0 1 0 7.878 15l-.939-.938a1.5 1.5 0 0 1-.157-.185A6 6 0 1 1 13.77 9.65z"
      fill="#E66D17"
    />
    <path
      d="M7.257 11.621V7.327H6.12V6.43h1.137V5.406C7.257 4.57 7.874 4 8.777 4H9.88v.874H8.874c-.354 0-.6.246-.6.606v.95H9.83v.897H8.274v3.277z"
      fill="#E66D17"
    />
  </svg>
);

const FieldInXmlDark: React.FC<SvgProps> = ({
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
      d="M10.854 10.146a.5.5 0 0 1 0 .708L8.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m1.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
    <path
      d="M14.563 10.441A7 7 0 1 0 7.878 15l-.939-.938a1.5 1.5 0 0 1 0-2.122l2.5-2.5C9.732 9.146 10.116 9 10.5 9h2c.383 0 .768.146 1.06.44z"
      fill="#45322B"
    />
    <path
      d="M14.563 10.441A7 7 0 1 0 7.878 15l-.939-.938a1.5 1.5 0 0 1-.157-.185A6 6 0 1 1 13.77 9.65z"
      fill="#C77D55"
    />
    <path
      d="M7.257 11.621V7.327H6.12V6.43h1.137V5.406C7.257 4.57 7.874 4 8.777 4H9.88v.874H8.874c-.354 0-.6.246-.6.606v.95H9.83v.897H8.274v3.277z"
      fill="#C77D55"
    />
  </svg>
);

export const FieldInXml: React.FC<FieldInXmlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FieldInXmlLight : FieldInXmlDark;

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
