import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CutProps = IconProps;

const CutLight: FC<SvgProps> = ({
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
      d="M7 4.5c0 .922-.5 1.728-1.243 2.161l1.865.794 5.683-2.415a.5.5 0 1 1 .39.92L8.9 8l4.797 2.04a.5.5 0 0 1-.391.921L7.622 8.542l-1.87.794A2.499 2.499 0 0 1 4.5 14a2.5 2.5 0 0 1-1.058-4.766l-.001-.002 2.903-1.234-2.687-1.144A2.501 2.501 0 1 1 7 4.5m-1 0a1.5 1.5 0 0 1-1.985 1.42l-.2-.086A1.5 1.5 0 1 1 6 4.5m0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
  </svg>
);

const CutDark: FC<SvgProps> = ({
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
      d="M7 4.5c0 .922-.5 1.728-1.243 2.161l1.865.794 5.683-2.415a.5.5 0 1 1 .39.92L8.9 8l4.797 2.04a.5.5 0 0 1-.391.921L7.622 8.542l-1.87.794A2.499 2.499 0 0 1 4.5 14a2.5 2.5 0 0 1-1.058-4.766l-.001-.002 2.903-1.234-2.687-1.144A2.501 2.501 0 1 1 7 4.5m-1 0a1.5 1.5 0 0 1-1.985 1.42l-.2-.086A1.5 1.5 0 1 1 6 4.5m0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
  </svg>
);

export const Cut: FC<CutProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CutLight : CutDark;

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
