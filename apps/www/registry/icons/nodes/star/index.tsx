import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StarProps = IconProps;

const StarLight: FC<SvgProps> = ({
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
      d="M8.462 2.381a.5.5 0 0 0-.923 0l-1.47 3.534-3.815.306a.5.5 0 0 0-.285.878l2.906 2.49-.888 3.722a.5.5 0 0 0 .747.543L8 11.859l3.266 1.995a.5.5 0 0 0 .747-.543l-.888-3.722 2.907-2.49a.5.5 0 0 0-.285-.878l-3.815-.306z"
      fill="#FFAF0F"
    />
  </svg>
);

const StarDark: FC<SvgProps> = ({
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
      d="M8.462 2.381a.5.5 0 0 0-.923 0l-1.47 3.534-3.815.306a.5.5 0 0 0-.285.878l2.906 2.49-.888 3.722a.5.5 0 0 0 .747.543L8 11.859l3.266 1.995a.5.5 0 0 0 .747-.543l-.888-3.722 2.907-2.49a.5.5 0 0 0-.285-.878l-3.815-.306z"
      fill="#F2C55C"
    />
  </svg>
);

export const Star: FC<StarProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StarLight : StarDark;

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
