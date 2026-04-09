'use client';

import React, { useState } from 'react';
import { cn } from '@workspace/ui/lib/utils';

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type SvgSize = (typeof sizes)[number];

export const sizeLabels: Record<SvgSize, string> = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="shrink-0 px-2 py-0.5 text-[10px] rounded bg-fd-muted hover:bg-fd-accent text-fd-muted-foreground transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export function SizeToggle({
  value,
  onChange,
}: {
  value: SvgSize;
  onChange: (size: SvgSize) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 border rounded-md p-0.5">
      {sizes.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={cn(
            'px-1.5 py-0.5 text-[10px] rounded font-medium transition-colors',
            value === s
              ? 'bg-fd-primary text-fd-primary-foreground'
              : 'hover:bg-fd-accent text-fd-muted-foreground',
          )}
        >
          {s.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function ModeToggle({
  value,
  onChange,
}: {
  value: 'light' | 'dark';
  onChange: (mode: 'light' | 'dark') => void;
}) {
  return (
    <div className="flex items-center gap-0.5 border rounded-md p-0.5">
      {(['light', 'dark'] as const).map((m) => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className={cn(
            'px-2 py-0.5 text-[10px] rounded font-medium transition-colors capitalize',
            value === m
              ? 'bg-fd-primary text-fd-primary-foreground'
              : 'hover:bg-fd-accent text-fd-muted-foreground',
          )}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
