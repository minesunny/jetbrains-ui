/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const FreezeAll = ({
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
      d="M8 1.5a.5.5 0 1 0-1 0v1.066l-.722-.482a.5.5 0 0 0-.555.832l1.278.852v3.366L4.085 5.451l-.099-1.532a.5.5 0 1 0-.998.064l.056.867-.923-.533a.5.5 0 1 0-.5.866l.923.533-.778.385a.5.5 0 0 0 .443.896l1.376-.68L6.5 8 3.585 9.683l-1.376-.68a.5.5 0 1 0-.443.896l.778.385-.923.533a.5.5 0 1 0 .5.866l.923-.533-.056.867a.5.5 0 0 0 .998.064l.099-1.532 2.916-1.683v3.366l-1.278.852a.5.5 0 0 0 .555.832l.723-.482V14.5a.5.5 0 0 0 1 0zM11 1.5a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0zM14 1.5a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default FreezeAll;
