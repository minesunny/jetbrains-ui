import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ProjectProps = IconProps;

const ProjectLight: FC<SvgProps> = ({
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
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M3.25 3.25h4.388a.25.25 0 0 1 .16.058l2.722 2.268.209.174H17c.69 0 1.25.56 1.25 1.25v8.167c0 .9-.697 1.583-1.5 1.583H3.25c-.803 0-1.5-.683-1.5-1.583V4.833c0-.9.697-1.583 1.5-1.583Z"
      stroke="#6C707E"
      strokeWidth="1.5"
    />
  </svg>
);

const ProjectDark: FC<SvgProps> = ({
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
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M3.25 3.25h4.388a.25.25 0 0 1 .16.058l2.722 2.268.209.174H17c.69 0 1.25.56 1.25 1.25v8.167c0 .9-.697 1.583-1.5 1.583H3.25c-.803 0-1.5-.683-1.5-1.583V4.833c0-.9.697-1.583 1.5-1.583Z"
      stroke="#CED0D6"
      strokeWidth="1.5"
    />
  </svg>
);

export const Project: FC<ProjectProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProjectLight : ProjectDark;

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
