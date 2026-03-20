import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChangesProps = IconProps;

const ChangesLight: FC<SvgProps> = ({
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
    <rect x="2" y="8" width="5" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146 6.146a.5.5 0 0 1 .708.708L11.707 8H15.5a.5.5 0 0 1 0 1h-3.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2-.353-.354.353-.354zM8.854 10.147a.5.5 0 1 0-.708.707L9.293 12H5.5a.5.5 0 0 0 0 1h3.793l-1.147 1.146a.5.5 0 1 0 .708.708l2-2 .353-.354-.353-.354z"
      fill="#6C707E"
    />
    <rect x="2" y="5" width="7" height="1" rx=".5" fill="#6C707E" />
    <rect x="2" y="2" width="12" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const ChangesDark: FC<SvgProps> = ({
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
    <rect x="2" y="8" width="5" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146 6.146a.5.5 0 0 1 .708.708L11.707 8H15.5a.5.5 0 0 1 0 1h-3.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2-.353-.354.353-.354zM8.854 10.146a.5.5 0 0 0-.708.708L9.293 12H5.5a.5.5 0 0 0 0 1h3.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2 .353-.354-.353-.354z"
      fill="#CED0D6"
    />
    <rect x="2" y="5" width="7" height="1" rx=".5" fill="#CED0D6" />
    <rect x="2" y="2" width="12" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const Changes: FC<ChangesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChangesLight : ChangesDark;

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
