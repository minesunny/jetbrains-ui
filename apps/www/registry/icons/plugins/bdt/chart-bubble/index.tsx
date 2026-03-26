import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChartBubbleProps = IconProps;

const ChartBubbleLight: React.FC<SvgProps> = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <circle cx="8.5" cy="4.5" r="2" fill="#EDF3FF" stroke="#3574F0" />
    <circle cx="13" cy="8" r="1.5" fill="#EDF3FF" stroke="#3574F0" />
    <circle cx="5.5" cy="9.5" r="1" fill="#EDF3FF" stroke="#3574F0" />
  </svg>
);

const ChartBubbleDark: React.FC<SvgProps> = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <circle cx="8.5" cy="4.5" r="2" fill="#25324D" stroke="#548AF7" />
    <circle cx="13" cy="8" r="1.5" fill="#25324D" stroke="#548AF7" />
    <circle cx="5.5" cy="9.5" r="1" fill="#25324D" stroke="#548AF7" />
  </svg>
);

export const ChartBubble: React.FC<ChartBubbleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChartBubbleLight : ChartBubbleDark;

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
