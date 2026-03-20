import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestGroupProps = IconProps;

const TestGroupLight: FC<SvgProps> = ({
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
      d="M14.472 16q-.412 0-.748-.176a1.4 1.4 0 0 1-.528-.495 1.3 1.3 0 0 1-.193-.704l-.005-3.383h-.99l.005-.874h.616q.21 0 .336-.132a.45.45 0 0 0 .132-.336v-.907h.902v1.375h1.358l-.005.874h-1.359L14 14.537q0 .254.165.423.171.165.423.165h.765V16z"
      fill="#6C707E"
    />
    <path
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2h-2.914v1.36H11v2.874h1V14H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="m6.038 3 2.056 2H13a1 1 0 0 1 1 1v2h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H12v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867z"
      fill="#6C707E"
    />
  </svg>
);

const TestGroupDark: FC<SvgProps> = ({
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
      d="M14.472 16q-.412 0-.748-.176a1.4 1.4 0 0 1-.528-.495 1.3 1.3 0 0 1-.193-.704l-.005-3.383h-.99l.005-.874h.616q.21 0 .336-.132a.45.45 0 0 0 .132-.336v-.907h.902v1.375h1.358l-.005.874h-1.359L14 14.537q0 .254.165.423.171.165.423.165h.765V16z"
      fill="#CED0D6"
    />
    <path
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2h-2.914v1.36H11v2.874h1V14H2.75C1.784 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="m6.038 3 2.056 2H13a1 1 0 0 1 1 1v2h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H12v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867z"
      fill="#CED0D6"
    />
  </svg>
);

export const TestGroup: FC<TestGroupProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestGroupLight : TestGroupDark;

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
