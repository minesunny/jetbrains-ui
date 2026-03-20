import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InlayWebInspectorProps = IconProps;

const InlayWebInspectorLight: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#818594">
      <path d="M9.738 10.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path d="M12 6a6 6 0 1 0-4.897 5.899A4 4 0 0 1 4.126 7h-.08a11 11 0 0 1 0-2h1.308C6.06 4.378 6.986 4 8 4s1.94.378 2.646 1h.254q.03.15.051.3c.458.5.791 1.118.948 1.803q.1-.537.101-1.103M1.1 7h1.941a12 12 0 0 1 0-2H1.1a5 5 0 0 0 0 2m2.07 1H1.417a5.02 5.02 0 0 0 2.67 2.62c-.413-.685-.733-1.587-.915-2.62m4.642-4H4.188a7.1 7.1 0 0 1 .585-1.795C5.263 1.225 5.754 1 6 1s.737.225 1.227 1.205c.245.49.449 1.1.585 1.795m2.772 0H8.829c-.182-1.033-.502-1.935-.915-2.62A5.02 5.02 0 0 1 10.584 4M3.171 4c.182-1.033.502-1.935.915-2.62A5.02 5.02 0 0 0 1.416 4z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H12V12H0z" />
      </clipPath>
    </defs>
  </svg>
);

const InlayWebInspectorDark: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#9DA0A8">
      <path d="M9.738 10.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path d="M12 6a6 6 0 1 0-4.897 5.899A4 4 0 0 1 4.126 7h-.08a11 11 0 0 1 0-2h1.308C6.06 4.378 6.986 4 8 4s1.94.378 2.646 1h.254q.03.15.051.3c.458.5.791 1.118.948 1.803q.1-.537.101-1.103M1.1 7h1.941a12 12 0 0 1 0-2H1.1a5 5 0 0 0 0 2m2.07 1H1.417a5.02 5.02 0 0 0 2.67 2.62c-.413-.685-.733-1.587-.915-2.62m4.642-4H4.188a7.1 7.1 0 0 1 .585-1.795C5.263 1.225 5.754 1 6 1s.737.225 1.227 1.205c.245.49.449 1.1.585 1.795m2.772 0H8.829c-.182-1.033-.502-1.935-.915-2.62A5.02 5.02 0 0 1 10.584 4M3.171 4c.182-1.033.502-1.935.915-2.62A5.02 5.02 0 0 0 1.416 4z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H12V12H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const InlayWebInspector: FC<InlayWebInspectorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InlayWebInspectorLight : InlayWebInspectorDark;

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
