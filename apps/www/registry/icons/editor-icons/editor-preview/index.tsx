/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type EditorPreviewProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const EditorPreviewLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
    <rect x={1} y={3} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={1} y={6} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={1} y={9} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={1} y={12} width={5} height={1} rx={0.5} fill="#6C707E" />
    <path
      d="M10 2.5h3A1.5 1.5 0 0 1 14.5 4v8a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 8.5 12V4A1.5 1.5 0 0 1 10 2.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const EditorPreviewDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
    <rect x={1} y={3} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={1} y={6} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={1} y={9} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={1} y={12} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <path
      d="M10 2.5h3A1.5 1.5 0 0 1 14.5 4v8a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 8.5 12V4A1.5 1.5 0 0 1 10 2.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const EditorPreview: FC<EditorPreviewProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EditorPreviewLight : EditorPreviewDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default EditorPreview;
