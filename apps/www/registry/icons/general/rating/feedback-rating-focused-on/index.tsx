import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FeedbackRatingFocusedOnProps = IconProps;

const FeedbackRatingFocusedOnLight: FC<SvgProps> = ({
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
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16"
        fill="#D4E2FF"
      />
      <path
        d="m16 3 3.439 8.267 8.925.716-6.8 5.825 2.078 8.71L16 21.85l-7.64 4.667 2.077-8.71-6.8-5.824 8.925-.716z"
        fill="#FFAF0F"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
    </defs>
  </svg>
);

const FeedbackRatingFocusedOnDark: FC<SvgProps> = ({
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
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16"
          fill="#25324D"
        />
        <path
          d="m16 3 3.439 8.267 8.925.716-6.8 5.825 2.078 8.71L16 21.85l-7.64 4.667 2.077-8.71-6.8-5.824 8.925-.716z"
          fill="#F2C55C"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const FeedbackRatingFocusedOn: FC<FeedbackRatingFocusedOnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? FeedbackRatingFocusedOnLight
      : FeedbackRatingFocusedOnDark;

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
