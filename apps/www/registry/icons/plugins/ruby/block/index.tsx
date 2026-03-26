import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BlockProps = IconProps;

const BlockLight: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M5.016 9.006a.47.47 0 0 0-.14-.375.55.55 0 0 0-.393-.14h-.368v-.986h.368a.53.53 0 0 0 .394-.143.5.5 0 0 0 .14-.39l-.019-.733a1.06 1.06 0 0 1 .179-.643 1.2 1.2 0 0 1 .536-.433 2 2 0 0 1 .801-.154H7v.966h-.393a.6.6 0 0 0-.447.168.57.57 0 0 0-.157.432l.014.622a.69.69 0 0 1-.214.554q-.222.204-.594.233.369.064.59.282.225.214.218.533l-.014.704q-.007.261.146.404.155.143.422.143h.43v.965h-.523q-.425 0-.768-.146a1.2 1.2 0 0 1-.53-.408.97.97 0 0 1-.182-.604zM10.984 9.006a.47.47 0 0 1 .14-.375.55.55 0 0 1 .393-.14h.368v-.986h-.368a.54.54 0 0 1-.397-.143.51.51 0 0 1-.136-.39l.018-.733a1.06 1.06 0 0 0-.179-.643 1.2 1.2 0 0 0-.536-.433 2 2 0 0 0-.8-.154H9v.966h.393q.279 0 .444.168a.56.56 0 0 1 .16.432l-.014.622q-.01.347.211.554.226.204.597.233a1.1 1.1 0 0 0-.593.282.69.69 0 0 0-.215.533l.014.704q.007.261-.146.404-.154.143-.422.143H9v.965h.522q.426 0 .765-.146.343-.144.533-.408a.97.97 0 0 0 .182-.604z"
      fill="#DB3B4B"
    />
  </svg>
);

const BlockDark: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M5.016 9.006a.47.47 0 0 0-.14-.375.55.55 0 0 0-.393-.14h-.368v-.986h.368a.53.53 0 0 0 .394-.143.5.5 0 0 0 .14-.39l-.019-.733a1.06 1.06 0 0 1 .179-.643 1.2 1.2 0 0 1 .536-.433 2 2 0 0 1 .801-.154H7v.966h-.393a.6.6 0 0 0-.447.168.57.57 0 0 0-.157.432l.014.622a.69.69 0 0 1-.214.554q-.222.204-.594.233.369.064.59.282.225.214.218.533l-.014.704q-.007.261.146.404.155.143.422.143h.43v.965h-.523q-.425 0-.768-.146a1.2 1.2 0 0 1-.53-.408.97.97 0 0 1-.182-.604zM10.984 9.006a.47.47 0 0 1 .14-.375.55.55 0 0 1 .393-.14h.368v-.986h-.368a.54.54 0 0 1-.397-.143.51.51 0 0 1-.136-.39l.018-.733a1.06 1.06 0 0 0-.179-.643 1.2 1.2 0 0 0-.536-.433 2 2 0 0 0-.8-.154H9v.966h.393q.279 0 .444.168a.56.56 0 0 1 .16.432l-.014.622q-.01.347.211.554.226.204.597.233a1.1 1.1 0 0 0-.593.282.69.69 0 0 0-.215.533l.014.704q.007.261-.146.404-.154.143-.422.143H9v.965h.522q.426 0 .765-.146.343-.144.533-.408a.97.97 0 0 0 .182-.604z"
      fill="#DB5C5C"
    />
  </svg>
);

export const Block: React.FC<BlockProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BlockLight : BlockDark;

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
