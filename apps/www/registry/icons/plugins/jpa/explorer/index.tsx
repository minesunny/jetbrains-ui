/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Explorer = ({
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
    <circle
      cx="4"
      cy="11"
      r="2"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.738 13.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM6 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M5.64 3.182c-.114.838-.066 1.765.312 2.605a.5.5 0 0 1 .012.399L5.52 7.299a4 4 0 0 0-.972-.262l.412-1.031c-.4-1.003-.433-2.055-.31-2.96.132-.962.445-1.798.731-2.295a.5.5 0 0 1 .903.076l.62 1.682A.5.5 0 0 1 7 2.5h1.388l.436.018a3.2 3.2 0 0 1 2.199.977l.263.278 2.69.172a2.5 2.5 0 0 1 .827.181c.269.116.697.389.697.928 0 .315 0 1.307-.805 2.29-.661.807-1.812 1.546-3.78 1.944a17 17 0 0 1-.209.395l-.002.004c-.164.303-.299.553-.417.909C10.122 11.09 10 11.782 10 13a.5.5 0 1 1-1 0c0-1.282.128-2.09.338-2.72.1-.298.22-.56.344-.8l-.17.017a.5.5 0 1 1-.101-.994c2.69-.274 3.93-1.084 4.51-1.793.22-.268.356-.536.44-.777a1 1 0 0 1-1.355-1.047l-1.98-.127a.5.5 0 0 1-.331-.156l-.399-.42a2.2 2.2 0 0 0-1.512-.666L8.358 3.5h-1.09l.201.543a.5.5 0 0 1-.938.346L5.798 2.4c-.065.241-.12.504-.157.78"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M9.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Explorer;
