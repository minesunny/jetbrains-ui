import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type IntelliSortProps = IconProps;

const IntelliSortLight: FC<SvgProps> = ({
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
      d="M1.146 10.654a.5.5 0 0 1 .708-.708L4 12.093V2.5a.5.5 0 0 1 1 0v9.593l2.146-2.147a.5.5 0 1 1 .708.708l-3 3-.354.353-.354-.353zM11 2.5a.5.5 0 0 1 1 0v1l-.004.062a2 2 0 0 1 0 3.876q.004.03.004.062v1l-.004.062a2 2 0 0 1 0 3.876q.004.03.004.062v1a.5.5 0 0 1-1 0v-1q0-.032.004-.062a2 2 0 0 1 0-3.876L11 8.5v-1q0-.032.004-.062a2 2 0 0 1 0-3.876L11 3.5zm.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#6C707E"
    />
  </svg>
);

const IntelliSortDark: FC<SvgProps> = ({
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
      d="M1.146 10.654a.5.5 0 0 1 .708-.708L4 12.093V2.5a.5.5 0 0 1 1 0v9.593l2.146-2.147a.5.5 0 1 1 .708.708l-3 3-.354.353-.354-.353zM11 2.5a.5.5 0 0 1 1 0v1l-.004.062a2 2 0 0 1 0 3.876q.004.03.004.062v1l-.004.062a2 2 0 0 1 0 3.876q.004.03.004.062v1a.5.5 0 0 1-1 0v-1q0-.032.004-.062a2 2 0 0 1 0-3.876L11 8.5v-1q0-.032.004-.062a2 2 0 0 1 0-3.876L11 3.5zm.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#CED0D6"
    />
  </svg>
);

export const IntelliSort: FC<IntelliSortProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IntelliSortLight : IntelliSortDark;

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
