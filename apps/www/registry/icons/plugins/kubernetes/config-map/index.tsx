/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ConfigMap = ({
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
    <path
      d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M6 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7 12q0 .514.1 1H2.5a.5.5 0 0 1 0-1zM8 9a5 5 0 0 0-.584 1H6.5a.5.5 0 0 1 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
  </svg>
);

export default ConfigMap;
