import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DataViewProps = IconProps;

const DataViewLight: React.FC<SvgProps> = ({
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
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a5 5 0 0 0-1-.591V6h-3v3.096c-.362.07-.695.179-1 .313V6H6v7h1v1H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      fill="#6C707E"
    />
    <path
      d="M15 10a5 5 0 0 0-1-.591V6h-3v3.096A5 5 0 0 1 12 9c1.273 0 2.26.437 3 1M7 13l.105-.316.001-.002v-.002l.002-.005.005-.014a3 3 0 0 1 .063-.165 6 6 0 0 1 .187-.412c.166-.332.37-.776.744-1.224A5.2 5.2 0 0 1 10 9.41V6H6v7zM10 3H6v2h4zM5 3H3a1 1 0 0 0-1 1v1h3zM2 12V6h3v7H3a1 1 0 0 1-1-1M14 5V4a1 1 0 0 0-1-1h-2v2z"
      fill="#EBECF0"
    />
    <path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16c-3 0-4-3-4-3s1-3 4-3 4 3 4 3-1 3-4 3m2.902-3.021.011.021-.01.021a4.4 4.4 0 0 1-.546.839C13.86 14.456 13.119 15 12 15s-1.86-.544-2.357-1.14a4.4 4.4 0 0 1-.545-.838L9.087 13l.01-.021c.116-.231.295-.537.546-.839C10.14 11.544 10.881 11 12 11s1.86.544 2.357 1.14c.251.302.43.607.545.838"
      fill="#3574F0"
    />
  </svg>
);

const DataViewDark: React.FC<SvgProps> = ({
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
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a5 5 0 0 0-1-.591V6h-3v3.096c-.362.07-.695.179-1 .313V6H6v7h1v1H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      fill="#CED0D6"
    />
    <path
      d="M15 10a5 5 0 0 0-1-.591V6h-3v3.096A5 5 0 0 1 12 9c1.273 0 2.26.437 3 1M7 13l.105-.316.001-.002v-.002l.002-.005.005-.014a3 3 0 0 1 .063-.165 6 6 0 0 1 .187-.412c.166-.332.37-.776.744-1.224A5.2 5.2 0 0 1 10 9.41V6H6v7zM10 3H6v2h4zM5 3H3a1 1 0 0 0-1 1v1h3zM2 12V6h3v7H3a1 1 0 0 1-1-1M14 5V4a1 1 0 0 0-1-1h-2v2z"
      fill="#43454A"
    />
    <path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16c-3 0-4-3-4-3s1-3 4-3 4 3 4 3-1 3-4 3m2.902-3.021.011.021-.01.021a4.4 4.4 0 0 1-.546.839C13.86 14.456 13.119 15 12 15s-1.86-.544-2.357-1.14a4.4 4.4 0 0 1-.545-.838L9.087 13l.01-.021c.116-.231.295-.537.546-.839C10.14 11.544 10.881 11 12 11s1.86.544 2.357 1.14c.251.302.43.607.545.838"
      fill="#548AF7"
    />
  </svg>
);

export const DataView: React.FC<DataViewProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DataViewLight : DataViewDark;

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
