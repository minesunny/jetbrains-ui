import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FeedbackRatingFocusedProps = IconProps;

const FeedbackRatingFocusedLight: FC<SvgProps> = ({
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
      <circle cx="16" cy="16" r="16" fill="#D4E2FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.439 11.267 16 3l-3.438 8.267-8.925.716 6.8 5.825-2.078 8.71L16 21.85l7.642 4.667-2.078-8.71 6.8-5.824zm6.449 1.52-7.138-.572L16 5.604l-2.75 6.611-7.137.572 5.438 4.659L9.89 24.41 16 20.678l6.111 3.733-1.661-6.965z"
        fill="#A8ADBD"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H32V32H0z" />
      </clipPath>
    </defs>
  </svg>
);

const FeedbackRatingFocusedDark: FC<SvgProps> = ({
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
        <circle cx="16" cy="16" r="16" fill="#25324D" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.439 11.267 16 3l-3.438 8.267-8.925.716 6.8 5.825-2.078 8.71L16 21.85l7.642 4.667-2.078-8.71 6.8-5.824zm6.449 1.52-7.138-.572L16 5.604l-2.75 6.611-7.137.572 5.438 4.659L9.89 24.41 16 20.678l6.111 3.733-1.661-6.965z"
          fill="#5A5D63"
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

export const FeedbackRatingFocused: FC<FeedbackRatingFocusedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FeedbackRatingFocusedLight : FeedbackRatingFocusedDark;

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
