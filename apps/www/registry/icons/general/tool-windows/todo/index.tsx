import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TodoProps = IconProps;

const TodoLight: FC<SvgProps> = ({
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
    <path d="M5.5 11.5h8" stroke="#6C707E" strokeLinecap="round" />
    <ellipse cx="2.7" cy="11.5" rx=".7" ry=".7" fill="#6C707E" />
    <path d="M5.5 8h8" stroke="#6C707E" strokeLinecap="round" />
    <ellipse cx="2.7" cy="8" rx=".7" ry=".7" fill="#6C707E" />
    <path d="M5.5 4.5h8" stroke="#6C707E" strokeLinecap="round" />
    <ellipse cx="2.7" cy="4.5" rx=".7" ry=".7" fill="#6C707E" />
  </svg>
);

const TodoDark: FC<SvgProps> = ({
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
    <path d="M5.5 11.5h8" stroke="#CED0D6" strokeLinecap="round" />
    <ellipse cx="2.7" cy="11.5" rx=".7" ry=".7" fill="#CED0D6" />
    <path d="M5.5 8h8" stroke="#CED0D6" strokeLinecap="round" />
    <ellipse cx="2.7" cy="8" rx=".7" ry=".7" fill="#CED0D6" />
    <path d="M5.5 4.5h8" stroke="#CED0D6" strokeLinecap="round" />
    <ellipse cx="2.7" cy="4.5" rx=".7" ry=".7" fill="#CED0D6" />
  </svg>
);

export const Todo: FC<TodoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TodoLight : TodoDark;

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
