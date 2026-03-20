import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StepOutCodeBlockProps = IconProps;

const StepOutCodeBlockLight: FC<SvgProps> = ({
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
    <rect x="2" y="13" width="5" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.854 5.354a.5.5 0 1 1-.708.707L6 3.914v6.593a.5.5 0 1 1-1 0V3.914L2.854 6.061a.5.5 0 1 1-.708-.707l3-3L5.5 2l.354.354z"
      fill="#6C707E"
    />
    <path
      d="M10.5 16a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5v-1.64a1 1 0 0 0-.49-.86 1 1 0 0 0 .49-.86V9.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 0-1A1.5 1.5 0 0 0 9 9.5v1.64l-1.158.386a.5.5 0 0 0 0 .948L9 12.86v1.64a1.5 1.5 0 0 0 1.5 1.5M12.5 8a.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v1.64a1 1 0 0 0 .49.86 1 1 0 0 0-.49.86v1.64a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1 1.5 1.5 0 0 0 1.5-1.5v-1.64l1.158-.386a.5.5 0 0 0 0-.948L14 11.14V9.5A1.5 1.5 0 0 0 12.5 8"
      fill="#3574F0"
    />
  </svg>
);

const StepOutCodeBlockDark: FC<SvgProps> = ({
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
      <rect x="2" y="13" width="5" height="1" rx=".5" fill="#CED0D6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.854 5.354a.5.5 0 1 1-.708.707L6 3.914v6.593a.5.5 0 1 1-1 0V3.914L2.854 6.061a.5.5 0 1 1-.708-.707l3-3L5.5 2l.354.354z"
        fill="#CED0D6"
      />
      <path
        d="M10.5 16a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5v-1.64a1 1 0 0 0-.49-.86 1 1 0 0 0 .49-.86V9.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 0-1A1.5 1.5 0 0 0 9 9.5v1.64l-1.158.386a.5.5 0 0 0 0 .948L9 12.86v1.64a1.5 1.5 0 0 0 1.5 1.5M12.5 8a.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v1.64a1 1 0 0 0 .49.86 1 1 0 0 0-.49.86v1.64a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1 1.5 1.5 0 0 0 1.5-1.5v-1.64l1.158-.386a.5.5 0 0 0 0-.948L14 11.14V9.5A1.5 1.5 0 0 0 12.5 8"
        fill="#548AF7"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const StepOutCodeBlock: FC<StepOutCodeBlockProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? StepOutCodeBlockLight : StepOutCodeBlockDark;

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
