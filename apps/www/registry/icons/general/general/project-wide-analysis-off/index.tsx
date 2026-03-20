import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ProjectWideAnalysisOffProps = IconProps;

const ProjectWideAnalysisOffLight: FC<SvgProps> = ({
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
      d="M7.5.996h1v6.138a1 1 0 1 1-1 0V5.04a3 3 0 1 0 2.857 1.102l.71-.71A4 4 0 1 1 7.5 4.03v-2.01a6 6 0 1 0 4.985 1.994l.709-.708A7 7 0 1 1 7.5 1.018z"
      fill="#6C707E"
    />
  </svg>
);

const ProjectWideAnalysisOffDark: FC<SvgProps> = ({
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
      d="M7.5.996h1v6.138a1 1 0 1 1-1 0V5.04a3 3 0 1 0 2.857 1.102l.71-.71A4 4 0 1 1 7.5 4.03v-2.01a6 6 0 1 0 4.985 1.994l.709-.708A7 7 0 1 1 7.5 1.018z"
      fill="#CED0D6"
    />
  </svg>
);

export const ProjectWideAnalysisOff: FC<ProjectWideAnalysisOffProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ProjectWideAnalysisOffLight : ProjectWideAnalysisOffDark;

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
