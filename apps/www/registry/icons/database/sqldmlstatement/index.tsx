import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SQLDMLStatementProps = IconProps;

const SQLDMLStatementLight: FC<SvgProps> = ({
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
      d="M14.44 7.646a.5.5 0 0 1 0 .708L8.5 14.293V10.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h6.5V1.707z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const SQLDMLStatementDark: FC<SvgProps> = ({
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
      d="M14.44 7.646a.5.5 0 0 1 0 .708L8.5 14.293V10.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h6.5V1.707z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const SQLDMLStatement: FC<SQLDMLStatementProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SQLDMLStatementLight : SQLDMLStatementDark;

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
