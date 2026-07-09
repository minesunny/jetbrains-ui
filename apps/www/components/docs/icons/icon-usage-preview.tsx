'use client';

import React, { useState } from 'react';
import { SVG } from '@/registry/components/svg';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';
import {
  sizes,
  sizeLabels,
  SizeToggle,
  ModeToggle,
} from '@/components/docs/icons/shared';

const iconNames = [
  'general/general/search',
  'general/general/configFile',
  'general/general/copy',
] as const;

export function IconUsagePreview() {
  const [size, setSize] = useState<(typeof sizes)[number]>('md');
  const [mode, setMode] = useIconMode();

  return (
    <div className="not-prose my-4 rounded-lg border overflow-hidden">
      {/* Preview */}
      <div
        className={cn(
          'flex items-center justify-center gap-6 p-8',
          mode === 'dark' ? 'bg-zinc-900' : 'bg-white',
        )}
      >
        {iconNames.map((name) => (
          <SVG key={name} name={name} size={size} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 border-t px-4 py-3 bg-fd-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fd-muted-foreground">Size:</span>
          <SizeToggle value={size} onChange={setSize} />
          <span className="text-[10px] text-fd-muted-foreground">
            ({sizeLabels[size]})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fd-muted-foreground">Mode:</span>
          <ModeToggle value={mode} onChange={setMode} />
        </div>
      </div>
    </div>
  );
}
