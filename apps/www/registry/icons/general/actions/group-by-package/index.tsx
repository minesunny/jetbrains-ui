import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GroupByPackageProps = IconProps;

const GroupByPackageLight: FC<SvgProps> = ({
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
    <path
      d="M4 4.5h2.586a.5.5 0 0 1 .353.146L8.793 6.5H12a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z"
      fill="#EBECF0"
      stroke="#6C707E"
    />
  </svg>
);

const GroupByPackageDark: FC<SvgProps> = ({
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
    <path
      d="M4 4.5h2.586a.5.5 0 0 1 .353.146L8.793 6.5H12a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z"
      fill="#43454A"
      stroke="#CED0D6"
    />
  </svg>
);

export const GroupByPackage: FC<GroupByPackageProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GroupByPackageLight : GroupByPackageDark;

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
