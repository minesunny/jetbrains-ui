import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowRunWithCoverageProps = IconProps;

const ToolWindowRunWithCoverageLight: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#6C707E">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      />
      <path d="M13 4.167v3.948l1 .625V3.5L8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987.31.196.613.387.896.573L8 16v-1.196q-.312-.2-.633-.402l-.005-.003c-.95-.6-1.897-1.2-2.662-1.886C3.679 11.598 3 10.556 3 9.179V4.167l5-2.084z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ToolWindowRunWithCoverageDark: FC<SvgProps> = ({
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
      <g clipPath="url(#b)" fill="#CED0D6">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
        />
        <path d="M13 4.167v3.948l1 .625V3.5L8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987.31.196.613.387.896.573L8 16v-1.196q-.312-.2-.633-.402l-.005-.003c-.95-.6-1.897-1.2-2.662-1.886C3.679 11.598 3 10.556 3 9.179V4.167l5-2.084z" />
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

export const ToolWindowRunWithCoverage: FC<ToolWindowRunWithCoverageProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? ToolWindowRunWithCoverageLight
      : ToolWindowRunWithCoverageDark;

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
