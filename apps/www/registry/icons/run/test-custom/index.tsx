import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestCustomProps = IconProps;

const TestCustomLight: FC<SvgProps> = ({
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
      d="M7.11 1.607a.9.9 0 0 1 .776.732l1.485 8.17 1.31-2.881a.9.9 0 0 1 .82-.528h3a.9.9 0 1 1 0 1.8H12.08l-2.26 4.972a.9.9 0 0 1-1.705-.211l-1.486-8.17-1.31 2.881A.9.9 0 0 1 4.5 8.9h-3a.9.9 0 0 1 0-1.8h2.42l2.26-4.972a.9.9 0 0 1 .93-.521"
      fill="#834DF0"
    />
  </svg>
);

const TestCustomDark: FC<SvgProps> = ({
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
      d="M7.11 1.607a.9.9 0 0 1 .776.732l1.485 8.17 1.31-2.881a.9.9 0 0 1 .82-.528h3a.9.9 0 1 1 0 1.8H12.08l-2.26 4.972a.9.9 0 0 1-1.705-.211l-1.486-8.17-1.31 2.881A.9.9 0 0 1 4.5 8.9h-3a.9.9 0 0 1 0-1.8h2.42l2.26-4.972a.9.9 0 0 1 .93-.521"
      fill="#A571E6"
    />
  </svg>
);

export const TestCustom: FC<TestCustomProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestCustomLight : TestCustomDark;

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
