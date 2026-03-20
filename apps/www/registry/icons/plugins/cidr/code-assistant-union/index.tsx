import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantUnionProps = IconProps;

const CodeAssistantUnionLight: React.FC<SvgProps> = ({
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
      fill="#FAF5FF"
      stroke="#834DF0"
    />
    <path
      d="M8.018 11.62q-.825 0-1.465-.35a2.5 2.5 0 0 1-.995-.99 2.9 2.9 0 0 1-.355-1.45V4.5h1.015v4.325q0 .55.225.98t.63.665q.41.235.945.235.525 0 .92-.235.4-.24.62-.665.22-.43.22-.98V4.5h1.015v4.33a2.9 2.9 0 0 1-.355 1.45 2.5 2.5 0 0 1-.98.99q-.625.35-1.44.35"
      fill="#834DF0"
    />
  </svg>
);

const CodeAssistantUnionDark: React.FC<SvgProps> = ({
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
      fill="#2F2936"
      stroke="#B589EC"
    />
    <path
      d="M8.018 11.62q-.825 0-1.465-.35a2.5 2.5 0 0 1-.995-.99 2.9 2.9 0 0 1-.355-1.45V4.5h1.015v4.325q0 .55.225.98t.63.665q.41.235.945.235.525 0 .92-.235.4-.24.62-.665.22-.43.22-.98V4.5h1.015v4.33a2.9 2.9 0 0 1-.355 1.45 2.5 2.5 0 0 1-.98.99q-.625.35-1.44.35"
      fill="#B589EC"
    />
  </svg>
);

export const CodeAssistantUnion: React.FC<CodeAssistantUnionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CodeAssistantUnionLight : CodeAssistantUnionDark;

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
