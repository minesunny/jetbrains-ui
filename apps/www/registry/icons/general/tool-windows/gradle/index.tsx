import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GradleProps = IconProps;

const GradleLight: FC<SvgProps> = ({
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
      d="M14.894 3.545c-.362-.756-1.556-1.65-2.893-.481m2.893.48c.463.882-.33 2.526-1.93 2.526-2.087 0-4.276-3.457-9.04-1.108-.421.207-.608.7-.464 1.148l.116.36m11.318-2.925s1.336 2.815-2.33 5.557c-1.033.773-1.411 2.291-1.45 3.644a.1.1 0 0 1-.1.098h-1.14a.22.22 0 0 1-.208-.169 1.48 1.48 0 0 0-1.436-1.091c-.678 0-1.26.456-1.434 1.094a.22.22 0 0 1-.208.168H5.512a.22.22 0 0 1-.208-.168 1.487 1.487 0 0 0-2.868 0 .22.22 0 0 1-.208.169H1.036a.1.1 0 0 1-.1-.09c-.293-2.844.53-4.951 2.64-6.287m0 0 .58 1.91c.217.636 1.085.741 1.614.444a9.3 9.3 0 0 0 1.822-1.279"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.26 7.32c-.096-.06-.153-.172-.116-.28a.798.798 0 1 1 1.306.84c-.082.078-.207.072-.302.011z"
      fill="#6C707E"
    />
  </svg>
);

const GradleDark: FC<SvgProps> = ({
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
      d="M14.894 3.545c-.362-.756-1.556-1.65-2.893-.481m2.893.48c.463.882-.33 2.526-1.93 2.526-2.087 0-4.276-3.457-9.04-1.108-.421.207-.608.7-.464 1.148l.116.36m11.318-2.925s1.336 2.815-2.33 5.557c-1.033.773-1.411 2.291-1.45 3.644a.1.1 0 0 1-.1.098h-1.14a.22.22 0 0 1-.208-.169 1.48 1.48 0 0 0-1.436-1.091c-.678 0-1.26.456-1.434 1.094a.22.22 0 0 1-.208.168H5.512a.22.22 0 0 1-.208-.168 1.487 1.487 0 0 0-2.868 0 .22.22 0 0 1-.208.169H1.036a.1.1 0 0 1-.1-.09c-.293-2.844.53-4.951 2.64-6.287m0 0 .58 1.91c.217.636 1.085.741 1.614.444a9.3 9.3 0 0 0 1.822-1.279"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.26 7.32c-.096-.06-.153-.172-.116-.28a.798.798 0 1 1 1.306.84c-.082.078-.207.072-.302.011z"
      fill="#CED0D6"
    />
  </svg>
);

export const Gradle: FC<GradleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GradleLight : GradleDark;

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
