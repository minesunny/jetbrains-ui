/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Flink = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
    <path d="M5 2H6V3H5z" className="fill-[#FEAB6C]" />
    <path d="M6 2H7V3H6z" className="fill-[#F9D88C]" />
    <path d="M7 2H8V3H7z" className="fill-[#FE9E52]" />
    <path d="M8 2H9V3H8z" className="fill-[#F9D88C]" />
    <path d="M6 3H7V4H6z" className="fill-[#F9DD9D]" />
    <path d="M7 3H8V4H7z" className="fill-[#FE9F52]" />
    <path d="M8 3H9V4H8z" className="fill-[#F9D88C]" />
    <path d="M9 3H10V4H9z" className="fill-[#F9D88C]" />
    <path d="M5 4H6V5H5z" className="fill-[#FB5F81]" />
    <path d="M6 4H7V5H6z" className="fill-[#F57C7C]" />
    <path d="M8 4H9V5H8z" className="fill-[#FE9E52]" />
    <path d="M9 4H10V5H9z" className="fill-[#F57C7C]" />
    <path d="M4 5H5V6H4z" className="fill-[#FB5F81]" />
    <path d="M5 5H6V6H5z" className="fill-[#F57B7C]" />
    <path d="M7 5H8V6H7z" className="fill-[#F57B7C]" />
    <path d="M9 5H10V6H9z" className="fill-[#C62E53]" />
    <path d="M10 5H11V6H10z" className="fill-[#951B39]" />
    <path d="M3 6H4V7H3z" className="fill-[#AE72B2]" />
    <path d="M6 6H7V7H6z" className="fill-[#F57B7C]" />
    <path d="M8 6H9V7H8z" className="fill-[#F57C7B]" />
    <path d="M9 6H10V7H9z" className="fill-[#C54D5B]" />
    <path d="M1 7H2V8H1z" className="fill-[#951B39]" />
    <path d="M4 7H5V8H4z" className="fill-[#AE72B2]" />
    <path d="M6 7H7V8H6z" className="fill-[#AE72B2]" />
    <path d="M7 7H8V8H7z" className="fill-[#C54D5B]" />
    <path d="M8 7H9V8H8z" className="fill-[#C62E53]" />
    <path d="M12 7H13V8H12z" className="fill-[#B92D4E]" />
    <path d="M5 8H6V9H5z" className="fill-[#A058A3]" />
    <path d="M6 8H7V9H6z" className="fill-[#C62E53]" />
    <path d="M7 8H8V9H7z" className="fill-[#9A3D70]" />
    <path d="M7 4h1v1H7z" className="fill-[#F8416D]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 6V5H6v1H4v1H3v1H2v1h1v1h1V9h1V8h1V6zM4 8V7h1v1zm0 0v1H3V8z"
      className="fill-[#F8416D]"
    />
    <path d="M8 6v1H7V6zM8 6h1V5H8z" className="fill-[#F8416D]" />
    <path d="M4 9H5V10H4z" className="fill-[#9A3D70]" />
    <path d="M5 9H6V10H5z" className="fill-[#9A3D70]" />
    <path d="M11 9H12V10H11z" className="fill-[#951B39]" />
    <path d="M4 10H5V11H4z" className="fill-[#9A3D70]" />
    <path d="M8 11H9V12H8z" className="fill-[#961B39]" />
    <path d="M10 11H11V12H10z" className="fill-[#C62E53]" />
    <path d="M12 11H13V12H12z" className="fill-[#951B39]" />
    <path d="M1 12H2V13H1z" className="fill-[#951B39]" />
    <path d="M3 7H2v1h1v1H2v3h1v1h1v-3H3V9h1V8H3z" className="fill-[#A05AA5]" />
    <path d="M8 12H9V13H8z" className="fill-[#961B39]" />
    <path d="M11 12H12V13H11z" className="fill-[#CC5F00]" />
    <path d="M12 12H13V13H12z" className="fill-[#FE9C00]" />
    <path d="M13 12H14V13H13z" className="fill-[#951B39]" />
    <path d="M10 13H11V14H10z" className="fill-[#961B39]" />
    <path d="M11 13H12V14H11z" className="fill-[#C62E53]" />
    <path
      d="M11 6h1v2h1v1h-2v1h2V9h1v2h-4v1H9v-1H8v2h2v1H3v-1h1v-2h2v-1h2V9h1V8h1V7h1zM3 13H2v-1h1zM13 13h-1v1h1z"
      className="fill-[#F8416C]"
    />
    <path d="M3 14H4V15H3z" className="fill-[#961B39]" />
    <path
      d="M9 1H5v1H4v1h1v1H4v1H3v1H2v1h1V6h1V5h1V4h1V3H5V2h4v1h1v2h1v1h-1v1H9v1H8v1H6v1H5v1h1v-1h2V9h1V8h1V7h1V6h1v1h1V6h-1V5h-1V3h-1V2H9zM2 8H1v4h1zM14 8h-1v1h-1v1h1V9h1v2h-1v1h1v-1h1V9h-1zM12 11h-1v1H9v1h2v-1h1zM3 13H2v1h1zM13 13h1v1h-1zM13 15v-1H4v1z"
      className="fill-[#392A31]"
    />
  </svg>
);

export default Flink;
