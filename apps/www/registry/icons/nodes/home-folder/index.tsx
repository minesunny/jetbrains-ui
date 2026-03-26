import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type HomeFolderProps = IconProps;

const HomeFolderLight: FC<SvgProps> = ({
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
      d="M7.668 2.632a.5.5 0 0 1 .664 0l5 4.443a.5.5 0 0 1 .168.374V13a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 0-3 0v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7.45a.5.5 0 0 1 .168-.375z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeFolderDark: FC<SvgProps> = ({
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
      d="M7.668 2.632a.5.5 0 0 1 .664 0l5 4.443a.5.5 0 0 1 .168.374V13a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 0-3 0v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7.45a.5.5 0 0 1 .168-.375z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeFolder: FC<HomeFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HomeFolderLight : HomeFolderDark;

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
