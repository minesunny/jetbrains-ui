'use client';

import React, { useState, useMemo } from 'react';
import * as RatingIcons from '@/registry/icons/general/rating';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';

const allIconNames = Object.keys(RatingIcons).filter(
  (k) => !k.endsWith('Props') && typeof (RatingIcons as any)[k] === 'function',
);

function CopyButton({ text }: { text: string }) {
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

export function RatingIconsGallery() {
  const [selectedSize, setSelectedSize] = useState<
    'xs' | 'sm' | 'md' | 'lg' | 'xl'
  >('md');
  const [selectedMode, setSelectedMode] = useIconMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIcon, setExpandedIcon] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    if (!searchQuery) return allIconNames;
    const query = searchQuery.toLowerCase();
    return allIconNames.filter((name) => name.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="not-prose">
      <div className="sticky top-14 z-10 -mx-2 px-2 py-3 bg-fd-background/95 backdrop-blur-sm border-b mb-4">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-fd-muted-foreground"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" />
              <path
                d="M10.5 10.5L14 14"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-sm border rounded-lg bg-fd-background text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-2 focus:ring-fd-ring"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-fd-muted-foreground hover:text-fd-foreground"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 3l8 8M11 3l-8 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-0.5 border rounded-md p-0.5">
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={cn(
                    'px-1.5 py-0.5 text-[10px] rounded font-medium transition-colors',
                    selectedSize === s
                      ? 'bg-fd-primary text-fd-primary-foreground'
                      : 'hover:bg-fd-accent text-fd-muted-foreground',
                  )}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-0.5 border rounded-md p-0.5">
              {(['light', 'dark'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMode(m)}
                  className={cn(
                    'px-2 py-0.5 text-[10px] rounded font-medium transition-colors capitalize',
                    selectedMode === m
                      ? 'bg-fd-primary text-fd-primary-foreground'
                      : 'hover:bg-fd-accent text-fd-muted-foreground',
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-fd-muted-foreground ml-auto">
              {searchQuery
                ? `${filteredIcons.length} / ${allIconNames.length}`
                : `${allIconNames.length} icons`}
            </span>
          </div>
        </div>
      </div>
      {filteredIcons.length === 0 ? (
        <div className="text-center py-16 text-fd-muted-foreground">
          <p className="text-sm font-medium">No icons found</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {filteredIcons.map((iconName) => {
            const IconComponent = (RatingIcons as any)[iconName];
            if (!IconComponent) return null;
            const isExpanded = expandedIcon === iconName;
            return (
              <div key={iconName} className="relative">
                <button
                  onClick={() => setExpandedIcon(isExpanded ? null : iconName)}
                  className={cn(
                    'w-full flex flex-col items-center p-3 border rounded-lg transition-all',
                    isExpanded
                      ? 'bg-fd-accent ring-2 ring-fd-ring'
                      : 'hover:bg-fd-accent/50',
                  )}
                >
                  <div className="flex items-center justify-center h-8 mb-1.5">
                    <IconComponent size={selectedSize} mode={selectedMode} />
                  </div>
                  <span className="text-[10px] text-center text-fd-muted-foreground leading-tight break-all line-clamp-2 w-full">
                    {iconName}
                  </span>
                </button>
                {isExpanded && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 z-20 w-72 p-3 bg-fd-card border rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-fd-muted">
                        <IconComponent size="xl" mode={selectedMode} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {iconName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 mb-3 p-2 rounded-lg bg-fd-muted/50">
                      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
                        <div
                          key={s}
                          className="flex flex-col items-center gap-1"
                        >
                          <IconComponent size={s} mode={selectedMode} />
                          <span className="text-[9px] text-fd-muted-foreground">
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <code className="flex-1 text-[9px] p-1.5 rounded bg-fd-muted font-mono truncate">{`import { ${iconName} } from '@/components/jetbrains-ui/icons/general/rating';`}</code>
                      <CopyButton
                        text={`import { ${iconName} } from '@/components/jetbrains-ui/icons/general/rating';`}
                      />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <code className="flex-1 text-[9px] p-1.5 rounded bg-fd-muted font-mono truncate">{`<${iconName} size="md" />`}</code>
                      <CopyButton text={`<${iconName} size="md" />`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
