import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SnowflakeProps = IconProps;

const SnowflakeLight: FC<SvgProps> = ({
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
      d="M6 1a1 1 0 0 0-1 1v1.075l-.88-.616a1 1 0 1 0-1.146 1.639l2.386 1.67a1 1 0 0 0 .791.22A.997.997 0 0 0 7 4.899V2a1 1 0 0 0-1-1M10 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1.611.79l2.422-1.695a1 1 0 0 0-1.147-1.638l-.887.62V2a1 1 0 0 0-1-1M1.28 7.488a1 1 0 0 1 .939-1.766l2.558 1.361a.996.996 0 0 1 .566 1.26 1 1 0 0 1-.567.597l-2.595 1.322a1 1 0 1 1-.908-1.782l.956-.487zM15.133 6.136a1 1 0 0 1-.414 1.352l-.949.505.956.487a1 1 0 1 1-.908 1.782L11.223 8.94a1 1 0 0 1-.567-.598.997.997 0 0 1 .566-1.259l2.558-1.36a1 1 0 0 1 1.353.413M4.115 13.542l.885-.62V14a1 1 0 1 0 2 0v-3a1 1 0 0 0-1.616-.788l-2.416 1.692a1 1 0 1 0 1.147 1.638M10 10a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-1.083l.89.624a1 1 0 0 0 1.147-1.639l-2.457-1.72A1 1 0 0 0 10 10M8.353 6.354a.5.5 0 0 0-.707 0L6.353 7.646a.5.5 0 0 0 0 .708l1.293 1.292a.5.5 0 0 0 .707 0l1.293-1.292a.5.5 0 0 0 0-.708z"
      fill="#40B6E0"
    />
  </svg>
);

const SnowflakeDark: FC<SvgProps> = ({
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
      d="M6 1a1 1 0 0 0-1 1v1.075l-.88-.616a1 1 0 1 0-1.146 1.639l2.386 1.67a1 1 0 0 0 .791.22A.997.997 0 0 0 7 4.899V2a1 1 0 0 0-1-1M10 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1.611.79l2.422-1.695a1 1 0 0 0-1.147-1.638l-.887.62V2a1 1 0 0 0-1-1M1.28 7.488a1 1 0 0 1 .939-1.766l2.558 1.361a.996.996 0 0 1 .566 1.26 1 1 0 0 1-.567.597l-2.595 1.322a1 1 0 1 1-.908-1.782l.956-.487zM15.133 6.136a1 1 0 0 1-.414 1.352l-.949.505.956.487a1 1 0 1 1-.908 1.782L11.223 8.94a1 1 0 0 1-.567-.598.997.997 0 0 1 .566-1.259l2.558-1.36a1 1 0 0 1 1.353.413M4.115 13.542l.885-.62V14a1 1 0 1 0 2 0v-3a1 1 0 0 0-1.616-.788l-2.416 1.692a1 1 0 1 0 1.147 1.638M10 10a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-1.083l.89.624a1 1 0 0 0 1.147-1.639l-2.457-1.72A1 1 0 0 0 10 10M8.353 6.354a.5.5 0 0 0-.707 0L6.353 7.646a.5.5 0 0 0 0 .708l1.293 1.292a.5.5 0 0 0 .707 0l1.293-1.292a.5.5 0 0 0 0-.708z"
      fill="#40B6E0"
    />
  </svg>
);

export const Snowflake: FC<SnowflakeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SnowflakeLight : SnowflakeDark;

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
