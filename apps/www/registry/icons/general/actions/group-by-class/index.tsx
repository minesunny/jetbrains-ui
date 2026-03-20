import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GroupByClassProps = IconProps;

const GroupByClassLight: FC<SvgProps> = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <circle cx="8" cy="8" r="4.5" fill="#EDF3FF" stroke="#3574F0" />
    <path
      d="M6.5 8a1.5 1.5 0 0 1 2.618-1h1.174a2.5 2.5 0 1 0 0 2H9.118A1.5 1.5 0 0 1 6.5 8"
      fill="#3574F0"
    />
  </svg>
);

const GroupByClassDark: FC<SvgProps> = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <circle cx="8" cy="8" r="4.5" fill="#25324D" stroke="#548AF7" />
    <path
      d="M6.5 8a1.5 1.5 0 0 1 2.618-1h1.174a2.5 2.5 0 1 0 0 2H9.118A1.5 1.5 0 0 1 6.5 8"
      fill="#548AF7"
    />
  </svg>
);

export const GroupByClass: FC<GroupByClassProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GroupByClassLight : GroupByClassDark;

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
