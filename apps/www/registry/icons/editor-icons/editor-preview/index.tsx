import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type EditorPreviewProps = IconProps;

const EditorPreviewLight: FC<SvgProps> = ({
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
    <rect x="1" y="3" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="1" y="6" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="1" y="9" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="1" y="12" width="5" height="1" rx=".5" fill="#6C707E" />
    <path
      d="M10 2.5h3A1.5 1.5 0 0 1 14.5 4v8a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 8.5 12V4A1.5 1.5 0 0 1 10 2.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const EditorPreviewDark: FC<SvgProps> = ({
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
    <rect x="1" y="3" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="1" y="6" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="1" y="9" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="1" y="12" width="5" height="1" rx=".5" fill="#CED0D6" />
    <path
      d="M10 2.5h3A1.5 1.5 0 0 1 14.5 4v8a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 8.5 12V4A1.5 1.5 0 0 1 10 2.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const EditorPreview: FC<EditorPreviewProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EditorPreviewLight : EditorPreviewDark;

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
