import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TaskProps = IconProps;

const TaskLight: FC<SvgProps> = ({
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
      d="M8 14.053a.5.5 0 0 1-.391-.15c-2.02-2.1-4.321-1.282-5.606-.526-.408.24-1.003-.047-1.003-.52V3.47c0-.285.153-.545.412-.661C2.562 2.292 5.86 1.095 8 3.202c2.141-2.107 5.438-.91 6.588-.393.26.116.412.376.412.66v9.388c0 .473-.595.76-1.003.52-1.284-.756-3.586-1.575-5.606.526a.5.5 0 0 1-.391.15M7.5 4.13c-.772-.902-1.781-1.164-2.826-1.128-1.055.037-2.066.383-2.674.64v8.6c.672-.334 1.534-.638 2.493-.673a4.77 4.77 0 0 1 3.007.917zm1 8.356a4.77 4.77 0 0 1 3.007-.917c.959.035 1.82.34 2.493.672V3.643c-.608-.257-1.619-.603-2.674-.64-1.045-.036-2.054.226-2.826 1.128z"
      fill="#6C707E"
    />
  </svg>
);

const TaskDark: FC<SvgProps> = ({
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
      d="M8 14.053a.5.5 0 0 1-.391-.15c-2.02-2.1-4.321-1.282-5.606-.526-.408.24-1.003-.047-1.003-.52V3.47c0-.285.153-.545.412-.661C2.562 2.292 5.86 1.095 8 3.202c2.141-2.107 5.438-.91 6.588-.393.26.116.412.376.412.66v9.388c0 .473-.595.76-1.003.52-1.284-.756-3.586-1.575-5.606.526a.5.5 0 0 1-.391.15M7.5 4.13c-.772-.902-1.781-1.164-2.826-1.128-1.055.037-2.066.383-2.674.64v8.6c.672-.334 1.534-.638 2.493-.673a4.77 4.77 0 0 1 3.007.917zm1 8.356a4.77 4.77 0 0 1 3.007-.917c.959.035 1.82.34 2.493.672V3.643c-.608-.257-1.619-.603-2.674-.64-1.045-.036-2.054.226-2.826 1.128z"
      fill="#CED0D6"
    />
  </svg>
);

export const Task: FC<TaskProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TaskLight : TaskDark;

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
