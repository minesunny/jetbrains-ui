import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShowToImplementProps = IconProps;

const ShowToImplementLight: FC<SvgProps> = ({
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
      d="m11 4.121-.44.44a1.5 1.5 0 0 1-2.12-2.122l1.237-1.237A7 7 0 1 0 14.929 9H12.5A1.5 1.5 0 0 1 11 7.5z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#6C707E"
    />
    <path
      d="m9.677 1.202-.854.854A6 6 0 1 0 13.917 9h1.012A7.001 7.001 0 0 1 1 8a7 7 0 0 1 8.677-6.798"
      fill="#208A3C"
    />
    <path d="M10 5.5v-1H6v1h1.5v5H6v1h4v-1H8.5v-5z" fill="#208A3C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#6C707E"
    />
  </svg>
);

const ShowToImplementDark: FC<SvgProps> = ({
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
      d="m11 4.121-.44.44a1.5 1.5 0 0 1-2.12-2.122l1.237-1.237A7 7 0 1 0 14.929 9H12.5A1.5 1.5 0 0 1 11 7.5z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#CED0D6"
    />
    <path
      d="m9.677 1.202-.854.854A6 6 0 1 0 13.917 9h1.012A7.001 7.001 0 0 1 1 8a7 7 0 0 1 8.677-6.798"
      fill="#57965C"
    />
    <path d="M10 5.5v-1H6v1h1.5v5H6v1h4v-1H8.5v-5z" fill="#57965C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#CED0D6"
    />
  </svg>
);

export const ShowToImplement: FC<ShowToImplementProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ShowToImplementLight : ShowToImplementDark;

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
