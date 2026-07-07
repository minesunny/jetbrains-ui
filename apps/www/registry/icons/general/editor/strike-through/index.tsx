/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type StrikeThroughProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const StrikeThroughLight: FC<
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
      d="M10.226 5.557a1.49 1.49 0 0 0-.692-1.118q-.607-.397-1.486-.397-.645 0-1.127.208a1.8 1.8 0 0 0-.748.573q-.266.365-.266.829 0 .387.185.667.189.274.483.46Q6.78 6.903 7 7H5.167q-.396-.534-.396-1.292 0-.814.44-1.42a2.9 2.9 0 0 1 1.194-.947A4 4 0 0 1 8.085 3q.938 0 1.667.336.729.331 1.155.91.432.577.455 1.31zM13.5 8a.5.5 0 0 1 0 1h-2.313l.028.046q.28.469.28 1.151 0 .786-.412 1.42-.408.635-1.194 1.009Q9.11 13 7.991 13q-1.042 0-1.804-.336-.758-.336-1.193-.938-.431-.6-.488-1.397h1.212q.048.55.37.91a2 2 0 0 0 .823.53q.503.17 1.08.17.672 0 1.207-.217.536-.223.848-.616.312-.397.312-.928 0-.483-.27-.786A1.9 1.9 0 0 0 9.585 9H2.5a.5.5 0 0 1 0-1z"
      fill="#6C707E"
    />
  </svg>
);

const StrikeThroughDark: FC<
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
      d="M10.226 5.557a1.49 1.49 0 0 0-.692-1.118q-.607-.397-1.486-.397-.645 0-1.127.208a1.8 1.8 0 0 0-.748.573q-.266.365-.266.829 0 .387.185.667.189.274.483.46Q6.78 6.903 7 7H5.167q-.396-.534-.396-1.292 0-.814.44-1.42a2.9 2.9 0 0 1 1.194-.947A4 4 0 0 1 8.085 3q.938 0 1.667.336.729.331 1.155.91.432.577.455 1.31zM13.5 8a.5.5 0 0 1 0 1h-2.313l.028.046q.28.469.28 1.151 0 .786-.412 1.42-.408.635-1.194 1.009Q9.11 13 7.991 13q-1.042 0-1.804-.336-.758-.336-1.193-.938-.431-.6-.488-1.397h1.212q.048.55.37.91a2 2 0 0 0 .823.53q.503.17 1.08.17.672 0 1.207-.217.536-.223.848-.616.312-.397.312-.928 0-.483-.27-.786A1.9 1.9 0 0 0 9.585 9H2.5a.5.5 0 0 1 0-1z"
      fill="#CED0D6"
    />
  </svg>
);

export const StrikeThrough: FC<StrikeThroughProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? StrikeThroughLight : StrikeThroughDark;

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

export default StrikeThrough;
