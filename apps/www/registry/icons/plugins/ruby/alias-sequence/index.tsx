import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AliasSequenceProps = IconProps;

const AliasSequenceLight: React.FC<SvgProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
        fill="#EBECF0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
        fill="#6C707E"
      />
      <path
        d="M13.429 16q-.757 0-1.372-.242a2.4 2.4 0 0 1-.973-.672 1.64 1.64 0 0 1-.385-.986h1.065q.026.3.248.542.222.235.587.372.366.137.817.137.456 0 .803-.15.352-.15.542-.418.195-.267.196-.607a.92.92 0 0 0-.21-.614.9.9 0 0 0-.567-.32l-1.613-.294q-.77-.144-1.202-.62-.43-.484-.43-1.221 0-.53.3-.96.307-.438.855-.692Q12.64 9 13.344 9q.699 0 1.26.229.562.228.895.633t.359.901h-1.065a.76.76 0 0 0-.215-.47 1.26 1.26 0 0 0-.51-.327 2.1 2.1 0 0 0-.718-.117q-.405 0-.718.137a1.17 1.17 0 0 0-.49.379.9.9 0 0 0-.17.535q0 .34.19.562.189.222.555.287l1.652.294q.51.09.875.36.372.267.562.665.196.398.196.869 0 .587-.34 1.057-.333.471-.92.738a3.1 3.1 0 0 1-1.313.268"
        fill="#834DF0"
      />
      <path
        d="M9 3.502v8.996a.5.5 0 0 0 .833.373l.506-.455a2.85 2.85 0 0 1-.404-1.51c0-.555.162-1.075.48-1.531l.002-.002a3.1 3.1 0 0 1 1.253-1.025A3.94 3.94 0 0 1 13.345 8c.551 0 1.08.087 1.572.277a.5.5 0 0 0-.083-.65L9.833 3.13A.5.5 0 0 0 9 3.502"
        fill="#EBECF0"
      />
      <path
        d="M13.736 8.015 13.753 8 10 4.623v5.696q-.064.286-.064.588c0 .542.127 1.057.404 1.509l-.506.455A.5.5 0 0 1 9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498c.189.17.216.448.083.65a4.2 4.2 0 0 0-1.18-.262"
        fill="#6C707E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const AliasSequenceDark: React.FC<SvgProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
        fill="#43454A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498"
        fill="#CED0D6"
      />
      <path
        d="M13.429 16q-.757 0-1.372-.242a2.4 2.4 0 0 1-.973-.672 1.64 1.64 0 0 1-.385-.986h1.065q.026.3.248.542.222.235.587.372.366.137.817.137.456 0 .803-.15.352-.15.542-.418.195-.267.196-.607a.92.92 0 0 0-.21-.614.9.9 0 0 0-.567-.32l-1.613-.294q-.77-.144-1.202-.62-.43-.484-.43-1.221 0-.53.3-.96.307-.438.855-.692Q12.64 9 13.344 9q.699 0 1.26.229.562.228.895.633t.359.901h-1.065a.76.76 0 0 0-.215-.47 1.26 1.26 0 0 0-.51-.327 2.1 2.1 0 0 0-.718-.117q-.405 0-.718.137a1.17 1.17 0 0 0-.49.379.9.9 0 0 0-.17.535q0 .34.19.562.189.222.555.287l1.652.294q.51.09.875.36.372.267.562.665.196.398.196.869 0 .587-.34 1.057-.333.471-.92.738a3.1 3.1 0 0 1-1.313.268"
        fill="#B589EC"
      />
      <path
        d="M9 3.502v8.996a.5.5 0 0 0 .833.373l.506-.455a2.85 2.85 0 0 1-.404-1.51c0-.555.162-1.075.48-1.531l.002-.002a3.1 3.1 0 0 1 1.253-1.025A3.94 3.94 0 0 1 13.345 8c.551 0 1.08.087 1.572.277a.5.5 0 0 0-.083-.65L9.833 3.13A.5.5 0 0 0 9 3.502"
        fill="#43454A"
      />
      <path
        d="M13.736 8.015 13.753 8 10 4.623v5.696q-.064.286-.064.588c0 .542.127 1.057.404 1.509l-.506.455A.5.5 0 0 1 9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498c.189.17.216.448.083.65a4.2 4.2 0 0 0-1.18-.262"
        fill="#CED0D6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const AliasSequence: React.FC<AliasSequenceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AliasSequenceLight : AliasSequenceDark;

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
