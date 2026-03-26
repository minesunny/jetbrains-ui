import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DislikeProps = IconProps;

const DislikeLight: FC<SvgProps> = ({
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
      d="M14.5 9a1.5 1.5 0 0 1-1.5 1.5h-1.5v-8H13A1.5 1.5 0 0 1 14.5 4zM6.5 10.5H3A1.5 1.5 0 0 1 1.5 9V5.692c0-.426.181-.832.498-1.116l1.887-1.693a1.5 1.5 0 0 1 1.002-.384H11.5v8.293l-3.465 3.446A.9.9 0 0 1 6.5 13.6z"
      stroke="#6C707E"
    />
  </svg>
);

const DislikeDark: FC<SvgProps> = ({
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
      d="M14.5 9a1.5 1.5 0 0 1-1.5 1.5h-1.5v-8H13A1.5 1.5 0 0 1 14.5 4zM6.5 10.5H3A1.5 1.5 0 0 1 1.5 9V5.692c0-.426.181-.832.498-1.116l1.887-1.693a1.5 1.5 0 0 1 1.002-.384H11.5v8.293l-3.465 3.446A.9.9 0 0 1 6.5 13.6z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Dislike: FC<DislikeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DislikeLight : DislikeDark;

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
