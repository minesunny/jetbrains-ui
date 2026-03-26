import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ImportProps = IconProps;

const ImportLight: FC<SvgProps> = ({
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
      d="M7.038 8.691A.5.5 0 0 0 7.5 9h4a.5.5 0 0 0 0-1H8.707l5.147-5.146a.5.5 0 0 0-.708-.708L8 7.293V4.5a.5.5 0 0 0-1 0v4.003a.5.5 0 0 0 .038.188"
      fill="#6C707E"
    />
    <path
      d="M2.5 4.5V12A1.5 1.5 0 0 0 4 13.5h7.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const ImportDark: FC<SvgProps> = ({
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
      d="M7.038 8.691A.5.5 0 0 0 7.5 9h4a.5.5 0 0 0 0-1H8.707l5.147-5.146a.5.5 0 0 0-.708-.708L8 7.293V4.5a.5.5 0 0 0-1 0v4.003a.5.5 0 0 0 .038.188"
      fill="#CED0D6"
    />
    <path
      d="M2.5 4.5V12A1.5 1.5 0 0 0 4 13.5h7.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const Import: FC<ImportProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ImportLight : ImportDark;

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
