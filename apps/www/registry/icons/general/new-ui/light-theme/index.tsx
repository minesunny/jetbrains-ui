import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LightThemeProps = IconProps;

const LightThemeLight: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#6C707E">
      <path d="M8.5 1a.5.5 0 0 0-1 0v2.025a5 5 0 0 1 1 0zM3.404 2.697l1.432 1.432a5 5 0 0 0-.707.707L2.697 3.404a.5.5 0 0 1 .707-.707M3.025 7.5H1a.5.5 0 0 0 0 1h2.025a5 5 0 0 1 0-1M2.697 12.596l1.432-1.432q.318.39.707.707l-1.432 1.432a.5.5 0 1 1-.707-.707M7.5 12.975V15a.5.5 0 0 0 1 0v-2.025a5 5 0 0 1-1 0M12.596 13.303l-1.432-1.432q.39-.317.707-.707l1.432 1.432a.5.5 0 1 1-.707.707M12.975 8.5H15a.5.5 0 0 0 0-1h-2.025a5 5 0 0 1 0 1M13.303 3.404l-1.432 1.432a5 5 0 0 0-.707-.707l1.432-1.432a.5.5 0 1 1 .707.707" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const LightThemeDark: FC<SvgProps> = ({
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
      <path d="M8.5 1a.5.5 0 0 0-1 0v2.025a5 5 0 0 1 1 0zM3.404 2.697l1.432 1.432a5 5 0 0 0-.707.707L2.697 3.404a.5.5 0 0 1 .707-.707M3.025 7.5H1a.5.5 0 0 0 0 1h2.025a5 5 0 0 1 0-1M2.697 12.596l1.432-1.432q.318.39.707.707l-1.432 1.432a.5.5 0 1 1-.707-.707M7.5 12.975V15a.5.5 0 0 0 1 0v-2.025a5 5 0 0 1-1 0M12.596 13.303l-1.432-1.432q.39-.317.707-.707l1.432 1.432a.5.5 0 1 1-.707.707M12.975 8.5H15a.5.5 0 0 0 0-1h-2.025a5 5 0 0 1 0 1M13.303 3.404l-1.432 1.432a5 5 0 0 0-.707-.707l1.432-1.432a.5.5 0 1 1 .707.707" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const LightTheme: FC<LightThemeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LightThemeLight : LightThemeDark;

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
