import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ConfigProps = IconProps;

const ConfigLight: FC<SvgProps> = ({
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
    <path d="M11.998 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.469-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.515-.243l-.654-1.132a.5.5 0 0 1 .047-.568l.451-.548a.5.5 0 0 0 0-.636l-.451-.548a.5.5 0 0 1-.047-.568l.654-1.132a.5.5 0 0 1 .515-.243l.7.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.306a.5.5 0 0 1 .469.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .515.243l.654 1.132a.5.5 0 0 1-.047.568l-.452.548a.5.5 0 0 0 0 .636l.452.548a.5.5 0 0 1 .047.568l-.654 1.132a.5.5 0 0 1-.515.243l-.7-.116a.5.5 0 0 0-.55.317zM11.69 15h.614l.128-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.232-.281a1.5 1.5 0 0 1 0-1.906l.232-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.305 9h-.614l-.128.34a1.5 1.5 0 0 1-1.65.954l-.36-.06-.307.532.232.281a1.5 1.5 0 0 1 0 1.906l-.232.281.307.532.36-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#EDF3FF"
    />
    <path
      d="M3 13V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H11a2 2 0 0 1 2 2v4.1A5 5 0 0 0 8 15H5a2 2 0 0 1-2-2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H11a2 2 0 0 1 2 2v4.1a5 5 0 0 0-1-.1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.416q.235.537.584 1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
  </svg>
);

const ConfigDark: FC<SvgProps> = ({
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
    <path d="M11.998 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.469-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.515-.243l-.654-1.132a.5.5 0 0 1 .047-.568l.451-.548a.5.5 0 0 0 0-.636l-.451-.548a.5.5 0 0 1-.047-.568l.654-1.132a.5.5 0 0 1 .515-.243l.7.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.306a.5.5 0 0 1 .469.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .515.243l.654 1.132a.5.5 0 0 1-.047.568l-.452.548a.5.5 0 0 0 0 .636l.452.548a.5.5 0 0 1 .047.568l-.654 1.132a.5.5 0 0 1-.515.243l-.7-.116a.5.5 0 0 0-.55.317zM11.69 15h.614l.128-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.232-.281a1.5 1.5 0 0 1 0-1.906l.232-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.305 9h-.614l-.128.34a1.5 1.5 0 0 1-1.65.954l-.36-.06-.307.532.232.281a1.5 1.5 0 0 1 0 1.906l-.232.281.307.532.36-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#25324D"
    />
    <path
      d="M3 13V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H11a2 2 0 0 1 2 2v4.1A5 5 0 0 0 8 15H5a2 2 0 0 1-2-2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H11a2 2 0 0 1 2 2v4.1a5 5 0 0 0-1-.1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h2.416q.235.537.584 1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const Config: FC<ConfigProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ConfigLight : ConfigDark;

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
