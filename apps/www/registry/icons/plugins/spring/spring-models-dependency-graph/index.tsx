import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SpringModelsDependencyGraphProps = IconProps;

const SpringModelsDependencyGraphLight: React.FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M2 3h1V2H2zM1 14v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m1-3v3h3v-3zM10 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1 3h3V2h-3z"
      fill="#6C707E"
    />
    <path
      d="M5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M2.5 5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M12.5 7a.5.5 0 0 1 .5.5v2.353a3.574 3.574 0 0 1-1 .306V7.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <path
      d="M15.421 14.726C16.79 12.78 15.304 9 15.304 9s-.603 1.309-2.255 1.917c-1.444.53-2.408.084-3.577.662C8.49 12.064 8 12.819 8 13.955c0 .694.324 1.148.821 1.448 5.12-.677 6.08-3.91 6.08-3.91s-.537 3.444-4.932 4.32c.653.132 1.381.166 2.039.183 1.424.038 2.67-.212 3.413-1.27"
      fill="#55A76A"
    />
  </svg>
);

const SpringModelsDependencyGraphDark: React.FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M2 3h1V2H2zM1 14v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m1-3v3h3v-3zM10 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1 3h3V2h-3z"
      fill="#CED0D6"
    />
    <path
      d="M5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M2.5 5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M12.5 7a.5.5 0 0 1 .5.5v2.353a3.574 3.574 0 0 1-1 .306V7.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <path
      d="M15.421 14.726C16.79 12.78 15.304 9 15.304 9s-.603 1.309-2.255 1.917c-1.444.53-2.408.084-3.577.662C8.49 12.064 8 12.819 8 13.955c0 .694.324 1.148.821 1.448 5.12-.677 6.08-3.91 6.08-3.91s-.537 3.444-4.932 4.32c.653.132 1.381.166 2.039.183 1.424.038 2.67-.212 3.413-1.27"
      fill="#57965C"
    />
  </svg>
);

export const SpringModelsDependencyGraph: React.FC<
  SpringModelsDependencyGraphProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? SpringModelsDependencyGraphLight
      : SpringModelsDependencyGraphDark;

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
