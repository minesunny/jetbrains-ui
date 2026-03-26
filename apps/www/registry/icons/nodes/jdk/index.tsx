import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JdkProps = IconProps;

const JdkLight: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2H6a1 1 0 0 0-1 1v5H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.803 4.717.29.283H13a1 1 0 0 1 1 1v2h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H5v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#6C707E"
    />
    <path
      d="M7 9.5h5.5a.5.5 0 0 1 .5.5v2.25a3.25 3.25 0 0 1-6.5 0V10a.5.5 0 0 1 .5-.5Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path d="M14 9.5a1.5 1.5 0 0 1 0 3h-1v-3z" stroke="#3574F0" />
  </svg>
);

const JdkDark: FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2H6a1 1 0 0 0-1 1v5H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.803 4.717.29.283H13a1 1 0 0 1 1 1v2h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H5v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      fill="#CED0D6"
    />
    <path
      d="M7 9.5h5.5a.5.5 0 0 1 .5.5v2.25a3.25 3.25 0 0 1-6.5 0V10a.5.5 0 0 1 .5-.5Z"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path d="M14 9.5a1.5 1.5 0 0 1 0 3h-1v-3z" stroke="#548AF7" />
  </svg>
);

export const Jdk: FC<JdkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JdkLight : JdkDark;

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
