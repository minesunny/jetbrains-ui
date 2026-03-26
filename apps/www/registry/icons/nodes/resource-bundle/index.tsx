import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ResourceBundleProps = IconProps;

const ResourceBundleLight: FC<SvgProps> = ({
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
    <rect x="14" y="9" width="2" height="7" rx="1" fill="#55A76A" />
    <rect x="11" y="11" width="2" height="5" rx="1" fill="#FFAF0F" />
    <rect x="8" y="13" width="2" height="3" rx="1" fill="#E55765" />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2a2 2 0 0 0-2 2h-1a2 2 0 0 0-2 2H9a2 2 0 0 0-2 2H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v2.268A2 2 0 0 1 15 8V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14H7c0-.364.097-.706.268-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#6C707E"
    />
  </svg>
);

const ResourceBundleDark: FC<SvgProps> = ({
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
    <rect x="14" y="9" width="2" height="7" rx="1" fill="#57965C" />
    <rect x="11" y="11" width="2" height="5" rx="1" fill="#F2C55C" />
    <rect x="8" y="13" width="2" height="3" rx="1" fill="#DB5C5C" />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2a2 2 0 0 0-2 2h-1a2 2 0 0 0-2 2H9a2 2 0 0 0-2 2H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v2.268A2 2 0 0 1 15 8V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14H7c0-.364.097-.706.268-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#CED0D6"
    />
  </svg>
);

export const ResourceBundle: FC<ResourceBundleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ResourceBundleLight : ResourceBundleDark;

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
