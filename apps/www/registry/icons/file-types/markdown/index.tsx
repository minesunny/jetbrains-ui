import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MarkdownProps = IconProps;

const MarkdownLight: FC<SvgProps> = ({
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
      d="M12.593 9.944V4.7h1.2v5.244l1.283-1.284.849.849-2.732 2.732-2.732-2.732.848-.849z"
      fill="#3574F0"
    />
    <path
      d="M.5 4.7h2.446l1.708 4.445.109.457.093-.457L6.513 4.7h2.471v7.27H7.141V7.596l.031-.472-1.828 4.844H4.083l-1.77-4.797.03.425v4.372H.5z"
      fill="#3574F0"
    />
  </svg>
);

const MarkdownDark: FC<SvgProps> = ({
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
      d="M12.593 9.944V4.7h1.2v5.244l1.283-1.284.849.849-2.732 2.732-2.732-2.732.848-.849z"
      fill="#548AF7"
    />
    <path
      d="M.5 4.7h2.446l1.708 4.445.109.457.093-.457L6.513 4.7h2.471v7.27H7.141V7.596l.031-.472-1.828 4.844H4.083l-1.77-4.797.03.425v4.372H.5z"
      fill="#548AF7"
    />
  </svg>
);

export const Markdown: FC<MarkdownProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MarkdownLight : MarkdownDark;

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
