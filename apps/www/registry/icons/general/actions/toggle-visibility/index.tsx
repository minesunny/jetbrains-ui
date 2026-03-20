import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToggleVisibilityProps = IconProps;

const ToggleVisibilityLight: FC<SvgProps> = ({
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
      d="M8 13.5q.502 0 1-.067v-1.01q-.5.076-1 .077c-1.518 0-3.072-.546-4.366-1.446C2.445 10.227 1.533 9.142 1.066 8c.467-1.142 1.379-2.227 2.568-3.054C4.928 4.046 6.482 3.5 8 3.5s3.072.545 4.366 1.446c1.189.827 2.101 1.912 2.568 3.054H16c-1-3-4.5-5.5-8-5.5S1 5 0 8c1 3 4.5 5.5 8 5.5"
      fill="#6C707E"
    />
    <path
      d="M8 5a3 3 0 0 1 3 3c-.372 0-.72.102-1.02.279Q10 8.143 10 8a2 2 0 1 0-.98 1.721Q9 9.857 9 10v.83A3 3 0 1 1 8 5M12 12h2v-1h-2zM12 14h2v-1h-2z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      fill="#6C707E"
    />
  </svg>
);

const ToggleVisibilityDark: FC<SvgProps> = ({
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
      d="M8 13.5q.502 0 1-.067v-1.01q-.5.076-1 .077c-1.518 0-3.072-.546-4.366-1.446C2.445 10.227 1.533 9.142 1.066 8c.467-1.142 1.379-2.227 2.568-3.054C4.928 4.046 6.482 3.5 8 3.5s3.072.545 4.366 1.446c1.189.827 2.101 1.912 2.568 3.054H16c-1-3-4.5-5.5-8-5.5S1 5 0 8c1 3 4.5 5.5 8 5.5"
      fill="#CED0D6"
    />
    <path
      d="M8 5a3 3 0 0 1 3 3c-.372 0-.72.102-1.02.279Q10 8.143 10 8a2 2 0 1 0-.98 1.721Q9 9.857 9 10v.83A3 3 0 1 1 8 5M12 12h2v-1h-2zM12 14h2v-1h-2z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      fill="#CED0D6"
    />
  </svg>
);

export const ToggleVisibility: FC<ToggleVisibilityProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToggleVisibilityLight : ToggleVisibilityDark;

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
