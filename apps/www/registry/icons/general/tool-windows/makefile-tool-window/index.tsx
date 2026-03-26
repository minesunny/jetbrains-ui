import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MakefileToolWindowProps = IconProps;

const MakefileToolWindowLight: FC<SvgProps> = ({
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
      d="M2 2.5h2.086a.5.5 0 0 1 .353.146L8 6.207l3.56-3.56a.5.5 0 0 1 .354-.147H14a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V6.793l-3.5 3.5-3.5-3.5V13a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const MakefileToolWindowDark: FC<SvgProps> = ({
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
      d="M2 2.5h2.086a.5.5 0 0 1 .353.146L8 6.207l3.56-3.56a.5.5 0 0 1 .354-.147H14a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V6.793l-3.5 3.5-3.5-3.5V13a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const MakefileToolWindow: FC<MakefileToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MakefileToolWindowLight : MakefileToolWindowDark;

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
