/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RestartDebugProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const RestartDebug = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RestartDebugProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M14 10q0 .127-.015.25A3 3 0 0 0 12 9.5c-.76 0-1.456.283-1.985.75A2 2 0 1 1 14 10M14 12.5a2 2 0 1 0-4 0v.5a2 2 0 1 0 4 0z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10q0 .127-.015.25.21.185.38.405l.858-.571a.5.5 0 1 1 .554.832l-.934.623q.155.455.157.961v.5c0 .486-.116.946-.321 1.352l1.098.732a.5.5 0 1 1-.554.832l-1.138-.759A3 3 0 0 1 12 16a3 3 0 0 1-2.085-.843l-1.138.759a.5.5 0 1 1-.554-.832l1.098-.732A3 3 0 0 1 9 13v-.5c0-.336.055-.66.157-.96l-.934-.624a.5.5 0 0 1 .554-.832l.857.571q.172-.22.381-.405A2 2 0 1 1 14 10m-3.608 4.189.016.021A1.997 1.997 0 0 0 14 13v-.5a2 2 0 1 0-4 0v.5c0 .445.146.857.392 1.189m.671-4.54a1 1 0 0 1 1.874 0 3 3 0 0 0-1.874 0"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182a6 6 0 1 0-4.874 9.316A4 4 0 0 1 8 13a5 5 0 1 1 4-8H9.5a.5.5 0 0 0 0 1H14z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default RestartDebug;
