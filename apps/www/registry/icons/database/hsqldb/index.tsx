import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type HsqldbProps = IconProps;

const HsqldbLight: FC<SvgProps> = ({
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
      d="m11.41 11.354 1.233 1.232.003-.003c2.721-2.724 2.805-7.053.187-9.671-2.617-2.618-6.946-2.534-9.67.186-2.37 2.37-2.445 6.139-.166 8.418 1.85 1.85 4.68 2.149 6.949.929a6.3 6.3 0 0 0 1.465-1.09m.137-7.22c1.956 1.956 1.892 5.19-.142 7.224l-1.045-1.045c1.392-1.393 1.436-3.608.097-4.947-1.337-1.338-3.549-1.295-4.942.092l-.005.005c-1.053 1.055-1.085 2.73-.072 3.742s2.688.982 3.742-.07l1.18 1.178c-1.735 1.728-4.487 1.78-6.152.115-1.667-1.667-1.613-4.424.12-6.158 2.035-2.028 5.265-2.09 7.22-.136M9.141 6.959c.585.585.594 1.535.04 2.175v-.002L6.969 6.918c.64-.553 1.589-.544 2.173.04"
      fill="#9CC4E8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.405 11.358c2.034-2.034 2.098-5.268.142-7.224C9.593 2.18 6.363 2.242 4.33 4.27c-1.734 1.734-1.789 4.491-.122 6.158 1.665 1.665 4.418 1.613 6.152-.115zM9.18 9.134c.555-.64.546-1.59-.039-2.175s-1.533-.594-2.173-.041L9.18 9.132zc-1.055 1.053-2.73 1.084-3.743.071s-.98-2.687.071-3.742l.005-.005c1.394-1.387 3.605-1.43 4.943-.092 1.34 1.34 1.295 3.554-.098 4.947z"
      fill="#509CD1"
    />
    <path
      d="m12.646 12.583-.003.003-1.232-1.232c-.446.445-.94.809-1.465 1.09L12.5 15l1.281-1.281z"
      fill="#509CD1"
    />
  </svg>
);

const HsqldbDark: FC<SvgProps> = ({
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
      d="m11.41 11.354 1.233 1.232.003-.003c2.721-2.724 2.805-7.053.187-9.671-2.617-2.618-6.946-2.534-9.67.186-2.37 2.37-2.445 6.139-.166 8.418 1.85 1.85 4.68 2.149 6.949.929a6.3 6.3 0 0 0 1.465-1.09m.137-7.22c1.956 1.956 1.892 5.19-.142 7.224l-1.045-1.045c1.392-1.393 1.436-3.608.097-4.947-1.337-1.338-3.549-1.295-4.942.092l-.005.005c-1.053 1.055-1.085 2.73-.072 3.742s2.688.982 3.742-.07l1.18 1.178c-1.735 1.728-4.487 1.78-6.152.115-1.667-1.667-1.613-4.424.12-6.158 2.035-2.028 5.265-2.09 7.22-.136M9.141 6.959c.585.585.594 1.535.04 2.175v-.002L6.969 6.918c.64-.553 1.589-.544 2.173.04"
      fill="#9CC4E8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.405 11.358c2.034-2.034 2.098-5.268.142-7.224C9.593 2.18 6.363 2.242 4.33 4.27c-1.734 1.734-1.789 4.491-.122 6.158 1.665 1.665 4.418 1.613 6.152-.115zM9.18 9.134c.555-.64.546-1.59-.039-2.175s-1.533-.594-2.173-.041L9.18 9.132zc-1.055 1.053-2.73 1.084-3.743.071s-.98-2.687.071-3.742l.005-.005c1.394-1.387 3.605-1.43 4.943-.092 1.34 1.34 1.295 3.554-.098 4.947z"
      fill="#509CD1"
    />
    <path
      d="m12.646 12.583-.003.003-1.232-1.232c-.446.445-.94.809-1.465 1.09L12.5 15l1.281-1.281z"
      fill="#509CD1"
    />
  </svg>
);

export const Hsqldb: FC<HsqldbProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HsqldbLight : HsqldbDark;

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
