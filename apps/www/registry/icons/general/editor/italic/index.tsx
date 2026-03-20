import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ItalicProps = IconProps;

const ItalicLight: FC<SvgProps> = ({
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
      d="M6 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H9.401l-1.778 8H9.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2.099l1.778-8H6.5a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
  </svg>
);

const ItalicDark: FC<SvgProps> = ({
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
      d="M6 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H9.401l-1.778 8H9.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2.099l1.778-8H6.5a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
  </svg>
);

export const Italic: FC<ItalicProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ItalicLight : ItalicDark;

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
