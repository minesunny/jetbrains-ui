import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RegexProps = IconProps;

const RegexLight: FC<SvgProps> = ({
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
      d="M4.618 12.35V14h-1.65v-1.65zM9.709 6.687l.68-.561 2.032 2.278-.808.688zM7.516 8.404l2.031-2.278.68.561-1.904 2.405zm-.765-2.55.28-1.029 2.933.876-.23.859zm3.222.757a.46.46 0 0 1-.324-.128.46.46 0 0 1-.127-.323q0-.188.127-.314a.46.46 0 0 1 .324-.128q.186 0 .314.128.127.128.127.314a.46.46 0 0 1-.127.323.43.43 0 0 1-.315.128M9.437 3.1H10.5l-.085 3.06h-.893zm.536 2.601 2.932-.875.28 1.028-2.983.705z"
      fill="#6C707E"
    />
  </svg>
);

const RegexDark: FC<SvgProps> = ({
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
      d="M4.618 12.35V14h-1.65v-1.65zM9.709 6.687l.68-.561 2.032 2.278-.808.688zM7.516 8.404l2.031-2.278.68.561-1.904 2.405zm-.765-2.55.28-1.029 2.933.876-.23.859zm3.222.757a.46.46 0 0 1-.324-.128.46.46 0 0 1-.127-.323q0-.188.127-.314a.46.46 0 0 1 .324-.128q.186 0 .314.128.127.128.127.314a.46.46 0 0 1-.127.323.43.43 0 0 1-.315.128M9.437 3.1H10.5l-.085 3.06h-.893zm.536 2.601 2.932-.875.28 1.028-2.983.705z"
      fill="#CED0D6"
    />
  </svg>
);

export const Regex: FC<RegexProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RegexLight : RegexDark;

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
