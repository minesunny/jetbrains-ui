import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ViteJSProps = IconProps;

const ViteJSLight: FC<SvgProps> = ({
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
        d="m.975 2.898 6.586 12.031a.5.5 0 0 0 .878 0l6.586-12.031a.5.5 0 0 0-.506-.736l-6.452.874a.5.5 0 0 1-.134 0l-6.452-.874a.5.5 0 0 0-.506.736"
        fill="url(#b)"
      />
      <path
        d="m12.809 3.923-4.663 9.032c-.106.206-.418.097-.373-.13l.66-3.353a.2.2 0 0 0-.26-.228l-.858.29a.2.2 0 0 1-.261-.221l.397-2.415a.2.2 0 0 0-.247-.226l-1.433.363a.2.2 0 0 1-.248-.21l.464-5.655a.2.2 0 0 1 .166-.181L11.66.058a.2.2 0 0 1 .221.266l-1.256 3.399a.2.2 0 0 0 .228.265l1.74-.353a.2.2 0 0 1 .217.288"
        fill="url(#c)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1=".884"
        y1="1.592"
        x2="9.671"
        y2="12.877"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="7.599"
        y1=".296"
        x2="9.212"
        y2="11.762"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset=".083" stopColor="#FFDD35" />
        <stop offset="1" stopColor="#FFA800" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ViteJSDark: FC<SvgProps> = ({
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
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M.968 2.927 7.56 15.148a.5.5 0 0 0 .88 0l6.593-12.221a.5.5 0 0 0-.509-.733l-6.456.886a.5.5 0 0 1-.136 0l-6.456-.886a.5.5 0 0 0-.508.733"
      fill="url(#a)"
    />
    <path
      d="m12.812 3.975-4.666 9.173c-.105.207-.418.099-.374-.129l.662-3.41a.2.2 0 0 0-.261-.227l-.857.294a.2.2 0 0 1-.263-.221l.398-2.459a.2.2 0 0 0-.247-.225l-1.432.368a.2.2 0 0 1-.25-.21l.465-5.744a.2.2 0 0 1 .166-.181L11.66.058a.2.2 0 0 1 .222.266l-1.26 3.46a.2.2 0 0 0 .229.263l1.742-.358a.2.2 0 0 1 .219.286"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1=".884"
        y1="1.615"
        x2="9.833"
        y2="12.94"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="7.599"
        y1=".3"
        x2="9.259"
        y2="11.93"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset=".083" stopColor="#FFDD35" />
        <stop offset="1" stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);

export const ViteJS: FC<ViteJSProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ViteJSLight : ViteJSDark;

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
