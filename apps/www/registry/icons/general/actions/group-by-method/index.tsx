/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type GroupByMethodProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const GroupByMethodLight: FC<
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
    <path
      d="M10.074 5.118q.576 0 1.013.28.441.276.677.782.236.5.236 1.15v3.552h-1.024V7.428q0-.654-.294-1.017-.288-.363-.834-.363-.415 0-.72.209-.299.203-.461.583-.158.373-.158.88v3.162H7.496V7.428q0-.65-.31-1.012-.304-.369-.85-.368-.615 0-.96.45-.348.451-.347 1.222v3.162H4V5.25h.997v.864q.248-.48.651-.737.41-.26.935-.259A1.81 1.81 0 0 1 8.294 6.23a2.1 2.1 0 0 1 .73-.82 1.93 1.93 0 0 1 1.05-.29"
      fill="#DB3B4B"
    />
    <path
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const GroupByMethodDark: FC<
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
    <path
      d="M10.074 5.118q.576 0 1.013.28.441.276.677.782.236.5.236 1.15v3.552h-1.024V7.428q0-.654-.294-1.017-.288-.363-.834-.363-.415 0-.72.209-.299.203-.461.583-.158.373-.158.88v3.162H7.496V7.428q0-.65-.31-1.012-.304-.369-.85-.368-.615 0-.96.45-.348.451-.347 1.222v3.162H4V5.25h.997v.864q.248-.48.651-.737.41-.26.935-.259A1.81 1.81 0 0 1 8.294 6.23a2.1 2.1 0 0 1 .73-.82 1.93 1.93 0 0 1 1.05-.29"
      fill="#DB5C5C"
    />
    <path
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const GroupByMethod: FC<GroupByMethodProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GroupByMethodLight : GroupByMethodDark;

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

export default GroupByMethod;
