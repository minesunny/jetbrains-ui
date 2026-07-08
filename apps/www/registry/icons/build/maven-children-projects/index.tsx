/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MavenChildrenProjectsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const MavenChildrenProjects = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MavenChildrenProjectsProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path d="M9.356 1c1.552 0 1.822 1.3 1.552 2.47L9.97 7.517c-.072.324-.407.531-.749.463s-.56-.386-.489-.71l.882-3.8c.43-1.856-2.006-1.627-2.995-.249l-1.005 4.3c-.072.323-.407.53-.75.462l-.04-.01a.6.6 0 0 1-.461-.702l.885-3.804c.197-.838-.207-1.25-.794-1.322-.7-.075-1.657.335-2.19 1.08L2.26 3.22v.001L1.25 7.525c-.072.324-.408.53-.75.461-.342-.068-.56-.386-.487-.71L1.33 1.598c.073-.324.408-.53.75-.462.388.079.548.433.473.773.715-.56 1.549-.956 2.5-.904.93.018 1.385.515 1.534 1.165C7.444 1.44 8.168 1 9.356 1" className="fill-[#3574F0] dark:fill-[#548AF7]" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
  </svg>
);

export default MavenChildrenProjects;
