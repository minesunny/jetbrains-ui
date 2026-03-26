import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TableHeatmapProps = IconProps;

const TableHeatmapLight: FC<SvgProps> = ({
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
      d="M9.15 1.146a.5.5 0 1 1 .707.708l-.646.646 5.203 5.203a2 2 0 0 1 0 2.828l-3.878 3.88a2 2 0 0 1-2.829 0L2.504 9.206l-.647.647a.5.5 0 0 1-.707-.708zm4.557 7.264L8.504 3.207 3.211 8.5l5.203 5.203a1 1 0 0 0 1.414 0l3.88-3.879a1 1 0 0 0 0-1.414"
      fill="#6C707E"
    />
    <path
      d="m13.532 10 .175-.176A1 1 0 0 0 13.993 9H3.711l1 1z"
      fill="#3574F0"
    />
    <path
      d="m13.532 10-3.704 3.703a1 1 0 0 1-1.414 0L4.711 10z"
      fill="#EDF3FF"
    />
    <path
      d="M2.004 11.308c.17.223.379.503.586.808.243.36.48.741.653 1.092.182.368.26.638.26.792a1.5 1.5 0 0 1-3 0c0-.154.08-.424.262-.792.173-.351.41-.733.653-1.092.207-.305.416-.585.586-.808Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const TableHeatmapDark: FC<SvgProps> = ({
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
      d="M9.15 1.146a.5.5 0 1 1 .707.708l-.646.646 5.203 5.203a2 2 0 0 1 0 2.828l-3.878 3.88a2 2 0 0 1-2.829 0L2.504 9.206l-.647.647a.5.5 0 0 1-.707-.708zm4.557 7.264L8.504 3.207 3.211 8.5l5.203 5.203a1 1 0 0 0 1.414 0l3.88-3.879a1 1 0 0 0 0-1.414"
      fill="#CED0D6"
    />
    <path
      d="m13.532 10 .175-.176A1 1 0 0 0 13.993 9H3.711l1 1z"
      fill="#548AF7"
    />
    <path
      d="m13.532 10-3.704 3.703a1 1 0 0 1-1.414 0L4.711 10z"
      fill="#25324D"
    />
    <path
      d="M2.004 11.308c.17.223.379.503.586.808.243.36.48.741.653 1.092.182.368.26.638.26.792a1.5 1.5 0 0 1-3 0c0-.154.08-.424.262-.792.173-.351.41-.733.653-1.092.207-.305.416-.585.586-.808Z"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const TableHeatmap: FC<TableHeatmapProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TableHeatmapLight : TableHeatmapDark;

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
