import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VariablesProps = IconProps;

const VariablesLight: FC<SvgProps> = ({
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
    <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" stroke="#A8ADBD" />
    <rect x="5" y="5" width="6" height="1" rx=".5" fill="#A8ADBD" />
    <rect x="5" y="7.5" width="6" height="1" rx=".5" fill="#A8ADBD" />
    <rect x="5" y="10" width="6" height="1" rx=".5" fill="#A8ADBD" />
  </svg>
);

const VariablesDark: FC<SvgProps> = ({
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
    <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" stroke="#868A91" />
    <rect x="5" y="5" width="6" height="1" rx=".5" fill="#868A91" />
    <rect x="5" y="7.5" width="6" height="1" rx=".5" fill="#868A91" />
    <rect x="5" y="10" width="6" height="1" rx=".5" fill="#868A91" />
  </svg>
);

export const Variables: FC<VariablesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VariablesLight : VariablesDark;

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
