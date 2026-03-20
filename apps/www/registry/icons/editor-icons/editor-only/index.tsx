import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type EditorOnlyProps = IconProps;

const EditorOnlyLight: FC<SvgProps> = ({
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
    <rect x="3" y="3" width="10" height="1" rx=".5" fill="#6C707E" />
    <rect x="3" y="6" width="10" height="1" rx=".5" fill="#6C707E" />
    <rect x="3" y="9" width="10" height="1" rx=".5" fill="#6C707E" />
    <rect x="3" y="12" width="10" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const EditorOnlyDark: FC<SvgProps> = ({
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
    <rect x="3" y="3" width="10" height="1" rx=".5" fill="#CED0D6" />
    <rect x="3" y="6" width="10" height="1" rx=".5" fill="#CED0D6" />
    <rect x="3" y="9" width="10" height="1" rx=".5" fill="#CED0D6" />
    <rect x="3" y="12" width="10" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const EditorOnly: FC<EditorOnlyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EditorOnlyLight : EditorOnlyDark;

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
