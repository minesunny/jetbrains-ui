import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BeanFactoryProps = IconProps;

const BeanFactoryLight: React.FC<SvgProps> = ({
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
      d="M15.121 11.296a.5.5 0 0 1 .379.485V15a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-2.36l2 .5v-1.5l2 .5v-1.5z"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <path
      d="M14.96 9.71c.255-2.127-.727-4.355-2.539-6.167C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C4.517 13.504 5.731 14.272 7 14.677V12.64a1.5 1.5 0 0 1 1.864-1.455l.192.048q.009-.035.021-.068l.002-.006.004-.01a1.5 1.5 0 0 1 1.78-.964l.193.048.021-.068.002-.006.004-.01a1.5 1.5 0 0 1 1.78-.964z"
      fill="#FFF4EB"
    />
    <path
      d="M14.96 9.71c.255-2.127-.727-4.355-2.539-6.167C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C4.517 13.504 5.731 14.272 7 14.677v-1.06c-.99-.372-1.956-1.004-2.802-1.85-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l6.52 6.52a1.49 1.49 0 0 1 1.204-.213L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228q.057.494.013.985z"
      fill="#E66D17"
    />
  </svg>
);

const BeanFactoryDark: React.FC<SvgProps> = ({
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
      d="M15.121 11.296a.5.5 0 0 1 .379.485V15a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-2.36l2 .5v-1.5l2 .5v-1.5z"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <path
      d="M14.96 9.71c.255-2.127-.727-4.355-2.539-6.167C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C4.517 13.504 5.731 14.272 7 14.677V12.64a1.5 1.5 0 0 1 1.864-1.455l.192.048q.009-.035.021-.068l.002-.006.004-.01a1.5 1.5 0 0 1 1.78-.964l.193.048.021-.068.002-.006.004-.01a1.5 1.5 0 0 1 1.78-.964z"
      fill="#45322B"
    />
    <path
      d="M14.96 9.71c.255-2.127-.727-4.355-2.539-6.167C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C4.517 13.504 5.731 14.272 7 14.677v-1.06c-.99-.372-1.956-1.004-2.802-1.85-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l6.52 6.52a1.49 1.49 0 0 1 1.204-.213L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228q.057.494.013.985z"
      fill="#C77D55"
    />
  </svg>
);

export const BeanFactory: React.FC<BeanFactoryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BeanFactoryLight : BeanFactoryDark;

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
