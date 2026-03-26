import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ProcedureRunProps = IconProps;

const ProcedureRunLight: FC<SvgProps> = ({
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
      d="M8 9.504c0-1.963 2.159-3.16 3.824-2.12L14.88 9.29Q15 8.663 15 8a7 7 0 1 0-6.952 7A2.6 2.6 0 0 1 8 14.5z"
      fill="#EDF3FF"
    />
    <path
      d="M8 14a6 6 0 1 1 5.958-5.285l.923.576Q15 8.663 15 8a7 7 0 1 0-7 7z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#208A3C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#F2FCF3"
    />
    <path
      d="M5.999 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H6.979v1.948z"
      fill="#3574F0"
    />
  </svg>
);

const ProcedureRunDark: FC<SvgProps> = ({
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
      d="M8 9.504c0-1.963 2.159-3.16 3.824-2.12L14.88 9.29Q15 8.663 15 8a7 7 0 1 0-6.952 7A2.6 2.6 0 0 1 8 14.5z"
      fill="#25324D"
    />
    <path
      d="M8 14a6 6 0 1 1 5.958-5.285l.923.576Q15 8.663 15 8a7 7 0 1 0-7 7z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#57965C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#253627"
    />
    <path
      d="M5.999 4.98h2.52q.61 0 1.07.224.465.223.714.636.255.412.254.955 0 .546-.258.958-.255.414-.722.641a2.5 2.5 0 0 1-1.093.228H6.98V11H6zm2.477 2.795q.318 0 .559-.116a.87.87 0 0 0 .37-.34q.129-.223.129-.52a1 1 0 0 0-.13-.516.84.84 0 0 0-.37-.336q-.24-.12-.558-.12H6.979v1.948z"
      fill="#548AF7"
    />
  </svg>
);

export const ProcedureRun: FC<ProcedureRunProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProcedureRunLight : ProcedureRunDark;

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
