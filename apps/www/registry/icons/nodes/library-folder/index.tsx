import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type LibraryFolderProps = IconProps;

const LibraryFolderLight: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v3.268a2 2 0 0 0-.177-.091A2 2 0 0 0 13 8h-1a2 2 0 0 0-1.732 1H10a2 2 0 0 0-2 2v3H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      fill="#3574F0"
    />
    <path
      d="M8.094 5H13a1 1 0 0 1 1 1v2.268A2 2 0 0 1 15 10V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H8v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#6C707E"
    />
  </svg>
);

const LibraryFolderDark: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v3.268a2 2 0 0 0-.177-.091A2 2 0 0 0 13 8h-1a2 2 0 0 0-1.732 1H10a2 2 0 0 0-2 2v3H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      fill="#548AF7"
    />
    <path
      d="M8.094 5H13a1 1 0 0 1 1 1v2.268A2 2 0 0 1 15 10V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H8v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#CED0D6"
    />
  </svg>
);

export const LibraryFolder: FC<LibraryFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? LibraryFolderLight : LibraryFolderDark;

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
