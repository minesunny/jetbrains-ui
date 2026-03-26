import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type EvaluateExpressionProps = IconProps;

const EvaluateExpressionLight: FC<SvgProps> = ({
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
    <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="#6C707E" />
    <rect x="4.5" y="4.5" width="7" height="2" rx=".5" stroke="#6C707E" />
    <rect x="4.3" y="8" width="1.4" height="1.4" rx=".7" fill="#6C707E" />
    <rect x="7.3" y="8" width="1.4" height="1.4" rx=".7" fill="#6C707E" />
    <rect x="10.3" y="8" width="1.4" height="1.4" rx=".7" fill="#6C707E" />
    <rect x="4.3" y="10.6" width="1.4" height="1.4" rx=".7" fill="#6C707E" />
    <rect x="7.3" y="10.6" width="1.4" height="1.4" rx=".7" fill="#6C707E" />
    <rect x="10.3" y="10.6" width="1.4" height="1.4" rx=".7" fill="#6C707E" />
  </svg>
);

const EvaluateExpressionDark: FC<SvgProps> = ({
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
    <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="#CED0D6" />
    <rect x="4.5" y="4.5" width="7" height="2" rx=".5" stroke="#CED0D6" />
    <rect x="4.3" y="8" width="1.4" height="1.4" rx=".7" fill="#CED0D6" />
    <rect x="7.3" y="8" width="1.4" height="1.4" rx=".7" fill="#CED0D6" />
    <rect x="10.3" y="8" width="1.4" height="1.4" rx=".7" fill="#CED0D6" />
    <rect x="4.3" y="10.6" width="1.4" height="1.4" rx=".7" fill="#CED0D6" />
    <rect x="7.3" y="10.6" width="1.4" height="1.4" rx=".7" fill="#CED0D6" />
    <rect x="10.3" y="10.6" width="1.4" height="1.4" rx=".7" fill="#CED0D6" />
  </svg>
);

export const EvaluateExpression: FC<EvaluateExpressionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EvaluateExpressionLight : EvaluateExpressionDark;

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
