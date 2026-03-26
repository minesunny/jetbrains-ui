import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RailsServerRunConfigurationProps = IconProps;

const RailsServerRunConfigurationLight: React.FC<SvgProps> = ({
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
    <path
      d="m9.755.89.622 1.392a5.1 5.1 0 0 0-1.674.325L8 1.223zM2.025 7.074l1.498.89a18 18 0 0 0-1.013 2.21L1 9.342zM13.642 3.142l.001.002.002.002-.195-1.84L12 .89l.219 1.431c.449.161.901.405 1.422.82zM5.472 2.764l1.15 1.253c-.441.394-.934.893-1.44 1.504l-1.34-1.333zM13.67 6.811c-.079-.013-.158-.016-.237-.02l-.051-.003.164 1.077h1.094l-.087-.817-.006-.001c-.092-.028-.683-.205-.876-.236M11.357 7.679c.162-.165.329-.328.522-.476q.292-.223.627-.328l.442.99-.984 1.01zM9.68 14.123l1.676.65-.205-2.275-1.352-.804a28 28 0 0 0-.12 2.429M11.007 11.313l-.994-.988c.158-.704.381-1.317.705-1.843l.812.886z"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.025 5.14a10 10 0 0 0-1.169-1.125c-.81-.656-1.415-.876-2.315-.99-.94-.116-2.223.152-3.113.643-1.386.764-4.08 3.007-5.611 7.573-.412 1.23-.53 2.57-.792 3.758 0 0 7.069-.005 7.069-.007 0-4.319.39-6.679 2.484-8.317.684-.536 1.43-.63 2.194-.508.226.037.975.265.975.265z"
      fill="#FFF4EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.78 6.168c.237.041.967.264.967.264l.278-1.292a10 10 0 0 0-1.169-1.125c-.81-.656-1.415-.876-2.315-.99-.94-.116-2.223.152-3.113.643-1.386.764-4.08 3.007-5.611 7.573-.267.798-.41 1.642-.55 2.46l-.05.297c-.06.342-.12.677-.192 1q3.535 0 7.069-.005c0-4.32.39-6.68 2.484-8.318.684-.536 1.43-.63 2.194-.508zm-.552-1.375q.204.165.403.348c-.876-.085-1.809.072-2.67.747-2.313 1.81-2.797 4.365-2.86 8.106H7.99l-4.758.004.026-.155.092-.532c.112-.624.234-1.208.416-1.752 1.449-4.319 3.97-6.367 5.146-7.016.724-.399 1.795-.613 2.506-.525.73.092 1.155.244 1.81.774z"
      fill="#E66D17"
    />
  </svg>
);

const RailsServerRunConfigurationDark: React.FC<SvgProps> = ({
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
    <path
      d="m9.755.89.622 1.392a5.1 5.1 0 0 0-1.674.325L8 1.223zM2.025 7.074l1.498.89a18 18 0 0 0-1.013 2.21L1 9.342zM13.642 3.142l.001.002.002.002-.195-1.84L12 .89l.219 1.431c.449.161.901.405 1.422.82zM5.472 2.764l1.15 1.253c-.441.394-.934.893-1.44 1.504l-1.34-1.333zM13.67 6.811c-.079-.013-.158-.016-.237-.02l-.051-.003.164 1.077h1.094l-.087-.817-.006-.001c-.092-.028-.683-.205-.876-.236M11.357 7.679c.162-.165.329-.328.522-.476q.292-.223.627-.328l.442.99-.984 1.01zM9.68 14.123l1.676.65-.205-2.275-1.352-.804a28 28 0 0 0-.12 2.429M11.007 11.313l-.994-.988c.158-.704.381-1.317.705-1.843l.812.886z"
      fill="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.025 5.14a10 10 0 0 0-1.169-1.125c-.81-.656-1.415-.876-2.315-.99-.94-.116-2.223.152-3.113.643-1.386.764-4.08 3.007-5.611 7.573-.412 1.23-.53 2.57-.792 3.758 0 0 7.069-.005 7.069-.007 0-4.319.39-6.679 2.484-8.317.684-.536 1.43-.63 2.194-.508.226.037.975.265.975.265z"
      fill="#45322B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.78 6.168c.237.041.967.264.967.264l.278-1.292a10 10 0 0 0-1.169-1.125c-.81-.656-1.415-.876-2.315-.99-.94-.116-2.223.152-3.113.643-1.386.764-4.08 3.007-5.611 7.573-.267.798-.41 1.642-.55 2.46l-.05.297c-.06.342-.12.677-.192 1q3.535 0 7.069-.005c0-4.32.39-6.68 2.484-8.318.684-.536 1.43-.63 2.194-.508zm-.552-1.375q.204.165.403.348c-.876-.085-1.809.072-2.67.747-2.313 1.81-2.797 4.365-2.86 8.106H7.99l-4.758.004.026-.155.092-.532c.112-.624.234-1.208.416-1.752 1.449-4.319 3.97-6.367 5.146-7.016.724-.399 1.795-.613 2.506-.525.73.092 1.155.244 1.81.774z"
      fill="#C77D55"
    />
  </svg>
);

export const RailsServerRunConfiguration: React.FC<
  RailsServerRunConfigurationProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? RailsServerRunConfigurationLight
      : RailsServerRunConfigurationDark;

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
