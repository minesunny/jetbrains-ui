import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PreserveCaseProps = IconProps;

const PreserveCaseLight: FC<SvgProps> = ({
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
      d="M3.009 6.3h1.204L7.139 14H5.984l-.704-1.958H2.018L1.365 14H.182zm1.941 4.824L3.729 7.762l-.127-.473-.12.473-1.156 3.36zM11.509 6.3h1.204l2.926 7.7h-1.155l-.704-1.958h-3.261L9.864 14H8.681zm1.941 4.824-1.221-3.361-.127-.473-.12.473-1.155 3.36z"
      fill="#6C707E"
    />
    <path d="m7 5.813 2.406-2.407L7 1" stroke="#6C707E" strokeLinecap="round" />
  </svg>
);

const PreserveCaseDark: FC<SvgProps> = ({
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
      d="M3.009 6.3h1.204L7.139 14H5.984l-.704-1.958H2.018L1.365 14H.182zm1.941 4.824L3.729 7.762l-.127-.473-.12.473-1.156 3.36zM11.509 6.3h1.204l2.926 7.7h-1.155l-.704-1.958h-3.261L9.864 14H8.681zm1.941 4.824-1.221-3.361-.127-.473-.12.473-1.155 3.36z"
      fill="#CED0D6"
    />
    <path d="m7 5.813 2.406-2.407L7 1" stroke="#CED0D6" strokeLinecap="round" />
  </svg>
);

export const PreserveCase: FC<PreserveCaseProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PreserveCaseLight : PreserveCaseDark;

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
