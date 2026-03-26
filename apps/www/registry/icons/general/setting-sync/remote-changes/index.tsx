import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RemoteChangesProps = IconProps;

const RemoteChangesLight: FC<SvgProps> = ({
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
      d="M8 4a3 3 0 0 0-2.713 1.718l-.129.271-.3.014A3 3 0 0 0 5 12h6.5a2.5 2.5 0 0 0 .001-5H11.5l-.469.003-.061-.432A3 3 0 0 0 8 4M4.519 5.029a4.001 4.001 0 0 1 7.36.992A3.5 3.5 0 0 1 11.5 13H5a4 4 0 0 1-.481-7.971"
      fill="#6C707E"
    />
  </svg>
);

const RemoteChangesDark: FC<SvgProps> = ({
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
      d="M8 4a3 3 0 0 0-2.713 1.718l-.129.271-.3.014A3 3 0 0 0 5 12h6.5a2.5 2.5 0 0 0 .001-5H11.5l-.469.003-.061-.432A3 3 0 0 0 8 4M4.519 5.029a4.001 4.001 0 0 1 7.36.992A3.5 3.5 0 0 1 11.5 13H5a4 4 0 0 1-.481-7.971"
      fill="#6F737A"
    />
  </svg>
);

export const RemoteChanges: FC<RemoteChangesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RemoteChangesLight : RemoteChangesDark;

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
