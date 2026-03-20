import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SpringWebFlowFileProps = IconProps;

const SpringWebFlowFileLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.077 2.44a.6.6 0 0 0-1.157-.319L5.765 13.56a.6.6 0 0 0 1.157.319zM5.412 4.667a.6.6 0 0 1-.093.843L1.96 8.197l3.359 2.687a.6.6 0 0 1-.75.937L.039 8.197l4.53-3.624a.6.6 0 0 1 .843.094M15.001 8.965 10.682 5.51a.6.6 0 0 1 .75-.937l4.53 3.624z"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.146 12.146a.5.5 0 0 0 .708.708L12 9.707V11a.5.5 0 0 0 1 0V8.5a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0 0 1h1.293zM12.707 15l3.147-3.146a.5.5 0 0 0-.708-.708L12 14.293V13a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 0-1z"
      fill="#3574F0"
    />
  </svg>
);

const SpringWebFlowFileDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.077 2.44a.6.6 0 0 0-1.157-.319L5.765 13.56a.6.6 0 0 0 1.157.319zM5.412 4.667a.6.6 0 0 1-.093.843L1.96 8.197l3.359 2.687a.6.6 0 0 1-.75.937L.039 8.197l4.53-3.624a.6.6 0 0 1 .843.094M15.001 8.965 10.682 5.51a.6.6 0 0 1 .75-.937l4.53 3.624z"
      fill="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.146 12.146a.5.5 0 0 0 .708.708L12 9.707V11a.5.5 0 0 0 1 0V8.5a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0 0 1h1.293zM12.707 15l3.147-3.146a.5.5 0 0 0-.708-.708L12 14.293V13a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 0-1z"
      fill="#548AF7"
    />
  </svg>
);

export const SpringWebFlowFile: React.FC<SpringWebFlowFileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SpringWebFlowFileLight : SpringWebFlowFileDark;

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
