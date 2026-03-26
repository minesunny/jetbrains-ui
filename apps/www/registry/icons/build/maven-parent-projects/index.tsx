import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MavenParentProjectsProps = IconProps;

const MavenParentProjectsLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
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
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      fill="#DB3B4B"
    />
    <path
      d="M10 6.093V7.5a1.5 1.5 0 0 0 .823 1.339l-.854 3.678c-.072.324-.407.531-.749.463s-.56-.386-.489-.71l.882-3.8c.43-1.856-2.006-1.627-2.995-.249l-1.005 4.3c-.072.323-.407.53-.75.462l-.04-.01a.6.6 0 0 1-.46-.702l.884-3.804c.197-.838-.207-1.25-.794-1.322-.7-.075-1.657.335-2.19 1.08L2.26 8.22v.001l-1.01 4.304c-.072.324-.408.53-.75.461-.342-.068-.56-.386-.487-.71L1.33 6.598c.073-.324.408-.53.75-.462.389.079.548.433.474.773.714-.56 1.548-.956 2.5-.904.93.018 1.384.515 1.533 1.165C7.444 6.44 8.168 6 9.356 6q.369.002.644.093"
      fill="#3574F0"
    />
  </svg>
);

const MavenParentProjectsDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
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
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      fill="#DB5C5C"
    />
    <path
      d="M10 6.093V7.5a1.5 1.5 0 0 0 .823 1.339l-.854 3.678c-.072.324-.407.531-.749.463s-.56-.386-.489-.71l.882-3.8c.43-1.856-2.006-1.627-2.995-.249l-1.005 4.3c-.072.323-.407.53-.75.462l-.04-.01a.6.6 0 0 1-.46-.702l.884-3.804c.197-.838-.207-1.25-.794-1.322-.7-.075-1.657.335-2.19 1.08L2.26 8.22v.001l-1.01 4.304c-.072.324-.408.53-.75.461-.342-.068-.56-.386-.487-.71L1.33 6.598c.073-.324.408-.53.75-.462.389.079.548.433.474.773.714-.56 1.548-.956 2.5-.904.93.018 1.384.515 1.533 1.165C7.444 6.44 8.168 6 9.356 6q.369.002.644.093"
      fill="#548AF7"
    />
  </svg>
);

export const MavenParentProjects: FC<MavenParentProjectsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MavenParentProjectsLight : MavenParentProjectsDark;

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
