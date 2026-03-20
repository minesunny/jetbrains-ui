import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type IbmProps = IconProps;

const IbmLight: FC<SvgProps> = ({
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
      d="M1 5v1.162h.783v3.304h-.762v1.148h2.725V9.466h-.783V6.162h.762V5zM8.756 5.014v1.148h.783v3.304h-.761v1.148h1.942V7.42l1.157 3.193h.023l1.137-3.193v3.194H15V9.466h-.783V6.162h.762V5.014H12.79l-.906 2.56-.918-2.56z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.111 5.014v1.14h.783v3.3h-.783v1.16h2.962c.525 0 .922-.387.922-.387l.311-.367c.089-.088.14-.386.14-.386l.031-.366c0-.183-.074-.388-.074-.388l-.162-.366c-.08-.189-.332-.387-.332-.387v-.358c0 .005.252-.19.332-.375l.162-.36s.074-.2.074-.38l-.032-.36s-.05-.293-.139-.38l-.311-.36s-.397-.38-.922-.38zm3.111 1.148H6.074v1.064h1.148zM6.074 8.388h1.148v1.064H6.074z"
      fill="#000"
    />
  </svg>
);

const IbmDark: FC<SvgProps> = ({
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
      d="M1 5v1.162h.783v3.304h-.762v1.148h2.725V9.466h-.783V6.162h.762V5zM8.756 5.014v1.148h.783v3.304h-.761v1.148h1.942V7.42l1.157 3.193h.023l1.137-3.193v3.194H15V9.466h-.783V6.162h.762V5.014H12.79l-.906 2.56-.918-2.56z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.111 5.014v1.14h.783v3.3h-.783v1.16h2.962c.525 0 .922-.387.922-.387l.311-.367c.089-.088.14-.386.14-.386l.031-.366c0-.183-.074-.388-.074-.388l-.162-.366c-.08-.189-.332-.387-.332-.387v-.358c0 .005.252-.19.332-.375l.162-.36s.074-.2.074-.38l-.032-.36s-.05-.293-.139-.38l-.311-.36s-.397-.38-.922-.38zm3.111 1.148H6.074v1.064h1.148zM6.074 8.388h1.148v1.064H6.074z"
      fill="#fff"
    />
  </svg>
);

export const Ibm: FC<IbmProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IbmLight : IbmDark;

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
