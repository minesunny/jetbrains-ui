import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AccessMethodProps = IconProps;

const AccessMethodLight: FC<SvgProps> = ({
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
      d="M7.43 4.98H8.49L10.758 11H9.756l-.53-1.484H6.75L6.26 11H5.236zm1.522 3.75-.903-2.507-.095-.374-.095.374-.855 2.507z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h1.5a.5.5 0 0 1 .5.5V15h-1v-4h-1zM15.5 16h-4v-1h4z"
      fill="#3574F0"
    />
    <path d="M12.5 7.5H14V9h-1.5z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.811 6.5a6 6 0 1 0-3.311 6.956v1.084a7 7 0 1 1 4.339-8.04zM14 8v-.5h-.02q.02.248.02.5"
      fill="#6C707E"
    />
  </svg>
);

const AccessMethodDark: FC<SvgProps> = ({
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
      d="M7.43 4.98H8.49L10.758 11H9.756l-.53-1.484H6.75L6.26 11H5.236zm1.522 3.75-.903-2.507-.095-.374-.095.374-.855 2.507z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h1.5a.5.5 0 0 1 .5.5V15h-1v-4h-1zM15.5 16h-4v-1h4z"
      fill="#548AF7"
    />
    <path d="M12.5 7.5H14V9h-1.5z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.811 6.5a6 6 0 1 0-3.311 6.956v1.084a7 7 0 1 1 4.339-8.04zM14 8v-.5h-.02q.02.248.02.5"
      fill="#CED0D6"
    />
  </svg>
);

export const AccessMethod: FC<AccessMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AccessMethodLight : AccessMethodDark;

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
