import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BazelConfigProps = IconProps;

const BazelConfigLight: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#EBECF0"
    />
    <path
      d="M15 8V4.5l-2.523 2.523c.94.089 1.806.439 2.522.977"
      fill="#43A047"
    />
    <path
      d="M15 4.5 11.5 1 8 4.5l2.677 2.677a5 5 0 0 1 1.8-.154z"
      fill="#76D275"
    />
    <path
      d="M10.677 7.177 8 4.5 4.5 8l2.677 2.677a5.01 5.01 0 0 1 3.5-3.5"
      fill="#43A047"
    />
    <path d="m4.5 8 2.677 2.677A5 5 0 0 0 7 12v2l-2.5-2.5z" fill="#00701A" />
  </svg>
);

const BazelConfigDark: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#43454A"
    />
    <path
      d="M15 8V4.5l-2.523 2.523c.94.089 1.806.439 2.522.977"
      fill="#43A047"
    />
    <path
      d="M15 4.5 11.5 1 8 4.5l2.677 2.677a5 5 0 0 1 1.8-.154z"
      fill="#76D275"
    />
    <path
      d="M10.677 7.177 8 4.5 4.5 8l2.677 2.677a5.01 5.01 0 0 1 3.5-3.5"
      fill="#43A047"
    />
    <path d="m4.5 8 2.677 2.677A5 5 0 0 0 7 12v2l-2.5-2.5z" fill="#00701A" />
  </svg>
);

export const BazelConfig: React.FC<BazelConfigProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BazelConfigLight : BazelConfigDark;

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
