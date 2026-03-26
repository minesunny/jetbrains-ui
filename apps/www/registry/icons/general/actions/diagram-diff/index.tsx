import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DiagramDiffProps = IconProps;

const DiagramDiffLight: FC<SvgProps> = ({
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
      d="m8.5 15.5 2-2-2-2m-3 2H10m2.5-2-2-2 2-2m3 2H11"
      stroke="#3574F0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8.5v1.5h1.879l-.94.94-.057.06H5V10h1a1 1 0 0 1 1 1v1H6v-1H2v3h2.085A1.5 1.5 0 0 0 5.5 15H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2V8.5a1 1 0 0 1 1-1h2.5V6H6a1 1 0 0 1-1-1zm5 0H6v3h4z"
      fill="#6C707E"
    />
  </svg>
);

const DiagramDiffDark: FC<SvgProps> = ({
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
      d="m8.5 15.5 2-2-2-2m-3 2H10m2.5-2-2-2 2-2m3 2H11"
      stroke="#548AF7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8.5v1.5h1.879l-.94.94-.057.06H5V10h1a1 1 0 0 1 1 1v1H6v-1H2v3h2.085A1.5 1.5 0 0 0 5.5 15H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2V8.5a1 1 0 0 1 1-1h2.5V6H6a1 1 0 0 1-1-1zm5 0H6v3h4z"
      fill="#CED0D6"
    />
  </svg>
);

export const DiagramDiff: FC<DiagramDiffProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DiagramDiffLight : DiagramDiffDark;

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
