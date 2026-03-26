import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type NumberedListProps = IconProps;

const NumberedListLight: FC<SvgProps> = ({
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
      d="M7 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M7 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M7.5 13a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zM3.763 2.075A.5.5 0 0 1 4 2.5V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H3V3.309l-.276.138a.5.5 0 1 1-.448-.894l1-.5a.5.5 0 0 1 .487.022M3.5 8.5A1.5 1.5 0 0 0 2 10a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0v.06a.56.56 0 0 1-.164.397l-1.69 1.69A.5.5 0 0 0 2.5 13h2a.5.5 0 0 0 0-1h-.793l.836-.836A1.56 1.56 0 0 0 5 10.061V10a1.5 1.5 0 0 0-1.5-1.5"
      fill="#6C707E"
    />
  </svg>
);

const NumberedListDark: FC<SvgProps> = ({
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
      d="M7 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M7 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M7.5 13a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zM3.763 2.075A.5.5 0 0 1 4 2.5V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H3V3.309l-.276.138a.5.5 0 1 1-.448-.894l1-.5a.5.5 0 0 1 .487.022M3.5 8.5A1.5 1.5 0 0 0 2 10a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0v.06a.56.56 0 0 1-.164.397l-1.69 1.69A.5.5 0 0 0 2.5 13h2a.5.5 0 0 0 0-1h-.793l.836-.836A1.56 1.56 0 0 0 5 10.061V10a1.5 1.5 0 0 0-1.5-1.5"
      fill="#CED0D6"
    />
  </svg>
);

export const NumberedList: FC<NumberedListProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NumberedListLight : NumberedListDark;

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
