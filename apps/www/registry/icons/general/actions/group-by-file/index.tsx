import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GroupByFileProps = IconProps;

const GroupByFileLight: FC<SvgProps> = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="M5 12.5h6a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7.207a.5.5 0 0 0-.353.146L4.646 5.854a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.207 3a1 1 0 0 0-.707.293L4.293 5.5A1 1 0 0 0 4 6.207V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8 4h3v8H5V7h2a1 1 0 0 0 1-1zm-1 .207L5.207 6H7z"
      fill="#6C707E"
    />
  </svg>
);

const GroupByFileDark: FC<SvgProps> = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="M5 12.5h6a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7.207a.5.5 0 0 0-.353.146L4.646 5.854a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.207 3a1 1 0 0 0-.707.293L4.293 5.5A1 1 0 0 0 4 6.207V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8 4h3v8H5V7h2a1 1 0 0 0 1-1zm-1 .207L5.207 6H7z"
      fill="#CED0D6"
    />
  </svg>
);

export const GroupByFile: FC<GroupByFileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GroupByFileLight : GroupByFileDark;

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
