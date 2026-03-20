import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowTeamCityProps = IconProps;

const ToolWindowTeamCityLight: FC<SvgProps> = ({
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
      d="M4 11h4v1H4zM5 5H3.2V3.997L7.803 4v1H6.001v4H5zM10.566 3.997c-1.505 0-2.558 1.143-2.558 2.533v.017L8 6.538c0 1.407 1.07 2.517 2.517 2.517.946 0 1.513-.337 2.015-.872l-.691-.69c-.387.353-.732.575-1.291.575-.84 0-1.423-.699-1.423-1.538v-.016c0-.84.592-1.522 1.423-1.522.493 0 .88.206 1.258.551l.69-.79c-.452-.452-1.003-.756-1.932-.756"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m0 1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
      fill="#6C707E"
    />
  </svg>
);

const ToolWindowTeamCityDark: FC<SvgProps> = ({
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
      d="M4 11h4v1H4zM5 5H3.2V3.997L7.803 4v1H6.001v4H5zM10.566 3.997c-1.505 0-2.558 1.143-2.558 2.533v.017L8 6.538c0 1.407 1.07 2.517 2.517 2.517.946 0 1.513-.337 2.015-.872l-.691-.69c-.387.353-.732.575-1.291.575-.84 0-1.423-.699-1.423-1.538v-.016c0-.84.592-1.522 1.423-1.522.493 0 .88.206 1.258.551l.69-.79c-.452-.452-1.003-.756-1.932-.756"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m0 1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
      fill="#CED0D6"
    />
  </svg>
);

export const ToolWindowTeamCity: FC<ToolWindowTeamCityProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowTeamCityLight : ToolWindowTeamCityDark;

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
