import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShowProps = IconProps;

const ShowLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="2.5" stroke="#6C707E" />
    <path
      d="M8 3c1.634 0 3.286.585 4.652 1.535 1.315.915 2.331 2.147 2.816 3.465-.485 1.318-1.5 2.55-2.816 3.465C11.286 12.415 9.634 13 8 13s-3.286-.585-4.652-1.535C2.033 10.55 1.016 9.318.53 8c.485-1.318 1.502-2.55 2.817-3.465C4.714 3.585 6.366 3 8 3Z"
      stroke="#6C707E"
    />
  </svg>
);

const ShowDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="2.5" stroke="#CED0D6" />
    <path
      d="M8 3c1.634 0 3.286.585 4.652 1.535 1.315.915 2.331 2.147 2.816 3.465-.485 1.318-1.5 2.55-2.816 3.465C11.286 12.415 9.634 13 8 13s-3.286-.585-4.652-1.535C2.033 10.55 1.016 9.318.53 8c.485-1.318 1.502-2.55 2.817-3.465C4.714 3.585 6.366 3 8 3Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Show: FC<ShowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ShowLight : ShowDark;

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
