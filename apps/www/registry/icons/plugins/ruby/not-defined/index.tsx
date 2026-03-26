import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type NotDefinedProps = IconProps;

const NotDefinedLight: React.FC<SvgProps> = ({
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
      d="M8 1a7 7 0 1 0 4 12.746V12h-1.583v-.94c0-.56.12-1.096.395-1.58l.003-.007c.277-.478.67-.851 1.16-1.105A3.4 3.4 0 0 1 13.573 8c.497 0 .978.088 1.421.29Q15 8.144 15 8a7 7 0 0 0-7-7"
      fill="#EDF3FF"
    />
    <path
      d="M8 14a6 6 0 1 1 6-6v.023c.345.037.68.123.994.266Q15 8.145 15 8a7 7 0 1 0-3 5.746v-1.274A5.98 5.98 0 0 1 8 14"
      fill="#3574F0"
    />
    <path
      d="M13 13.582q0-.315.108-.556.113-.246.27-.423.162-.177.426-.418a6 6 0 0 0 .392-.388q.147-.158.245-.373a1.1 1.1 0 0 0 .103-.487q0-.291-.127-.516a.85.85 0 0 0-.348-.35 1 1 0 0 0-.51-.127 1.1 1.1 0 0 0-.568.142.93.93 0 0 0-.377.394q-.133.25-.133.58h-1.063q0-.62.265-1.087.269-.466.754-.717Q12.927 9 13.574 9q.618 0 1.083.236.465.231.715.659.255.423.25.978 0 .432-.137.757-.136.319-.328.536-.192.21-.5.472a7 7 0 0 0-.353.334 1.2 1.2 0 0 0-.21.3.8.8 0 0 0-.084.359v.186H13zm-.102 1.16h1.254V16h-1.254z"
      fill="#6C707E"
    />
  </svg>
);

const NotDefinedDark: React.FC<SvgProps> = ({
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
      d="M8 1a7 7 0 1 0 4 12.746V12h-1.583v-.94c0-.56.12-1.096.395-1.58l.003-.007c.277-.478.67-.851 1.16-1.105A3.4 3.4 0 0 1 13.573 8c.497 0 .978.088 1.421.29Q15 8.144 15 8a7 7 0 0 0-7-7"
      fill="#25324D"
    />
    <path
      d="M8 14a6 6 0 1 1 6-6v.023c.345.037.68.123.994.266Q15 8.145 15 8a7 7 0 1 0-3 5.746v-1.274A5.98 5.98 0 0 1 8 14"
      fill="#548AF7"
    />
    <path
      d="M13 13.582q0-.315.108-.556.113-.246.27-.423.162-.177.426-.418a6 6 0 0 0 .392-.388q.147-.158.245-.373a1.1 1.1 0 0 0 .103-.487q0-.291-.127-.516a.85.85 0 0 0-.348-.35 1 1 0 0 0-.51-.127 1.1 1.1 0 0 0-.568.142.93.93 0 0 0-.377.394q-.133.25-.133.58h-1.063q0-.62.265-1.087.269-.466.754-.717Q12.927 9 13.574 9q.618 0 1.083.236.465.231.715.659.255.423.25.978 0 .432-.137.757-.136.319-.328.536-.192.21-.5.472a7 7 0 0 0-.353.334 1.2 1.2 0 0 0-.21.3.8.8 0 0 0-.084.359v.186H13zm-.102 1.16h1.254V16h-1.254z"
      fill="#CED0D6"
    />
  </svg>
);

export const NotDefined: React.FC<NotDefinedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NotDefinedLight : NotDefinedDark;

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
