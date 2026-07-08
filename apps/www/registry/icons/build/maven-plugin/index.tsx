/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MavenPluginProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const MavenPlugin = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MavenPluginProps) => (
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
    <path d="M14.796 11c1.137 0 1.334.958 1.137 1.82l-.634 2.824a.463.463 0 0 1-.548.342.44.44 0 0 1-.358-.523l.591-2.642c.315-1.368-1.469-1.2-2.192-.184l-.682 3.01a.463.463 0 0 1-.58.334.44.44 0 0 1-.336-.518l.594-2.644c.144-.618-.152-.922-.582-.975-.512-.055-1.213.247-1.604.796l-.686 3.01a.463.463 0 0 1-.55.34.44.44 0 0 1-.356-.523l.91-4.026c.053-.239.299-.391.55-.34.283.057.4.318.346.569.523-.413 1.133-.705 1.83-.667.681.014 1.014.38 1.123.86.627-.538 1.158-.862 2.027-.862" className="fill-[#3574F0] dark:fill-[#548AF7]" />
    <path d="M14.796 11c1.137 0 1.334.958 1.137 1.82l-.634 2.824a.463.463 0 0 1-.548.342.44.44 0 0 1-.358-.523l.591-2.642c.315-1.368-1.469-1.2-2.192-.184l-.682 3.01a.463.463 0 0 1-.58.334.44.44 0 0 1-.336-.518l.594-2.644c.144-.618-.152-.922-.582-.975-.512-.055-1.213.247-1.604.796l-.686 3.01a.463.463 0 0 1-.55.34.44.44 0 0 1-.356-.523l.91-4.026c.053-.239.299-.391.55-.34.283.057.4.318.346.569.523-.413 1.133-.705 1.83-.667.681.014 1.014.38 1.123.86.627-.538 1.158-.862 2.027-.862" className="fill-[#3574F0] dark:fill-[#548AF7]" />
    <path d="M3.126 10H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.126C3.57 4.275 5.136 3 7 3h4a1 1 0 0 1 1 1v6.03a3 3 0 0 0-.316-.026 3.34 3.34 0 0 0-1.54.298 1.5 1.5 0 0 0-.476-.181c-.744-.151-1.543.293-1.724 1.1v.002L7.542 13H7a4 4 0 0 1-3.874-3M10.647 13h.075l.012-.054q-.045.025-.088.054" className="fill-[#EBECF0] dark:fill-[#43454A]" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11 3a1 1 0 0 1 1 1v1h3.5a.5.5 0 0 1 0 1H12v4.03a3 3 0 0 0-.316-.026 3.2 3.2 0 0 0-.684.039V4H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.768l-.226 1H7a4 4 0 0 1-3.874-3H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.126q.024-.096.054-.19A4 4 0 0 1 7 3zM1 9V7h2v2z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
  </svg>
);

export default MavenPlugin;
