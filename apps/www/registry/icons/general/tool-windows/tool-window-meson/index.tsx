import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowMesonProps = IconProps;

const ToolWindowMesonLight: FC<SvgProps> = ({
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
      d="M8.053 1.582c3.917 2.4 6.35 6.666 6.442 11.304-3.857 2.116-8.75 2.194-12.99-.03C1.63 8.208 4.105 3.95 8.054 1.582Z"
      stroke="#6C707E"
    />
    <path
      d="M5.509 7.074c1.492-.754 3.34-.78 4.98.017a5.52 5.52 0 0 1-2.51 4.32 5.53 5.53 0 0 1-2.47-4.337Z"
      stroke="#6C707E"
    />
  </svg>
);

const ToolWindowMesonDark: FC<SvgProps> = ({
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
      d="M8.053 1.582c3.917 2.4 6.35 6.666 6.442 11.304-3.857 2.116-8.75 2.194-12.99-.03C1.63 8.208 4.105 3.95 8.054 1.582Z"
      stroke="#CED0D6"
    />
    <path
      d="M5.509 7.074c1.492-.754 3.34-.78 4.98.017a5.52 5.52 0 0 1-2.51 4.32 5.53 5.53 0 0 1-2.47-4.337Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const ToolWindowMeson: FC<ToolWindowMesonProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowMesonLight : ToolWindowMesonDark;

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
