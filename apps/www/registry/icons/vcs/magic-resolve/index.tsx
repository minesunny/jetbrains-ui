import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type MagicResolveProps = SvgProps;

const MagicResolveLight: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="m1.793 12.793-.586-.586a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1-1.414 0M8.5 7.5l-2-2M9.5 1.5v-1M12.5 4.5h1m-3 4 1 1m-6-6-1-1"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MagicResolveDark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="m1.793 12.793-.586-.586a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1-1.414 0M8.5 7.5l-2-2M9.5 1.5v-1M12.5 4.5h1m-3 4 1 1m-6-6-1-1"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MagicResolve: FC<MagicResolveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MagicResolveLight : MagicResolveDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
