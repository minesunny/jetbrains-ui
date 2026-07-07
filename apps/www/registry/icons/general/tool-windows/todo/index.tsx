/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type TodoProps = SvgProps;

const TodoLight: FC<SvgProps> = ({
  size,
  className,
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
    <path d="M5.5 11.5h8" stroke="#6C707E" strokeLinecap="round" />
    <ellipse cx={2.7} cy={11.5} rx={0.7} ry={0.7} fill="#6C707E" />
    <path d="M5.5 8h8" stroke="#6C707E" strokeLinecap="round" />
    <ellipse cx={2.7} cy={8} rx={0.7} ry={0.7} fill="#6C707E" />
    <path d="M5.5 4.5h8" stroke="#6C707E" strokeLinecap="round" />
    <ellipse cx={2.7} cy={4.5} rx={0.7} ry={0.7} fill="#6C707E" />
  </svg>
);

const TodoDark: FC<SvgProps> = ({
  size,
  className,
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
    <path d="M5.5 11.5h8" stroke="#CED0D6" strokeLinecap="round" />
    <ellipse cx={2.7} cy={11.5} rx={0.7} ry={0.7} fill="#CED0D6" />
    <path d="M5.5 8h8" stroke="#CED0D6" strokeLinecap="round" />
    <ellipse cx={2.7} cy={8} rx={0.7} ry={0.7} fill="#CED0D6" />
    <path d="M5.5 4.5h8" stroke="#CED0D6" strokeLinecap="round" />
    <ellipse cx={2.7} cy={4.5} rx={0.7} ry={0.7} fill="#CED0D6" />
  </svg>
);

export const Todo: FC<TodoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TodoLight : TodoDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Todo;
