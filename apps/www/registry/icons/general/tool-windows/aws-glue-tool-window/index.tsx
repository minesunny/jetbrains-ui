import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AwsGlueToolWindowProps = IconProps;

const AwsGlueToolWindowLight: FC<SvgProps> = ({
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
      d="M8.005 6.606V1l1.746.848v4.914zM2 4.656l1.28-.38L5 4.529v2.623l-1.72-.098L2 7.152zM11 5.397v1.716l1.71-.098V5.144zM12.71 5.144v1.871l1.29.088V5.514zM8.005 1l-1.756.868v4.904l1.756-.166z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8v2l6 1.5 6-1.5V8zm7 1v1.22l4-1V9z"
      fill="#6C707E"
    />
    <path
      d="M8.005 13.099 10 12.5v1.716L8.005 15zM6 12.5v1.716L8.005 15v-1.901z"
      fill="#6C707E"
    />
  </svg>
);

const AwsGlueToolWindowDark: FC<SvgProps> = ({
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
      d="M8.005 6.606V1l1.746.848v4.914zM2 4.656l1.28-.38L5 4.529v2.623l-1.72-.098L2 7.152zM11 5.397v1.716l1.71-.098V5.144zM12.71 5.144v1.871l1.29.088V5.514zM8.005 1l-1.756.868v4.904l1.756-.166z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8v2l6 1.5 6-1.5V8zm7 1v1.22l4-1V9z"
      fill="#CED0D6"
    />
    <path
      d="M8.005 13.099 10 12.5v1.716L8.005 15zM6 12.5v1.716L8.005 15v-1.901z"
      fill="#CED0D6"
    />
  </svg>
);

export const AwsGlueToolWindow: FC<AwsGlueToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AwsGlueToolWindowLight : AwsGlueToolWindowDark;

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
