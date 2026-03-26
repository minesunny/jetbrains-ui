import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantLocalProps = IconProps;

const CodeAssistantLocalLight: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#FFF4EB"
      stroke="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 9.2V5.992L6 6V5h2v4.2c0 .8.5.801 1.033.801h.454V11h-.793c-.576 0-1.067-.139-1.318-.416Q7 10.167 7 9.199"
      fill="#E66D17"
    />
  </svg>
);

const CodeAssistantLocalDark: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#45322B"
      stroke="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 9.2V5.992L6 6V5h2v4.2c0 .8.5.801 1.033.801h.454V11h-.793c-.576 0-1.067-.139-1.318-.416Q7 10.167 7 9.199"
      fill="#C77D55"
    />
  </svg>
);

export const CodeAssistantLocal: React.FC<CodeAssistantLocalProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CodeAssistantLocalLight : CodeAssistantLocalDark;

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
