import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type QueryMethodProps = IconProps;

const QueryMethodLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF7F7" stroke="#DB3B4B" />
    <path
      d="M9 5.146h1v6.864h-.995L9 6.166zM8.306 10.2q-.505.29-1.168.29-.713 0-1.275-.341a2.4 2.4 0 0 1-.877-.97q-.316-.621-.316-1.422t.316-1.423.872-.964q.56-.347 1.28-.347.664 0 1.168.296.506.291.786.821.28.526.29 1.224h-.346v.786h.346a2.7 2.7 0 0 1-.29 1.229q-.281.526-.786.82m-1.81-.836q.372.23.851.229.484 0 .862-.23.377-.234.587-.647.21-.419.209-.959 0-.54-.21-.954a1.55 1.55 0 0 0-.586-.647 1.6 1.6 0 0 0-.862-.235 1.56 1.56 0 0 0-1.433.882 2.1 2.1 0 0 0-.204.954q0 .54.204.959.21.413.582.648"
      fill="#DB3B4B"
    />
  </svg>
);

const QueryMethodDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#402929" stroke="#DB5C5C" />
    <path
      d="M9 5.146h1v6.864h-.995L9 6.166zM8.306 10.2q-.505.29-1.168.29-.713 0-1.275-.341a2.4 2.4 0 0 1-.877-.97q-.316-.621-.316-1.422t.316-1.423.872-.964q.56-.347 1.28-.347.664 0 1.168.296.506.291.786.821.28.526.29 1.224h-.346v.786h.346a2.7 2.7 0 0 1-.29 1.229q-.281.526-.786.82m-1.81-.836q.372.23.851.229.484 0 .862-.23.377-.234.587-.647.21-.419.209-.959 0-.54-.21-.954a1.55 1.55 0 0 0-.586-.647 1.6 1.6 0 0 0-.862-.235 1.56 1.56 0 0 0-1.433.882 2.1 2.1 0 0 0-.204.954q0 .54.204.959.21.413.582.648"
      fill="#DB5C5C"
    />
  </svg>
);

export const QueryMethod: React.FC<QueryMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? QueryMethodLight : QueryMethodDark;

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
