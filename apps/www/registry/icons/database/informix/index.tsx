import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InformixProps = IconProps;

const InformixLight: FC<SvgProps> = ({
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
      d="M8.783 1.393a1.5 1.5 0 0 0-1.566 0L2.746 4.128a1.5 1.5 0 0 0-.718 1.28v5.102a1.5 1.5 0 0 0 .798 1.325l4.471 2.371a1.5 1.5 0 0 0 1.346.03l4.494-2.133a.5.5 0 0 0-.43-.904l-4.493 2.134a.5.5 0 0 1-.448-.01l-4.472-2.371a.5.5 0 0 1-.266-.442V5.407a.5.5 0 0 1 .24-.426l4.47-2.735a.5.5 0 0 1 .522 0l4.528 2.772a.5.5 0 0 1 .24.427V7.24h-.182a.2.2 0 0 0-.179.29l.677 1.352a.2.2 0 0 0 .357 0l.677-1.352a.2.2 0 0 0-.179-.29h-.172V5.445a1.5 1.5 0 0 0-.717-1.28z"
      fill="#DB5860"
    />
    <path
      d="M8.77 3.87a1.5 1.5 0 0 0-1.544.02l-1.318.816a.5.5 0 0 0 .527.85l1.317-.815a.5.5 0 0 1 .515-.007l2.497 1.455a.5.5 0 0 1 .249.434L11 9.452a.5.5 0 0 1-.275.444l-2.504 1.262a.5.5 0 0 1-.455-.002L5.274 9.87a.5.5 0 0 1-.271-.447l.018-3.317a.5.5 0 1 0-1-.005l-.018 3.317a1.5 1.5 0 0 0 .813 1.341l2.493 1.286a1.5 1.5 0 0 0 1.362.006l2.505-1.262a1.5 1.5 0 0 0 .825-1.333l.012-2.83a1.5 1.5 0 0 0-.745-1.301z"
      fill="#DB5860"
    />
    <path
      d="M7.76 5.877a.5.5 0 0 1 .252-.066l-.014 2.195.252-.165-.242.163 2.003.789v.177a.5.5 0 0 1-.28.446l-1.502.739a.5.5 0 0 1-.44 0l-1.5-.738a.5.5 0 0 1-.28-.449V7.172a.5.5 0 0 1 .25-.433z"
      fill="#DB5860"
    />
    <path
      d="M9.823 6.785a.5.5 0 0 1 .195.399l-.007 1.609-2.002-.79z"
      fill="#F2F2F3"
    />
    <path
      d="m8.012 5.81-.014 2.196L9.841 6.8a.5.5 0 0 0-.073-.052l-1.51-.87a.5.5 0 0 0-.246-.067"
      fill="#E5B1B4"
    />
  </svg>
);

const InformixDark: FC<SvgProps> = ({
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
      d="M8.783 1.393a1.5 1.5 0 0 0-1.566 0L2.746 4.128a1.5 1.5 0 0 0-.718 1.28v5.102a1.5 1.5 0 0 0 .798 1.325l4.471 2.371a1.5 1.5 0 0 0 1.346.03l4.494-2.133a.5.5 0 0 0-.43-.904l-4.493 2.134a.5.5 0 0 1-.448-.01l-4.472-2.371a.5.5 0 0 1-.266-.442V5.407a.5.5 0 0 1 .24-.426l4.47-2.735a.5.5 0 0 1 .522 0l4.528 2.772a.5.5 0 0 1 .24.427V7.24h-.182a.2.2 0 0 0-.179.29l.677 1.352a.2.2 0 0 0 .357 0l.677-1.352a.2.2 0 0 0-.179-.29h-.172V5.445a1.5 1.5 0 0 0-.717-1.28z"
      fill="#DB5860"
    />
    <path
      d="M8.77 3.87a1.5 1.5 0 0 0-1.544.02l-1.318.816a.5.5 0 0 0 .527.85l1.317-.815a.5.5 0 0 1 .515-.007l2.497 1.455a.5.5 0 0 1 .249.434L11 9.452a.5.5 0 0 1-.275.444l-2.504 1.262a.5.5 0 0 1-.455-.002L5.274 9.87a.5.5 0 0 1-.271-.447l.018-3.317a.5.5 0 1 0-1-.005l-.018 3.317a1.5 1.5 0 0 0 .813 1.341l2.493 1.286a1.5 1.5 0 0 0 1.362.006l2.505-1.262a1.5 1.5 0 0 0 .825-1.333l.012-2.83a1.5 1.5 0 0 0-.745-1.301z"
      fill="#DB5860"
    />
    <path
      d="M7.76 5.877a.5.5 0 0 1 .252-.066l-.014 2.195.252-.165-.242.163 2.003.789v.177a.5.5 0 0 1-.28.446l-1.502.739a.5.5 0 0 1-.44 0l-1.5-.738a.5.5 0 0 1-.28-.449V7.172a.5.5 0 0 1 .25-.433z"
      fill="#DB5860"
    />
    <path
      d="M9.823 6.785a.5.5 0 0 1 .195.399l-.007 1.609-2.002-.79z"
      fill="#F2F2F3"
    />
    <path
      d="m8.012 5.81-.014 2.196L9.841 6.8a.5.5 0 0 0-.073-.052l-1.51-.87a.5.5 0 0 0-.246-.067"
      fill="#E5B1B4"
    />
  </svg>
);

export const Informix: FC<InformixProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InformixLight : InformixDark;

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
