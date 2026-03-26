import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ArbitraryClusterProps = IconProps;

const ArbitraryClusterLight: React.FC<SvgProps> = ({
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
    <path d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#EDF3FF"
    />
    <path
      d="M9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.135 7.002a5 5 0 0 1 1.5.271 1 1 0 1 0-1.5-.271M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.874 3.701a2 2 0 1 0-3.747 0L4.3 4.98A2 2 0 1 0 3.192 8.49l.676 1.86a2 2 0 1 0 .94-.342l-.676-1.86a2 2 0 0 0 .742-2.35L6.7 4.52c.35.3.804.48 1.3.48s.95-.18 1.3-.48L11.126 5.8a2 2 0 0 0-.04 1.284 5 5 0 0 1 1.049-.081 1 1 0 1 1 1.5.271q.502.175.95.446A2 2 0 0 0 11.7 4.98zm-.878-.614Q9 3.043 9 3a1 1 0 1 0-.004.087m-5.23 4.056A1 1 0 0 1 3 7.5a1 1 0 1 1 .766-.357M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#6C707E"
    />
  </svg>
);

const ArbitraryClusterDark: React.FC<SvgProps> = ({
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
    <path d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#25324D"
    />
    <path
      d="M9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.135 7.002a5 5 0 0 1 1.5.271 1 1 0 1 0-1.5-.271M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.874 3.701a2 2 0 1 0-3.747 0L4.3 4.98A2 2 0 1 0 3.192 8.49l.676 1.86a2 2 0 1 0 .94-.342l-.676-1.86a2 2 0 0 0 .742-2.35L6.7 4.52c.35.3.804.48 1.3.48s.95-.18 1.3-.48L11.126 5.8a2 2 0 0 0-.04 1.284 5 5 0 0 1 1.049-.081 1 1 0 1 1 1.5.271q.502.175.95.446A2 2 0 0 0 11.7 4.98zm-.878-.614Q9 3.043 9 3a1 1 0 1 0-.004.087m-5.23 4.056A1 1 0 0 1 3 7.5a1 1 0 1 1 .766-.357M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#CED0D6"
    />
  </svg>
);

export const ArbitraryCluster: React.FC<ArbitraryClusterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ArbitraryClusterLight : ArbitraryClusterDark;

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
