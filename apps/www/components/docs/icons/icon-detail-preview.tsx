'use client';

import React from 'react';
import { SVG } from '@/registry/components/svg';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';
import { sizes, sizeLabels, ModeToggle } from '@/components/docs/icons/shared';

interface IconDetailPreviewProps {
  name: string;
}

export function IconDetailPreview({ name }: IconDetailPreviewProps) {
  const [mode, setMode] = useIconMode();

  return (
    <div className="not-prose my-4 rounded-lg border overflow-hidden">
      <div
        className={cn(
          'flex items-end justify-center gap-8 px-8 py-10',
          mode === 'dark' ? 'bg-zinc-900' : 'bg-white',
        )}
      >
        {sizes.map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <SVG name={name} size={s} />
            <span
              className={cn(
                'text-[10px]',
                mode === 'dark' ? 'text-zinc-400' : 'text-zinc-500',
              )}
            >
              {s} ({sizeLabels[s]})
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 border-t px-4 py-3 bg-fd-muted/30">
        <span className="text-xs text-fd-muted-foreground">Mode:</span>
        <ModeToggle value={mode} onChange={setMode} />
      </div>
    </div>
  );
}
