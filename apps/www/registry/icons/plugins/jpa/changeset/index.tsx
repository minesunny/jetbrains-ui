import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChangesetProps = IconProps;

const ChangesetLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 8M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <path
      d="M12 3h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 13.5a.5.5 0 0 0-.5-.5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h.5a.5.5 0 0 0 .5-.5"
      fill="#6C707E"
    />
  </svg>
);

const ChangesetDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 8M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <path
      d="M12 3h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 13.5a.5.5 0 0 0-.5-.5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h.5a.5.5 0 0 0 .5-.5"
      fill="#CED0D6"
    />
  </svg>
);

export const Changeset: React.FC<ChangesetProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChangesetLight : ChangesetDark;

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
