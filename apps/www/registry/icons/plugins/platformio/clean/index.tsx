import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CleanProps = IconProps;

const CleanLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M8.936 10.143 7.63 14.488a6.5 6.5 0 0 1-6.12-6.12l4.345-1.305z"
        stroke="#6C707E"
      />
      <path d="M14.5 1.5 10 6" stroke="#6C707E" strokeLinecap="round" />
      <path
        d="m6.86 6.357.105-.105a1.972 1.972 0 0 1 2.789 2.789l-.106.105"
        stroke="#6C707E"
      />
      <g clipPath="url(#b)">
        <path
          d="M13 16v-5.647q.554.003 1.09.135l.208-.72a.4.4 0 0 1-.205-.35.422.422 0 0 1 .845 0 .413.413 0 0 1-.385.407l-.21.733c.8.253 1.66.815 1.66 2.067C15.997 14.372 13.557 16 13 16"
          fill="#E66D17"
        />
        <path
          d="M13.752 14.15c-.475-.734-.275-2.444.968-2.688a.81.81 0 0 1 .881.645c.31 1.02-1.516 2.447-1.849 2.044"
          fill="#fff"
        />
        <path
          d="M14.5 12.577a.37.37 0 0 0-.35.453.373.373 0 0 0 .736-.08.38.38 0 0 0-.385-.373M11.903 10.505l-.206-.748a.4.4 0 0 0 .196-.345.422.422 0 0 0-.846 0 .415.415 0 0 0 .421.409l.206.75c-.803.257-1.674.821-1.674 2.054.018 1.781 2.44 3.375 2.997 3.375v-5.647q-.557.012-1.094.152"
          fill="#E66D17"
        />
        <path
          d="M12.33 14.151c-.333.404-2.16-1.024-1.85-2.044a.81.81 0 0 1 .883-.645c1.243.245 1.444 1.954.968 2.69"
          fill="#fff"
        />
        <path
          d="M11.56 12.588a.373.373 0 1 0 .384.373.38.38 0 0 0-.385-.373"
          fill="#E66D17"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const CleanDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M8.936 10.143 7.63 14.488a6.5 6.5 0 0 1-6.12-6.12l4.345-1.305z"
        stroke="#CED0D6"
      />
      <path d="M14.5 1.5 10 6" stroke="#CED0D6" strokeLinecap="round" />
      <path
        d="m6.86 6.357.105-.105a1.972 1.972 0 0 1 2.789 2.789l-.106.105"
        stroke="#CED0D6"
      />
      <g clipPath="url(#b)">
        <path
          d="M13 16v-5.647q.554.003 1.09.135l.208-.72a.4.4 0 0 1-.205-.35.422.422 0 0 1 .845 0 .413.413 0 0 1-.385.407l-.21.733c.8.253 1.66.815 1.66 2.067C15.997 14.372 13.557 16 13 16"
          fill="#C77D55"
        />
        <path
          d="M13.752 14.15c-.475-.734-.275-2.444.968-2.688a.81.81 0 0 1 .881.645c.31 1.02-1.516 2.447-1.849 2.044"
          fill="#fff"
        />
        <path
          d="M14.5 12.577a.37.37 0 0 0-.35.453.373.373 0 0 0 .736-.08.38.38 0 0 0-.385-.373M11.903 10.505l-.206-.748a.4.4 0 0 0 .196-.345.422.422 0 0 0-.846 0 .415.415 0 0 0 .421.409l.206.75c-.803.257-1.674.821-1.674 2.054.018 1.781 2.44 3.375 2.997 3.375v-5.647q-.557.012-1.094.152"
          fill="#C77D55"
        />
        <path
          d="M12.33 14.151c-.333.404-2.16-1.024-1.85-2.044a.81.81 0 0 1 .883-.645c1.243.245 1.444 1.954.968 2.69"
          fill="#fff"
        />
        <path
          d="M11.56 12.588a.373.373 0 1 0 .384.373.38.38 0 0 0-.385-.373"
          fill="#C77D55"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Clean: React.FC<CleanProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CleanLight : CleanDark;

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
