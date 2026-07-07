/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type XmlProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const XmlLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.078 2.44a.6.6 0 0 0-1.157-.319L5.765 13.56a.6.6 0 0 0 1.157.319zM5.413 4.667a.6.6 0 0 1-.094.843L1.96 8.197l3.36 2.687a.6.6 0 0 1-.75.937L.624 8.666.04 8.197l.585-.468L4.57 4.573a.6.6 0 0 1 .844.094m5.174 7.06a.6.6 0 0 1 .094-.843l3.359-2.687-3.36-2.687a.6.6 0 0 1 .75-.937l3.945 3.156.585.468-.585.469-3.944 3.155a.6.6 0 0 1-.844-.094"
      fill="#E66D17"
    />
  </svg>
);

const XmlDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.078 2.44a.6.6 0 0 0-1.157-.319L5.765 13.56a.6.6 0 0 0 1.157.319zM5.413 4.667a.6.6 0 0 1-.094.843L1.96 8.197l3.36 2.687a.6.6 0 0 1-.75.937L.624 8.666.04 8.197l.585-.468L4.57 4.573a.6.6 0 0 1 .844.094m5.174 7.06a.6.6 0 0 1 .094-.843l3.359-2.687-3.36-2.687a.6.6 0 0 1 .75-.937l3.945 3.156.585.468-.585.469-3.944 3.155a.6.6 0 0 1-.844-.094"
      fill="#C77D55"
    />
  </svg>
);

export const Xml: FC<XmlProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? XmlLight : XmlDark;

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

export default Xml;
