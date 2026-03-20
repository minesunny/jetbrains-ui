import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowEduCourseTaskProps = IconProps;

const ToolWindowEduCourseTaskLight: FC<SvgProps> = ({
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
      d="M1.22 2.086a.5.5 0 0 1 .466-.05l5 2A.5.5 0 0 1 7 4.5v9a.5.5 0 0 1-.686.464l-5-2A.5.5 0 0 1 1 11.5v-9a.5.5 0 0 1 .22-.414M2 3.239v7.923l4 1.6V4.839zM13.78 2.086A.5.5 0 0 1 14 2.5v9a.5.5 0 0 1-.314.464l-5 2A.5.5 0 0 1 8 13.5v-9a.5.5 0 0 1 .314-.464l5-2a.5.5 0 0 1 .466.05M9 4.839v7.922l4-1.6V3.24z"
      fill="#6C707E"
    />
  </svg>
);

const ToolWindowEduCourseTaskDark: FC<SvgProps> = ({
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
      d="M1.22 2.086a.5.5 0 0 1 .466-.05l5 2A.5.5 0 0 1 7 4.5v9a.5.5 0 0 1-.686.464l-5-2A.5.5 0 0 1 1 11.5v-9a.5.5 0 0 1 .22-.414M2 3.239v7.923l4 1.6V4.839zM13.78 2.086A.5.5 0 0 1 14 2.5v9a.5.5 0 0 1-.314.464l-5 2A.5.5 0 0 1 8 13.5v-9a.5.5 0 0 1 .314-.464l5-2a.5.5 0 0 1 .466.05M9 4.839v7.922l4-1.6V3.24z"
      fill="#CED0D6"
    />
  </svg>
);

export const ToolWindowEduCourseTask: FC<ToolWindowEduCourseTaskProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? ToolWindowEduCourseTaskLight
      : ToolWindowEduCourseTaskDark;

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
