import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CodeAssistantOperatorProps = IconProps;

const CodeAssistantOperatorLight: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.015-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.95-2.055-1.14 0-1.935.911-1.935 2.038V8c0 1.127.811 2.055 1.95 2.055"
      fill="#DB3B4B"
    />
  </svg>
);

const CodeAssistantOperatorDark: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 11C6.23 11 5 9.65 5 8.017V8c0-1.633 1.246-3 3.008-3S11 6.35 11 7.983V8c0 1.633-1.246 3-3.008 3m.015-.945c1.14 0 1.935-.911 1.935-2.038V8c0-1.127-.812-2.055-1.95-2.055-1.14 0-1.935.911-1.935 2.038V8c0 1.127.811 2.055 1.95 2.055"
      fill="#DB5C5C"
    />
    <path
      d="M7.991 10.15q.544 0 .982-.272.442-.272.688-.757a2.35 2.35 0 0 0 .251-1.096q0-.612-.246-1.097a1.87 1.87 0 0 0-.685-.756 1.84 1.84 0 0 0-.99-.272 1.84 1.84 0 0 0-1.679 1.028 2.4 2.4 0 0 0-.246 1.097q0 .612.246 1.096.252.485.689.757.438.272.99.272m0 .952a2.97 2.97 0 0 1-1.526-.4 2.93 2.93 0 0 1-1.08-1.104 3.2 3.2 0 0 1-.39-1.573q0-.867.39-1.568a2.9 2.9 0 0 1 1.08-1.105q.685-.404 1.526-.404.837 0 1.522.404a2.86 2.86 0 0 1 1.075 1.105q.395.7.395 1.568 0 .867-.395 1.572-.391.701-1.075 1.106-.685.399-1.522.399"
      fill="#DB5C5C"
    />
  </svg>
);

export const CodeAssistantOperator: React.FC<CodeAssistantOperatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CodeAssistantOperatorLight : CodeAssistantOperatorDark;

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
