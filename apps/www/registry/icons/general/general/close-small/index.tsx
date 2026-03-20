import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CloseSmallProps = IconProps;

const CloseSmallLight: FC<SvgProps> = ({
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
      d="M11.494 4.488a.5.5 0 0 0-.721-.01L8 7.288l-2.772-2.81a.5.5 0 0 0-.711.702L7.299 8l-2.782 2.82a.5.5 0 0 0 .711.702L8 8.712l2.772 2.81a.5.5 0 1 0 .712-.702L8.702 8l2.782-2.82a.5.5 0 0 0 .01-.692"
      fill="#A8ADBD"
    />
  </svg>
);

const CloseSmallDark: FC<SvgProps> = ({
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
      d="M11.494 4.488a.5.5 0 0 0-.721-.01L8 7.288l-2.772-2.81a.5.5 0 0 0-.711.702L7.299 8l-2.782 2.82a.5.5 0 0 0 .711.702L8 8.712l2.772 2.81a.5.5 0 1 0 .712-.702L8.702 8l2.782-2.82a.5.5 0 0 0 .01-.692"
      fill="#6F737A"
    />
  </svg>
);

export const CloseSmall: FC<CloseSmallProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CloseSmallLight : CloseSmallDark;

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
