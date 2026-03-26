import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JupyterNotebookProps = IconProps;

const JupyterNotebookLight: FC<SvgProps> = ({
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
      d="M13.657 5.752c-1.387-1.034-3.58-1.95-5.652-1.95-2.08 0-4.266.913-5.65 1.947-.187.14-.443-.052-.314-.248.613-.933 1.524-1.892 2.305-2.409A6.63 6.63 0 0 1 8.005 2c1.308 0 2.585.381 3.659 1.092.782.518 1.694 1.478 2.307 2.412.129.195-.127.388-.314.248M2.355 10.248c1.387 1.034 3.58 1.95 5.652 1.95 2.079 0 4.265-.913 5.65-1.947.187-.14.443.052.314.248-.613.933-1.524 1.892-2.306 2.409A6.63 6.63 0 0 1 8.007 14a6.63 6.63 0 0 1-3.659-1.092c-.782-.518-1.694-1.478-2.307-2.412-.129-.196.127-.388.314-.248"
      fill="#E66D17"
    />
  </svg>
);

const JupyterNotebookDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fill="#E08855">
      <path d="M13.657 5.752c-1.387-1.034-3.58-1.95-5.652-1.95-2.08 0-4.266.913-5.65 1.947-.187.14-.443-.052-.314-.248.613-.933 1.524-1.892 2.305-2.409A6.63 6.63 0 0 1 8.005 2c1.308 0 2.585.381 3.659 1.092.782.518 1.694 1.478 2.307 2.412.129.195-.127.388-.314.248M2.355 10.248c1.387 1.034 3.58 1.95 5.652 1.95 2.079 0 4.265-.913 5.65-1.947.187-.14.443.052.314.248-.613.933-1.524 1.892-2.306 2.409A6.63 6.63 0 0 1 8.007 14a6.63 6.63 0 0 1-3.659-1.092c-.782-.518-1.694-1.478-2.307-2.412-.129-.196.127-.388.314-.248" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const JupyterNotebook: FC<JupyterNotebookProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JupyterNotebookLight : JupyterNotebookDark;

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
