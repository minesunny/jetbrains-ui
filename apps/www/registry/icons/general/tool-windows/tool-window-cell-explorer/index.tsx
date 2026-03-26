import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowCellExplorerProps = IconProps;

const ToolWindowCellExplorerLight: FC<SvgProps> = ({
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
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#6C707E"
    />
    <path
      d="M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H4v6H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V12h3q.002-.519.126-1H5V5h6v3.126q.481-.124 1-.126V5h1.5a.5.5 0 0 0 0-1H12V2.5a.5.5 0 0 0-1 0V4H5z"
      fill="#6C707E"
    />
  </svg>
);

const ToolWindowCellExplorerDark: FC<SvgProps> = ({
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
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#CED0D6"
    />
    <path
      d="M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H4v6H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V12h3q.002-.519.126-1H5V5h6v3.126q.481-.124 1-.126V5h1.5a.5.5 0 0 0 0-1H12V2.5a.5.5 0 0 0-1 0V4H5z"
      fill="#CED0D6"
    />
  </svg>
);

export const ToolWindowCellExplorer: FC<ToolWindowCellExplorerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowCellExplorerLight : ToolWindowCellExplorerDark;

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
