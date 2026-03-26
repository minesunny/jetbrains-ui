import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LightningProps = IconProps;

const LightningLight: FC<SvgProps> = ({
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
      d="M8.244 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.11 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.889 7H9a1 1 0 0 1-.755-.345M9.746.775c.072-.5-.561-.779-.882-.387L1.668 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.944 6H9z"
      fill="#E66D17"
    />
  </svg>
);

const LightningDark: FC<SvgProps> = ({
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
      d="M8.244 6.655a1 1 0 0 1-.234-.796l.492-3.45L3.11 9H7a1 1 0 0 1 .99 1.141l-.493 3.45L12.889 7H9a1 1 0 0 1-.755-.345M9.746.775c.072-.5-.561-.779-.882-.387L1.668 9.183a.5.5 0 0 0 .387.817H7l-.747 5.225c-.071.5.562.779.882.387l7.196-8.795A.5.5 0 0 0 13.944 6H9z"
      fill="#C77D55"
    />
  </svg>
);

export const Lightning: FC<LightningProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LightningLight : LightningDark;

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
