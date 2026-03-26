import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CreateConstraintProps = IconProps;

const CreateConstraintLight: React.FC<SvgProps> = ({
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
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      fill="#3574F0"
    />
    <path d="M15 8a7 7 0 1 0-7 7v-1a6 6 0 1 1 6-6z" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11h-1V8H6v3h3.5a1.5 1.5 0 0 0-1.415 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1V6a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1zM7 6a1 1 0 0 1 2 0v1H7z"
      fill="#6C707E"
    />
  </svg>
);

const CreateConstraintDark: React.FC<SvgProps> = ({
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
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      fill="#548AF7"
    />
    <path d="M15 8a7 7 0 1 0-7 7v-1a6 6 0 1 1 6-6z" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11h-1V8H6v3h3.5a1.5 1.5 0 0 0-1.415 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1V6a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1zM7 6a1 1 0 0 1 2 0v1H7z"
      fill="#CED0D6"
    />
  </svg>
);

export const CreateConstraint: React.FC<CreateConstraintProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CreateConstraintLight : CreateConstraintDark;

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
