import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ProblemsProps = IconProps;

const ProblemsLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#6C707E" />
    <circle
      cx="8.001"
      cy="10.7"
      r=".5"
      fill="#6C707E"
      stroke="#6C707E"
      strokeWidth=".4"
    />
    <path
      d="M8 4.6v3.8"
      stroke="#6C707E"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ProblemsDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#CED0D6" />
    <circle
      cx="8.001"
      cy="10.7"
      r=".5"
      fill="#CED0D6"
      stroke="#CED0D6"
      strokeWidth=".4"
    />
    <path
      d="M8 4.6v3.8"
      stroke="#CED0D6"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const Problems: FC<ProblemsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProblemsLight : ProblemsDark;

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
