import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SassProps = IconProps;

const SassLight: FC<SvgProps> = ({
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
      d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1"
      fill="#CD669A"
    />
    <path
      d="M6.609 10.332a1.8 1.8 0 0 1-.053 1.15q-.021.053-.046.103-.122.253-.323.471c-.407.444-.975.612-1.219.47-.263-.152-.131-.778.34-1.276.508-.536 1.238-.881 1.238-.881l-.001-.002zm5.782-6.336c-.317-1.243-2.379-1.652-4.33-.959-1.16.413-2.418 1.06-3.322 1.906-1.074 1.005-1.245 1.88-1.175 2.245.25 1.29 2.017 2.133 2.743 2.758v.004c-.214.106-1.782.9-2.149 1.71-.387.856.062 1.47.359 1.553.92.256 1.865-.204 2.373-.962.49-.73.449-1.674.236-2.144a2.8 2.8 0 0 1 1.071-.061c1.228.143 1.47.91 1.423 1.23-.046.322-.303.498-.39.552-.086.053-.112.071-.105.11.01.058.05.056.124.044.101-.017.645-.261.668-.853.03-.752-.691-1.594-1.967-1.572-.526.01-.856.06-1.095.148l-.054-.06c-.789-.841-2.247-1.437-2.185-2.568.022-.412.165-1.495 2.802-2.809 2.16-1.076 3.889-.78 4.188-.123.427.937-.924 2.68-3.167 2.932-.855.095-1.305-.236-1.417-.36-.118-.129-.135-.135-.18-.11-.071.04-.026.154 0 .222.068.175.342.484.811.637.412.136 1.416.21 2.63-.26 1.358-.525 2.42-1.988 2.108-3.21"
      fill="#fff"
    />
  </svg>
);

const SassDark: FC<SvgProps> = ({
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
      d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1"
      fill="#CD669A"
    />
    <path
      d="M6.609 10.332a1.8 1.8 0 0 1-.053 1.15q-.021.053-.046.103-.122.253-.323.471c-.407.444-.975.612-1.219.47-.263-.152-.131-.778.34-1.276.508-.536 1.238-.881 1.238-.881l-.001-.002zm5.782-6.336c-.317-1.243-2.379-1.652-4.33-.959-1.16.413-2.418 1.06-3.322 1.906-1.074 1.005-1.245 1.88-1.175 2.245.25 1.29 2.017 2.133 2.743 2.758v.004c-.214.106-1.782.9-2.149 1.71-.387.856.062 1.47.359 1.553.92.256 1.865-.204 2.373-.962.49-.73.449-1.674.236-2.144a2.8 2.8 0 0 1 1.071-.061c1.228.143 1.47.91 1.423 1.23-.046.322-.303.498-.39.552-.086.053-.112.071-.105.11.01.058.05.056.124.044.101-.017.645-.261.668-.853.03-.752-.691-1.594-1.967-1.572-.526.01-.856.06-1.095.148l-.054-.06c-.789-.841-2.247-1.437-2.185-2.568.022-.412.165-1.495 2.802-2.809 2.16-1.076 3.889-.78 4.188-.123.427.937-.924 2.68-3.167 2.932-.855.095-1.305-.236-1.417-.36-.118-.129-.135-.135-.18-.11-.071.04-.026.154 0 .222.068.175.342.484.811.637.412.136 1.416.21 2.63-.26 1.358-.525 2.42-1.988 2.108-3.21"
      fill="#fff"
    />
  </svg>
);

export const Sass: FC<SassProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SassLight : SassDark;

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
