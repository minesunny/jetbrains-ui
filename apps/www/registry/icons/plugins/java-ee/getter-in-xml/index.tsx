import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GetterInXmlProps = IconProps;

const GetterInXmlLight: React.FC<SvgProps> = ({
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
      fill="#FFF7F7"
    />
    <path
      d="M14.563 10.441A7 7 0 1 0 7.878 15l-.939-.938a1.5 1.5 0 0 1-.157-.185A6 6 0 1 1 13.77 9.65z"
      fill="#DB3B4B"
    />
    <path
      d="M8.124 10.754h-.618V7.438c0-.82-.431-1.33-1.177-1.33-.815 0-1.33.573-1.33 1.482v3.164H4V5.372h.962v.877c.32-.64.887-1.003 1.645-1.003.799 0 1.397.397 1.689 1.07.34-.669.958-1.07 1.77-1.07 1.15 0 1.934.825 1.934 2.113V9h-.999V7.438c0-.82-.425-1.33-1.177-1.33-.804 0-1.33.573-1.33 1.482v2.795z"
      fill="#DB3B4B"
    />
  </svg>
);

const GetterInXmlDark: React.FC<SvgProps> = ({
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
      fill="#402929"
    />
    <path
      d="M14.563 10.441A7 7 0 1 0 7.878 15l-.939-.938a1.5 1.5 0 0 1-.157-.185A6 6 0 1 1 13.77 9.65z"
      fill="#DB5C5C"
    />
    <path
      d="M8.124 10.754h-.618V7.438c0-.82-.431-1.33-1.177-1.33-.815 0-1.33.573-1.33 1.482v3.164H4V5.372h.962v.877c.32-.64.887-1.003 1.645-1.003.799 0 1.397.397 1.689 1.07.34-.669.958-1.07 1.77-1.07 1.15 0 1.934.825 1.934 2.113V9h-.999V7.438c0-.82-.425-1.33-1.177-1.33-.804 0-1.33.573-1.33 1.482v2.795z"
      fill="#DB5C5C"
    />
  </svg>
);

export const GetterInXml: React.FC<GetterInXmlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GetterInXmlLight : GetterInXmlDark;

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
