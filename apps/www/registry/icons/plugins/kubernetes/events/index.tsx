import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EventsProps = IconProps;

const EventsLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.747.775c.072-.5-.561-.779-.882-.387L1.669 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.945 6H9.001z"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.245 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.111 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.89 7H9a1 1 0 0 1-.755-.345M9.747.775c.072-.5-.561-.779-.882-.387L1.669 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.945 6H9.001z"
      fill="#3574F0"
    />
  </svg>
);

const EventsDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.747.775c.072-.5-.561-.779-.882-.387L1.669 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.945 6H9.001z"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.245 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.111 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.89 7H9a1 1 0 0 1-.755-.345M9.747.775c.072-.5-.561-.779-.882-.387L1.669 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.945 6H9.001z"
      fill="#548AF7"
    />
  </svg>
);

export const Events: React.FC<EventsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EventsLight : EventsDark;

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
