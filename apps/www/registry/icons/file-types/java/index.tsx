import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JavaProps = IconProps;

const JavaLight: FC<SvgProps> = ({
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
    <rect x="2" y="13" width="12" height="1" rx=".5" fill="#E66D17" />
    <path
      d="M3.6 2.5h7.8c.288 0 .474 0 .616.012a.6.6 0 0 1 .21.043c.095.048.171.124.22.218a.6.6 0 0 1 .042.211c.012.142.012.328.012.616v2.9c0 1.432-.005 2.037-.15 2.516a3.5 3.5 0 0 1-2.334 2.334c-.48.145-1.084.15-2.516.15s-2.037-.005-2.516-.15A3.5 3.5 0 0 1 2.65 9.016c-.145-.48-.15-1.084-.15-2.516V3.6c0-.288 0-.474.012-.616a.6.6 0 0 1 .043-.21.5.5 0 0 1 .218-.22.6.6 0 0 1 .211-.042c.142-.012.328-.012.616-.012Z"
      fill="#FFF4EB"
      stroke="#E66D17"
    />
    <path
      d="M14.5 2.5a.5.5 0 0 1 .5.5v1.182a1.5 1.5 0 0 1-.91 1.378l-1.59.681V2.5z"
      stroke="#E66D17"
    />
  </svg>
);

const JavaDark: FC<SvgProps> = ({
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
    <rect x="2" y="13" width="12" height="1" rx=".5" fill="#C77D55" />
    <path
      d="M3 2.5h9a.5.5 0 0 1 .5.5v5A3.5 3.5 0 0 1 9 11.5H6A3.5 3.5 0 0 1 2.5 8V3a.5.5 0 0 1 .5-.5Z"
      fill="#45322B"
      stroke="#C77D55"
    />
    <path
      d="M14.5 2.5a.5.5 0 0 1 .5.5v1.182a1.5 1.5 0 0 1-.91 1.378l-1.59.681V2.5z"
      stroke="#C77D55"
    />
  </svg>
);

export const Java: FC<JavaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JavaLight : JavaDark;

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
