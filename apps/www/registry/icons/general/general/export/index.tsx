import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ExportProps = IconProps;

const ExportLight: FC<SvgProps> = ({
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
      d="M13.962 2.309a.5.5 0 0 0-.106-.16l-.005-.005A.5.5 0 0 0 13.5 2h-4a.5.5 0 0 0 0 1h2.793L7.146 8.146a.5.5 0 1 0 .708.708L13 3.707V6.5a.5.5 0 0 0 1 0V2.497a.5.5 0 0 0-.038-.188"
      fill="#6C707E"
    />
    <path
      d="M2.5 4.5V12A1.5 1.5 0 0 0 4 13.5h7.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const ExportDark: FC<SvgProps> = ({
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
      d="M13.962 2.309a.5.5 0 0 0-.106-.16l-.005-.005A.5.5 0 0 0 13.5 2h-4a.5.5 0 0 0 0 1h2.793L7.146 8.146a.5.5 0 1 0 .708.708L13 3.707V6.5a.5.5 0 0 0 1 0V2.497a.5.5 0 0 0-.038-.188"
      fill="#CED0D6"
    />
    <path
      d="M2.5 4.5V12A1.5 1.5 0 0 0 4 13.5h7.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const Export: FC<ExportProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ExportLight : ExportDark;

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
