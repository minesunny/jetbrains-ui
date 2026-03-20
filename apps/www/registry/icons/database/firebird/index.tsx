import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FirebirdProps = IconProps;

const FirebirdLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.353 1.271q4.595 1.319 5.051 4.603.094 4.521-3.749 4.712c-.825-.109-1.09-.786-.58-1.422q1.216-1.375 1.08-2.513-.1-.677-1.55-1.397.195-.24 1.004-.114.703.072.446-.654c.137.586-.774.5-2.736-.248q-.098-.04-.2-.077-.98-.23-.756.757-.54-.024-.817.082-1.423.858.088 1.53.077-.474.968-.447.391.116.511.237.135.114.206.225a.42.42 0 0 1 0 .506q-.164.252-.662.496-2.196.708-2.336 2.456v.491l.001.013.002.013c.151 1.45.562 2.456 1.168 3.084.342.34 1.045.828 1.827 1.07a3 3 0 0 0 1.028.15c3.658-.166 6.474-3.056 6.474-6.794a6.77 6.77 0 0 0-6.468-6.759m-.66 3.652h-.728q-.095-.427.354-.217.158.07.374.217"
      fill="url(#a)"
    />
    <path
      d="M5.691 14.404c-.848-.754-1.402-1.522-1.53-2.542-4.532-5.103-.651-9.78 3.398-10.58A6.768 6.768 0 0 0 5.386 14.25z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="14.819"
        y1="14.841"
        x2="14.819"
        y2="1.289"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F40A0B" />
        <stop offset="1" stopColor="#F5E710" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="14.819"
        y1="14.841"
        x2="14.819"
        y2="1.289"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F40A0B" />
        <stop offset="1" stopColor="#F5E710" />
      </linearGradient>
    </defs>
  </svg>
);

const FirebirdDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.353 1.271q4.595 1.319 5.051 4.603.094 4.521-3.749 4.712c-.825-.109-1.09-.786-.58-1.422q1.216-1.375 1.08-2.513-.1-.677-1.55-1.397.195-.24 1.004-.114.703.072.446-.654c.137.586-.774.5-2.736-.248q-.098-.04-.2-.077-.98-.23-.756.757-.54-.024-.817.082-1.423.858.088 1.53.077-.474.968-.447.391.116.511.237.135.114.206.225a.42.42 0 0 1 0 .506q-.164.252-.662.496-2.196.708-2.336 2.456v.491l.001.013.002.013c.151 1.45.562 2.456 1.168 3.084.342.34 1.045.828 1.827 1.07a3 3 0 0 0 1.028.15c3.658-.166 6.474-3.056 6.474-6.794a6.77 6.77 0 0 0-6.468-6.759m-.66 3.652h-.728q-.095-.427.354-.217.158.07.374.217"
      fill="url(#a)"
    />
    <path
      d="M5.691 14.404c-.848-.754-1.402-1.522-1.53-2.542-4.532-5.103-.651-9.78 3.398-10.58A6.768 6.768 0 0 0 5.386 14.25z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="14.819"
        y1="14.841"
        x2="14.819"
        y2="1.289"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F40A0B" />
        <stop offset="1" stopColor="#F5E710" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="14.819"
        y1="14.841"
        x2="14.819"
        y2="1.289"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F40A0B" />
        <stop offset="1" stopColor="#F5E710" />
      </linearGradient>
    </defs>
  </svg>
);

export const Firebird: FC<FirebirdProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FirebirdLight : FirebirdDark;

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
