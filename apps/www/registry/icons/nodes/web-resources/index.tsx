import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type WebResourcesProps = IconProps;

const WebResourcesLight: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v6.133C15 13.164 14.269 14 13.367 14H2.633C1.731 14 1 13.164 1 12.133zM6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.04 5 6.122 3H2.633C2.405 3 2 3.258 2 3.867v8.266c0 .609.405.867.633.867h10.734c.228 0 .633-.258.633-.867V6a1 1 0 0 0-1-1zm.427-1L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h10.734c.902 0 1.633-.836 1.633-1.867V6a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#3574F0"
    />
  </svg>
);

const WebResourcesDark: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v6.133C15 13.164 14.269 14 13.367 14H2.633C1.731 14 1 13.164 1 12.133zM6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.04 5 6.122 3H2.633C2.405 3 2 3.258 2 3.867v8.266c0 .609.405.867.633.867h10.734c.228 0 .633-.258.633-.867V6a1 1 0 0 0-1-1zm.427-1L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h10.734c.902 0 1.633-.836 1.633-1.867V6a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#548AF7"
    />
  </svg>
);

export const WebResources: FC<WebResourcesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WebResourcesLight : WebResourcesDark;

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
