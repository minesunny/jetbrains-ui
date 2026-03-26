import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type GeneratedTestRootProps = IconProps;

const GeneratedTestRootLight: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2.758A4.5 4.5 0 0 0 8.256 14H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.803 4.717.29.283H13a1 1 0 0 1 1 1v2.256q.535.19 1 .502V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14h5.506a4.5 4.5 0 0 1-.229-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#208A3C"
    />
    <path
      d="M13 9.5a.5.5 0 0 0-1 0v1a.5.5 0 1 0 1 0zM10.152 10.567a.5.5 0 0 0-.5.866l.866.5a.5.5 0 1 0 .5-.866zM15.348 11.433a.5.5 0 0 0-.5-.866l-.866.5a.5.5 0 0 0 .5.866zM11.018 13.933a.5.5 0 1 0-.5-.866l-.866.5a.5.5 0 0 0 .5.866zM14.482 13.067a.5.5 0 1 0-.5.866l.866.5a.5.5 0 0 0 .5-.866zM13 14.5a.5.5 0 0 0-1 0v1a.5.5 0 1 0 1 0zM12.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#208A3C"
    />
  </svg>
);

const GeneratedTestRootDark: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2.758A4.5 4.5 0 0 0 8.256 14H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.803 4.717.29.283H13a1 1 0 0 1 1 1v2.256q.535.19 1 .502V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14h5.506a4.5 4.5 0 0 1-.229-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#57965C"
    />
    <path
      d="M13 9.5a.5.5 0 0 0-1 0v1a.5.5 0 1 0 1 0zM10.152 10.567a.5.5 0 0 0-.5.866l.866.5a.5.5 0 1 0 .5-.866zM15.348 11.433a.5.5 0 0 0-.5-.866l-.866.5a.5.5 0 0 0 .5.866zM11.018 13.933a.5.5 0 1 0-.5-.866l-.866.5a.5.5 0 0 0 .5.866zM14.482 13.067a.5.5 0 1 0-.5.866l.866.5a.5.5 0 0 0 .5-.866zM13 14.5a.5.5 0 0 0-1 0v1a.5.5 0 1 0 1 0zM12.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#57965C"
    />
  </svg>
);

export const GeneratedTestRoot: FC<GeneratedTestRootProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GeneratedTestRootLight : GeneratedTestRootDark;

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
