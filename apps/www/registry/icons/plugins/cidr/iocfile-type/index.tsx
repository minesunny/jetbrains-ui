import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type IOCFileTypeProps = IconProps;

const IOCFileTypeLight: React.FC<SvgProps> = ({
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
      d="M2.88 12.5V3.4h1.086v9.1zM6.938 11.662q.292 0 .474-.306.182-.312.267-.956.09-.65.09-1.676V7.177q0-1.028-.09-1.671-.085-.65-.267-.955-.182-.312-.474-.312-.286 0-.475.312-.188.305-.28.955-.084.644-.084 1.67v1.548q0 1.026.085 1.676.09.644.28.956.188.306.474.306m0 .994q-.69 0-1.125-.41-.429-.416-.637-1.28t-.208-2.242V7.177q.014-1.38.221-2.243.215-.864.644-1.274.429-.416 1.105-.416t1.098.416q.43.41.637 1.274.215.864.228 2.243v1.547q0 1.377-.208 2.242-.208.864-.637 1.28-.43.41-1.118.41M11.559 12.656q-.69 0-1.125-.41-.429-.416-.637-1.28T9.59 8.724V7.177q0-1.38.208-2.243.208-.864.637-1.274.436-.416 1.125-.416.63 0 1.04.319.415.312.63.975t.26 1.716h-1.092a6.7 6.7 0 0 0-.123-1.151q-.098-.442-.273-.65a.55.55 0 0 0-.442-.214q-.285 0-.475.312-.187.305-.28.955-.084.644-.084 1.67v1.548q0 1.026.085 1.676.09.644.28.956.187.306.474.306.267 0 .442-.209.176-.214.273-.656a6.7 6.7 0 0 0 .123-1.15h1.092q-.045 1.052-.26 1.716-.214.663-.63.981-.41.312-1.04.312"
      fill="#3574F0"
    />
  </svg>
);

const IOCFileTypeDark: React.FC<SvgProps> = ({
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
      d="M2.88 12.5V3.4h1.086v9.1zM6.938 11.662q.292 0 .474-.306.182-.312.267-.956.09-.65.09-1.676V7.177q0-1.028-.09-1.671-.085-.65-.267-.955-.182-.312-.474-.312-.286 0-.475.312-.188.305-.28.955-.084.644-.084 1.67v1.548q0 1.026.085 1.676.09.644.28.956.188.306.474.306m0 .994q-.69 0-1.125-.41-.429-.416-.637-1.28t-.208-2.242V7.177q.014-1.38.221-2.243.215-.864.644-1.274.429-.416 1.105-.416t1.098.416q.43.41.637 1.274.215.864.228 2.243v1.547q0 1.377-.208 2.242-.208.864-.637 1.28-.43.41-1.118.41M11.559 12.656q-.69 0-1.125-.41-.429-.416-.637-1.28T9.59 8.724V7.177q0-1.38.208-2.243.208-.864.637-1.274.436-.416 1.125-.416.63 0 1.04.319.415.312.63.975t.26 1.716h-1.092a6.7 6.7 0 0 0-.123-1.151q-.098-.442-.273-.65a.55.55 0 0 0-.442-.214q-.285 0-.475.312-.187.305-.28.955-.084.644-.084 1.67v1.548q0 1.026.085 1.676.09.644.28.956.187.306.474.306.267 0 .442-.209.176-.214.273-.656a6.7 6.7 0 0 0 .123-1.15h1.092q-.045 1.052-.26 1.716-.214.663-.63.981-.41.312-1.04.312"
      fill="#548AF7"
    />
  </svg>
);

export const IOCFileType: React.FC<IOCFileTypeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IOCFileTypeLight : IOCFileTypeDark;

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
