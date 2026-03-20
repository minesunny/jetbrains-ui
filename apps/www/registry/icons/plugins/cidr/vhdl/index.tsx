import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VhdlProps = IconProps;

const VhdlLight: React.FC<SvgProps> = ({
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
      d="M2.431 12.89.611 4.01h1.073l1.287 6.995.104.604.104-.52 1.267-7.098 1.138-.006-1.73 8.905zM6.48 13V3.9h1.085v3.926h1.534V3.9h1.092V13H9.099V8.847H7.565V13zM11.507 13V3.9H13.3q.702 0 1.144.397t.65 1.228q.207.825.208 2.152v1.547q0 1.326-.208 2.158-.209.825-.65 1.222Q14.003 13 13.3 13zm1.794-1.014q.306 0 .494-.292.195-.293.286-.897t.09-1.573V7.677q0-.969-.09-1.573-.09-.605-.286-.897-.188-.293-.494-.293h-.709v7.072z"
      fill="#E66D17"
    />
  </svg>
);

const VhdlDark: React.FC<SvgProps> = ({
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
      d="M2.431 12.89.611 4.01h1.073l1.287 6.995.104.604.104-.52 1.267-7.098 1.138-.006-1.73 8.905zM6.48 13V3.9h1.085v3.926h1.534V3.9h1.092V13H9.099V8.847H7.565V13zM11.507 13V3.9H13.3q.702 0 1.144.397t.65 1.228q.207.825.208 2.152v1.547q0 1.326-.208 2.158-.209.825-.65 1.222Q14.003 13 13.3 13zm1.794-1.014q.306 0 .494-.292.195-.293.286-.897t.09-1.573V7.677q0-.969-.09-1.573-.09-.605-.286-.897-.188-.293-.494-.293h-.709v7.072z"
      fill="#E66D17"
    />
  </svg>
);

export const Vhdl: React.FC<VhdlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VhdlLight : VhdlDark;

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
