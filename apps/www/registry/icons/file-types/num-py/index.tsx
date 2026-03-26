import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type NumPyProps = IconProps;

const NumPyLight: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="m11.475 10.699.004 3.313-2.937 1.467v-3.312zM15 8.927v3.324l-2.505 1.252-.002-3.31zm-3.529-2.664.003 3.278-2.932 1.459v-3.28zm3.53-1.756v3.257l-2.508 1.276-.002-3.285zm-6.906-.386 2.622 1.325-2.72 1.367L5.425 5.52zM4.45 2.28l2.5 1.263-2.676 1.398-2.568-1.29zm7.147.019 2.693 1.352-2.408 1.21-2.627-1.326zM8.013.5l2.424 1.217-2.324 1.242-2.498-1.261z"
        fill="#4DABCF"
      />
      <path
        d="m7.505 7.722-1.978-.996v4.303s-2.42-5.153-2.644-5.616c-.029-.06-.148-.125-.178-.14C2.27 5.043 1 4.4 1 4.4v7.602l1.758.941V8.97s2.394 4.605 2.418 4.655.265.536.522.706c.342.227 1.807 1.109 1.807 1.109z"
        fill="#4D77CF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(1 .5)" d="M0 0H14V15H0z" />
      </clipPath>
    </defs>
  </svg>
);

const NumPyDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="m11.475 10.699.004 3.313-2.937 1.467v-3.312zM15 8.927v3.324l-2.505 1.252-.002-3.31zm-3.529-2.664.003 3.278-2.932 1.459v-3.28zm3.53-1.756v3.257l-2.508 1.276-.002-3.285zm-6.906-.386 2.622 1.325-2.72 1.367L5.425 5.52zM4.45 2.28l2.5 1.263-2.676 1.398-2.568-1.29zm7.147.019 2.693 1.352-2.408 1.21-2.627-1.326zM8.013.5l2.424 1.217-2.324 1.242-2.498-1.261z"
        fill="#4DABCF"
      />
      <path
        d="m7.505 7.722-1.978-.996v4.303s-2.42-5.153-2.644-5.616c-.029-.06-.148-.125-.178-.14C2.27 5.043 1 4.4 1 4.4v7.602l1.758.941V8.97s2.394 4.605 2.418 4.655.265.536.522.706c.342.227 1.807 1.109 1.807 1.109z"
        fill="#4D77CF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(1 .5)" d="M0 0H14V15H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const NumPy: FC<NumPyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NumPyLight : NumPyDark;

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
