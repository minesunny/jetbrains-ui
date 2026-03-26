import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SparkProps = IconProps;

const SparkLight: FC<SvgProps> = ({
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
      d="M5.842 1.682a.202.202 0 0 1 .333-.131l3.071 2.676.19.166.247-.055 4.05-.899a.2.2 0 0 1 .227.28l-1.73 3.69-.116.25.147.23 2.207 3.48a.2.2 0 0 1-.194.304l-4.221-.48-.258-.029-.172.192-2.746 3.077a.201.201 0 0 1-.347-.093l-.814-4.007-.053-.259-.242-.102-3.799-1.607a.199.199 0 0 1-.018-.357l3.602-1.984.231-.127.026-.262z"
      stroke="#6C707E"
    />
  </svg>
);

const SparkDark: FC<SvgProps> = ({
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
      d="M5.842 1.682a.202.202 0 0 1 .333-.131l3.071 2.676.19.166.247-.055 4.05-.899a.2.2 0 0 1 .227.28l-1.73 3.69-.116.25.147.23 2.207 3.48a.2.2 0 0 1-.194.304l-4.221-.48-.258-.029-.172.192-2.746 3.077a.201.201 0 0 1-.347-.093l-.814-4.007-.053-.259-.242-.102-3.799-1.607a.199.199 0 0 1-.018-.357l3.602-1.984.231-.127.026-.262z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Spark: FC<SparkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SparkLight : SparkDark;

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
