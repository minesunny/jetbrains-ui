import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type LoaderProps = SvgProps;

const LoaderLight: FC<SvgProps> = ({
  size,
  className,
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
    <rect
      opacity={0.93}
      x={2.35}
      y={3.764}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 2.35 3.764)"
      fill="#A8ADBD"
    />
    <rect
      opacity={0.78}
      x={1}
      y={7}
      width={4}
      height={2}
      rx={1}
      fill="#A8ADBD"
    />
    <rect
      opacity={0.69}
      x={5.179}
      y={9.41}
      width={2}
      height={4}
      rx={1}
      transform="rotate(45 5.179 9.41)"
      fill="#A8ADBD"
    />
    <rect
      opacity={0.62}
      x={7}
      y={11}
      width={2}
      height={4}
      rx={1}
      fill="#A8ADBD"
    />
    <rect
      opacity={0.48}
      x={9.41}
      y={10.824}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 9.41 10.824)"
      fill="#A8ADBD"
    />
    <rect
      opacity={0.38}
      x={11}
      y={7}
      width={4}
      height={2}
      rx={1}
      fill="#A8ADBD"
    />
    <rect
      opacity={0.3}
      x={12.238}
      y={2.35}
      width={2}
      height={4}
      rx={1}
      transform="rotate(45 12.238 2.35)"
      fill="#A8ADBD"
    />
    <rect x={7} y={1} width={2} height={4} rx={1} fill="#A8ADBD" />
  </svg>
);

const LoaderDark: FC<SvgProps> = ({
  size,
  className,
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
    <rect
      opacity={0.93}
      x={2.35}
      y={3.764}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 2.35 3.764)"
      fill="#6F737A"
    />
    <rect
      opacity={0.78}
      x={1}
      y={7}
      width={4}
      height={2}
      rx={1}
      fill="#6F737A"
    />
    <rect
      opacity={0.69}
      x={5.179}
      y={9.41}
      width={2}
      height={4}
      rx={1}
      transform="rotate(45 5.179 9.41)"
      fill="#6F737A"
    />
    <rect
      opacity={0.62}
      x={7}
      y={11}
      width={2}
      height={4}
      rx={1}
      fill="#6F737A"
    />
    <rect
      opacity={0.48}
      x={9.41}
      y={10.824}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 9.41 10.824)"
      fill="#6F737A"
    />
    <rect
      opacity={0.38}
      x={11}
      y={7}
      width={4}
      height={2}
      rx={1}
      fill="#6F737A"
    />
    <rect
      opacity={0.3}
      x={12.238}
      y={2.35}
      width={2}
      height={4}
      rx={1}
      transform="rotate(45 12.238 2.35)"
      fill="#6F737A"
    />
    <rect x={7} y={1} width={2} height={4} rx={1} fill="#6F737A" />
  </svg>
);

export const Loader: FC<LoaderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LoaderLight : LoaderDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
