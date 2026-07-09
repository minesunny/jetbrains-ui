/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Freeze = ({
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
      d="M7.5 1a.5.5 0 0 1 .5.5v1.066l.723-.482a.5.5 0 0 1 .555.832l-1.277.852v3.366l2.915-1.683.1-1.532a.5.5 0 1 1 .997.064l-.056.867.923-.533a.5.5 0 0 1 .5.866l-.923.533.779.385a.5.5 0 1 1-.444.896l-1.376-.68L8.501 8l2.915 1.683 1.376-.68a.5.5 0 1 1 .443.896l-.778.385.922.533a.5.5 0 1 1-.5.866l-.922-.533.055.867a.5.5 0 1 1-.998.064l-.098-1.532L8 8.866v3.366l1.277.852a.5.5 0 1 1-.555.832l-.722-.482V14.5a.5.5 0 0 1-1 0v-1.066l-.723.482a.5.5 0 1 1-.555-.832l1.278-.852V8.866L4.086 10.55l-.1 1.532a.5.5 0 1 1-.997-.064l.056-.867-.923.533a.5.5 0 0 1-.5-.866l.923-.533-.779-.385a.5.5 0 0 1 .443-.896l1.377.68L6.5 8 3.585 6.317l-1.376.68a.5.5 0 1 1-.443-.896l.778-.385-.923-.533a.5.5 0 1 1 .5-.866l.923.533-.056-.867a.5.5 0 1 1 .998-.064l.099 1.532 2.916 1.683V3.768l-1.278-.852a.5.5 0 0 1 .555-.832l.723.482V1.5a.5.5 0 0 1 .5-.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Freeze;
