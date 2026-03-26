import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SequenceProps = IconProps;

const SequenceLight: React.FC<SvgProps> = ({
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
    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" fill="#FAF5FF" />
    <path
      d="M7.976 11.5q-.757 0-1.372-.242a2.4 2.4 0 0 1-.973-.672 1.64 1.64 0 0 1-.385-.986H6.31q.026.3.249.542.222.235.587.372.366.137.817.137.456 0 .803-.15.352-.15.542-.418.196-.267.196-.607a.92.92 0 0 0-.21-.614.9.9 0 0 0-.568-.32l-1.612-.294q-.771-.143-1.202-.62-.43-.484-.43-1.221 0-.53.3-.96.307-.438.855-.692.549-.255 1.254-.255.698 0 1.26.229.562.228.895.633t.359.901H9.34a.76.76 0 0 0-.215-.47 1.26 1.26 0 0 0-.51-.327 2.1 2.1 0 0 0-.718-.117q-.405 0-.718.137a1.17 1.17 0 0 0-.49.379.9.9 0 0 0-.17.535q0 .34.19.562.189.222.555.287l1.652.294q.51.09.875.359.372.268.561.666.196.398.196.869 0 .587-.34 1.057-.332.471-.92.738a3.1 3.1 0 0 1-1.312.268"
      fill="#834DF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      fill="#834DF0"
    />
  </svg>
);

const SequenceDark: React.FC<SvgProps> = ({
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
    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" fill="#2F2936" />
    <path
      d="M7.976 11.5q-.757 0-1.372-.242a2.4 2.4 0 0 1-.973-.672 1.64 1.64 0 0 1-.385-.986H6.31q.026.3.249.542.222.235.587.372.366.137.817.137.456 0 .803-.15.352-.15.542-.418.196-.267.196-.607a.92.92 0 0 0-.21-.614.9.9 0 0 0-.568-.32l-1.612-.294q-.771-.143-1.202-.62-.43-.484-.43-1.221 0-.53.3-.96.307-.438.855-.692.549-.255 1.254-.255.698 0 1.26.229.562.228.895.633t.359.901H9.34a.76.76 0 0 0-.215-.47 1.26 1.26 0 0 0-.51-.327 2.1 2.1 0 0 0-.718-.117q-.405 0-.718.137a1.17 1.17 0 0 0-.49.379.9.9 0 0 0-.17.535q0 .34.19.562.189.222.555.287l1.652.294q.51.09.875.359.372.268.561.666.196.398.196.869 0 .587-.34 1.057-.332.471-.92.738a3.1 3.1 0 0 1-1.312.268"
      fill="#B589EC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      fill="#B589EC"
    />
  </svg>
);

export const Sequence: React.FC<SequenceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SequenceLight : SequenceDark;

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
