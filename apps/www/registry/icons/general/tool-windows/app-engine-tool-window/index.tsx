import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AppEngineToolWindowProps = IconProps;

const AppEngineToolWindowLight: FC<SvgProps> = ({
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
      d="M8.905 4.618a3.5 3.5 0 0 0-1.81 0l.31-1.24A.5.5 0 0 1 7.89 3h.22a.5.5 0 0 1 .485.379zM11.5 8H13v-.61a.5.5 0 0 0-.379-.485l-1.436-.359c.202.443.315.935.315 1.454M4.5 8c0-.519.113-1.011.315-1.454l-1.436.36A.5.5 0 0 0 3 7.39V8zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.286 1.504A1 1 0 0 0 11.417 1H4.578a1 1 0 0 0-.868.504l-3.429 6a1 1 0 0 0 0 .992l3.429 6a1 1 0 0 0 .868.504h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992zM1.149 8l3.429 6h6.84l3.428-6-3.429-6H4.578z"
      fill="#6C707E"
    />
  </svg>
);

const AppEngineToolWindowDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#CED0D6">
      <path d="M8.905 4.618a3.5 3.5 0 0 0-1.81 0l.31-1.24A.5.5 0 0 1 7.89 3h.22a.5.5 0 0 1 .485.379zM11.5 8H13v-.61a.5.5 0 0 0-.379-.485l-1.436-.359c.202.443.315.935.315 1.454M4.5 8c0-.519.113-1.011.315-1.454l-1.436.36A.5.5 0 0 0 3 7.39V8zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.286 1.504A1 1 0 0 0 11.417 1H4.578a1 1 0 0 0-.868.504l-3.429 6a1 1 0 0 0 0 .992l3.429 6a1 1 0 0 0 .868.504h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992zM1.149 8l3.429 6h6.84l3.428-6-3.429-6H4.578z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const AppEngineToolWindow: FC<AppEngineToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AppEngineToolWindowLight : AppEngineToolWindowDark;

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
