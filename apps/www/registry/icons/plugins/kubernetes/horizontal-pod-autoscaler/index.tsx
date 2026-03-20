import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HorizontalPodAutoscalerProps = IconProps;

const HorizontalPodAutoscalerLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M2.146 15.854a.5.5 0 0 0 .708-.708L1.707 14H6.5a.5.5 0 0 0 0-1H1.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708zM13.146 11.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 14H9.5a.5.5 0 0 1 0-1h4.793l-1.147-1.146a.5.5 0 0 1 0-.708"
      fill="#548AF7"
    />
    <path
      d="M14.5 10.382A1.5 1.5 0 0 0 12.085 12h-8.17A1.5 1.5 0 0 0 1.5 10.382V4.5l6.5-3 6.5 3z"
      fill="#EBECF0"
    />
    <path
      d="M7.79 1.046a.5.5 0 0 1 .42 0l6.5 3A.5.5 0 0 1 15 4.5v6.379l-.44-.44a1.5 1.5 0 0 0-.56-.354V4.82L8 2.05 2 4.82v5.265c-.205.073-.397.19-.56.354l-.44.44V4.5a.5.5 0 0 1 .29-.454z"
      fill="#6C707E"
    />
    <path
      d="M8.5 12h-1V7.825L3.297 5.957a.5.5 0 0 1 .406-.914L8 6.953l4.297-1.91a.5.5 0 1 1 .406.914L8.5 7.825z"
      fill="#6C707E"
    />
  </svg>
);

const HorizontalPodAutoscalerDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M2.146 15.854a.5.5 0 0 0 .708-.708L1.707 14H6.5a.5.5 0 0 0 0-1H1.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708zM13.146 11.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 14H9.5a.5.5 0 0 1 0-1h4.793l-1.147-1.146a.5.5 0 0 1 0-.708"
      fill="#548AF7"
    />
    <path
      d="M14.5 10.382A1.5 1.5 0 0 0 12.085 12h-8.17A1.5 1.5 0 0 0 1.5 10.382V4.5l6.5-3 6.5 3z"
      fill="#43454A"
    />
    <path
      d="M7.79 1.046a.5.5 0 0 1 .42 0l6.5 3A.5.5 0 0 1 15 4.5v6.379l-.44-.44a1.5 1.5 0 0 0-.56-.354V4.82L8 2.05 2 4.82v5.265c-.205.073-.397.19-.56.354l-.44.44V4.5a.5.5 0 0 1 .29-.454z"
      fill="#CED0D6"
    />
    <path
      d="M8.5 12h-1V7.825L3.297 5.957a.5.5 0 0 1 .406-.914L8 6.953l4.297-1.91a.5.5 0 1 1 .406.914L8.5 7.825z"
      fill="#CED0D6"
    />
  </svg>
);

export const HorizontalPodAutoscaler: React.FC<
  HorizontalPodAutoscalerProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? HorizontalPodAutoscalerLight
      : HorizontalPodAutoscalerDark;

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
