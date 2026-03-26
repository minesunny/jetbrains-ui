import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KotlinToolWindowProps = IconProps;

const KotlinToolWindowLight: FC<SvgProps> = ({
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
      d="M2 3a1 1 0 0 1 1-1h9.996c.912 0 1.348 1.12.676 1.737L9.022 8l4.65 4.263c.672.616.236 1.737-.676 1.737H3a1 1 0 0 1-1-1zm10.996 0H3v10h9.996l-4.65-4.263a1 1 0 0 1 0-1.474z"
      fill="#6C707E"
    />
  </svg>
);

const KotlinToolWindowDark: FC<SvgProps> = ({
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
      d="M2 3a1 1 0 0 1 1-1h9.996c.912 0 1.348 1.12.676 1.737L9.022 8l4.65 4.263c.672.616.236 1.737-.676 1.737H3a1 1 0 0 1-1-1zm10.996 0H3v10h9.996l-4.65-4.263a1 1 0 0 1 0-1.474z"
      fill="#CED0D6"
    />
  </svg>
);

export const KotlinToolWindow: FC<KotlinToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? KotlinToolWindowLight : KotlinToolWindowDark;

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
