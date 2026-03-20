'use client';

import React, { useState } from 'react';
import { Search, ConfigFile, Copy } from '@/registry/icons/general/general';
import type { IconSize } from '@/registry/icons/general/types';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';

const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const sizeLabels: Record<IconSize, string> = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};

export function IconUsagePreview() {
  const [size, setSize] = useState<IconSize>('md');
  const [mode, setMode] = useIconMode();

  return (
    <div className="not-prose my-4 rounded-lg border">
      {/* Preview */}
      <div
        className={cn(
          'flex items-center justify-center gap-6 p-8 rounded-t-lg',
          mode === 'dark' ? 'bg-zinc-900' : 'bg-white',
        )}
      >
        <Search size={size} mode={mode} />
        <ConfigFile size={size} mode={mode} />
        <Copy size={size} mode={mode} />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 border-t px-4 py-3 bg-fd-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fd-muted-foreground">Size:</span>
          <div className="flex items-center gap-0.5 border rounded-md p-0.5">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  'px-1.5 py-0.5 text-[10px] rounded font-medium transition-colors',
                  size === s
                    ? 'bg-fd-primary text-fd-primary-foreground'
                    : 'hover:bg-fd-accent text-fd-muted-foreground',
                )}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-fd-muted-foreground">
            ({sizeLabels[size]})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fd-muted-foreground">Mode:</span>
          <div className="flex items-center gap-0.5 border rounded-md p-0.5">
            {(['light', 'dark'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={cn(
                  'px-2 py-0.5 text-[10px] rounded font-medium transition-colors capitalize',
                  mode === m
                    ? 'bg-fd-primary text-fd-primary-foreground'
                    : 'hover:bg-fd-accent text-fd-muted-foreground',
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
