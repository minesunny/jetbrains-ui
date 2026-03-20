import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DictionaryProps = IconProps;

const DictionaryLight: FC<SvgProps> = ({
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
      d="M4.995 3.9h1.554L8.258 13H6.952l-1.04-6.513-.065-.884h-.143l-.052.884L4.664 13H3.318zM4.28 9.581h2.919v1.105H4.28zm4.27 2.242 2.665-6.675h-2.47V3.9h3.861v1.177l-2.665 6.675h2.665V13H8.55z"
      fill="#6C707E"
    />
  </svg>
);

const DictionaryDark: FC<SvgProps> = ({
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
      d="M4.995 3.9h1.554L8.258 13H6.952l-1.04-6.513-.065-.884h-.143l-.052.884L4.664 13H3.318zM4.28 9.581h2.919v1.105H4.28zm4.27 2.242 2.665-6.675h-2.47V3.9h3.861v1.177l-2.665 6.675h2.665V13H8.55z"
      fill="#CED0D6"
    />
  </svg>
);

export const Dictionary: FC<DictionaryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DictionaryLight : DictionaryDark;

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
