import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OpenRewriteProps = IconProps;

const OpenRewriteLight: FC<SvgProps> = ({
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
      d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .354-.854L9.207 8.5H13.5A.5.5 0 0 0 14 8v-.5A5.5 5.5 0 0 0 8.5 2zm6 1v4.5H13A4.5 4.5 0 0 0 8.5 3m-1 0H3.707L7.5 6.793zM3 7.5V3.707L6.793 7.5zm2.75 1H7.5V13H5.75zm2.75.707V13h3.793zM4.75 8.5V13H3V8.5z"
      fill="#6C707E"
    />
  </svg>
);

const OpenRewriteDark: FC<SvgProps> = ({
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
      d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .354-.854L9.207 8.5H13.5A.5.5 0 0 0 14 8v-.5A5.5 5.5 0 0 0 8.5 2zm6 1v4.5H13A4.5 4.5 0 0 0 8.5 3m-1 0H3.707L7.5 6.793zM3 7.5V3.707L6.793 7.5zm2.75 1H7.5V13H5.75zm2.75.707V13h3.793zM4.75 8.5V13H3V8.5z"
      fill="#CED0D6"
    />
  </svg>
);

export const OpenRewrite: FC<OpenRewriteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OpenRewriteLight : OpenRewriteDark;

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
