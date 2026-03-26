import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CloseSmallHoveredProps = IconProps;

const CloseSmallHoveredLight: FC<SvgProps> = ({
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
    <circle opacity=".1" cx="8" cy="8" r="8" fill="#313547" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.494 4.488a.5.5 0 0 0-.721-.01L8 7.288l-2.772-2.81a.5.5 0 0 0-.711.702L7.299 8l-2.782 2.82a.5.5 0 0 0 .711.702L8 8.712l2.772 2.81a.5.5 0 1 0 .712-.702L8.702 8l2.782-2.82a.5.5 0 0 0 .01-.692"
      fill="#818594"
    />
  </svg>
);

const CloseSmallHoveredDark: FC<SvgProps> = ({
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
    <circle opacity=".13" cx="8" cy="8" r="8" fill="#F0F1F2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.494 4.488a.5.5 0 0 0-.721-.01L8 7.288l-2.772-2.81a.5.5 0 0 0-.711.702L7.299 8l-2.782 2.82a.5.5 0 0 0 .711.702L8 8.712l2.772 2.81a.5.5 0 1 0 .712-.702L8.702 8l2.782-2.82a.5.5 0 0 0 .01-.692"
      fill="#868A91"
    />
  </svg>
);

export const CloseSmallHovered: FC<CloseSmallHoveredProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CloseSmallHoveredLight : CloseSmallHoveredDark;

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
