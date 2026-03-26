import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SQLSelectStatementProps = IconProps;

const SQLSelectStatementLight: FC<SvgProps> = ({
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
      d="M1.56 7.646a.5.5 0 0 0 0 .708l5.94 5.939V10.5H14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7.5V1.707z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const SQLSelectStatementDark: FC<SvgProps> = ({
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
      d="M1.56 7.646a.5.5 0 0 0 0 .708l5.94 5.939V10.5H14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7.5V1.707z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const SQLSelectStatement: FC<SQLSelectStatementProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SQLSelectStatementLight : SQLSelectStatementDark;

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
