import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MoveToButtonProps = IconProps;

const MoveToButtonLight: FC<SvgProps> = ({
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
      d="M11 3a1 1 0 0 1 1-1h2.5a.5.5 0 0 1 0 1H12v10h2.5a.5.5 0 0 1 0 1H12a1 1 0 0 1-1-1zM6.646 5.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L8.293 8.5H1.5a.5.5 0 0 1 0-1h6.793L6.646 5.854a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
  </svg>
);

const MoveToButtonDark: FC<SvgProps> = ({
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
      d="M11 3a1 1 0 0 1 1-1h2.5a.5.5 0 0 1 0 1H12v10h2.5a.5.5 0 0 1 0 1H12a1 1 0 0 1-1-1zM6.646 5.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L8.293 8.5H1.5a.5.5 0 0 1 0-1h6.793L6.646 5.854a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
  </svg>
);

export const MoveToButton: FC<MoveToButtonProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MoveToButtonLight : MoveToButtonDark;

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
