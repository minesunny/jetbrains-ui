import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type NodejsTestRunnerProps = IconProps;

const NodejsTestRunnerLight: FC<SvgProps> = ({
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
      d="M8.003 15.893c-.212 0-.422-.056-.607-.163l-1.93-1.143c-.289-.16-.148-.218-.053-.25.384-.136.462-.166.873-.399.043-.024.1-.016.144.01l1.138.675 1.108 1.067-.064.037a1.2 1.2 0 0 1-.61.162zM15 10.96v-6.3a1.22 1.22 0 0 0-.607-1.054L8.612.266a1.27 1.27 0 0 0-1.216 0l-5.79 3.339C1.233 3.819 1 4.225 1 4.659v6.673c0 .433.232.838.607 1.056l1.517.874c.735.362.999.362 1.333.362 1.087 0 1.712-.659 1.712-1.805v-6.59a.166.166 0 0 0-.166-.166h-.732a.165.165 0 0 0-.168.166v6.587c0 .51-.526 1.016-1.386.586l-1.584-.915a.18.18 0 0 1-.09-.155V4.66c0-.064.036-.126.092-.158l5.78-3.335a.18.18 0 0 1 .178 0L13.874 4.5c.055.033.09.093.09.16v5.304z"
      fill="#369650"
    />
    <path
      d="M12.646 9.022c-.131-1.008-.976-1.305-2.603-1.521-1.795-.238-1.978-.36-1.978-.782 0-.347.155-.81 1.485-.81 1.189 0 1.626.256 1.807 1.056.016.075.084.13.162.13h.752a.168.168 0 0 0 .168-.182c-.116-1.381-1.034-2.024-2.886-2.024-1.649 0-2.633.695-2.633 1.862 0 1.267.979 1.615 2.562 1.772 1.23.12 1.723.279 1.918.477h.813l.205.001q.114 0 .228.02M7.963 10.997C6.98 10.59 6.728 9.83 6.728 9.158c0-.092.075-.166.167-.166h.747c.083 0 .152.06.165.141.083.558.285.913.99 1.063z"
      fill="#369650"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#55A76A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#E55765"
    />
  </svg>
);

const NodejsTestRunnerDark: FC<SvgProps> = ({
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
      d="M8.003 15.893c-.212 0-.422-.056-.607-.163l-1.93-1.143c-.289-.16-.148-.218-.053-.25.384-.136.462-.166.873-.399.043-.024.1-.016.144.01l1.138.675 1.108 1.067-.064.037a1.2 1.2 0 0 1-.61.162zM15 10.96v-6.3a1.22 1.22 0 0 0-.607-1.054L8.612.266a1.27 1.27 0 0 0-1.216 0l-5.79 3.339C1.233 3.819 1 4.225 1 4.659v6.673c0 .433.232.838.607 1.056l1.517.874c.735.362.999.362 1.333.362 1.087 0 1.712-.659 1.712-1.805v-6.59a.166.166 0 0 0-.166-.166h-.732a.165.165 0 0 0-.168.166v6.587c0 .51-.526 1.016-1.386.586l-1.584-.915a.18.18 0 0 1-.09-.155V4.66c0-.064.036-.126.092-.158l5.78-3.335a.18.18 0 0 1 .178 0L13.874 4.5c.055.033.09.093.09.16v5.304z"
      fill="#57965C"
    />
    <path
      d="M12.646 9.022c-.131-1.008-.976-1.305-2.603-1.521-1.795-.238-1.978-.36-1.978-.782 0-.347.155-.81 1.485-.81 1.189 0 1.626.256 1.807 1.056.016.075.084.13.162.13h.752a.168.168 0 0 0 .168-.182c-.116-1.381-1.034-2.024-2.886-2.024-1.649 0-2.633.695-2.633 1.862 0 1.267.979 1.615 2.562 1.772 1.23.12 1.723.279 1.918.477h.813l.205.001q.114 0 .228.02M7.963 10.997C6.98 10.59 6.728 9.83 6.728 9.158c0-.092.075-.166.167-.166h.747c.083 0 .152.06.165.141.083.558.285.913.99 1.063z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#DB5C5C"
    />
  </svg>
);

export const NodejsTestRunner: FC<NodejsTestRunnerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? NodejsTestRunnerLight : NodejsTestRunnerDark;

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
