import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DiagramProps = IconProps;

const DiagramLight: FC<SvgProps> = ({
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
    <path d="M1.5 13.5h13M1.5 2.5h13" stroke="#6C707E" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.146 6.354a.5.5 0 1 0 .708.707L4 5.914v5.793a.5.5 0 0 0 1 0V5.914l1.146 1.147a.5.5 0 1 0 .708-.707l-2-2L4.5 4l-.354.354zM9.146 6.354a.5.5 0 1 0 .708.707L11 5.914v.89h1v-.89l1.146 1.147a.5.5 0 0 0 .708-.707l-2-2L11.5 4l-.354.354zM11 11.216v.491a.5.5 0 1 0 1 0v-.991h-1zm0-1.965v.5h1V7.769h-1V9.25"
      fill="#3574F0"
    />
  </svg>
);

const DiagramDark: FC<SvgProps> = ({
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
    <path d="M1.5 13.5h13M1.5 2.5h13" stroke="#CED0D6" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.146 6.354a.5.5 0 1 0 .708.707L4 5.914v5.793a.5.5 0 0 0 1 0V5.914l1.146 1.147a.5.5 0 1 0 .708-.707l-2-2L4.5 4l-.354.354zM9.146 6.354a.5.5 0 1 0 .708.707L11 5.914v.89h1v-.89l1.146 1.147a.5.5 0 0 0 .708-.707l-2-2L11.5 4l-.354.354zM11 11.216v.491a.5.5 0 1 0 1 0v-.991h-1zm0-1.965v.5h1V7.769h-1V9.25"
      fill="#548AF7"
    />
  </svg>
);

export const Diagram: FC<DiagramProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DiagramLight : DiagramDark;

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
