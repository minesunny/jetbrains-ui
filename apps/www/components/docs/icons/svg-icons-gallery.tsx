'use client';

import React, { useState, useMemo } from 'react';
import { SVG } from '@/registry/components/svg';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';
import { CopyButton, SizeToggle, ModeToggle } from '@/components/docs/icons/shared';
import type { SvgSize } from '@/components/docs/icons/shared';

interface SvgIcon {
  /** Full icon name e.g., "breakpoints/breakpoint" */
  name: string;
  /** Optional display label override */
  label?: string;
}

interface SvgIconsGalleryProps {
  icons: readonly SvgIcon[];
  searchPlaceholder?: string;
}

export function SvgIconsGallery({
  icons,
  searchPlaceholder = 'Search icons...',
}: SvgIconsGalleryProps) {
  const [selectedSize, setSelectedSize] = useState<SvgSize>('md');
  const [selectedMode, setSelectedMode] = useIconMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIcon, setExpandedIcon] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    if (!searchQuery) return [...icons];
    const query = searchQuery.toLowerCase();
    return icons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(query) ||
        (icon.label?.toLowerCase().includes(query) ?? false),
    );
  }, [icons, searchQuery]);

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
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-sm border rounded-lg bg-fd-background text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-2 focus:ring-fd-ring"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
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
            <SizeToggle value={selectedSize} onChange={setSelectedSize} />
            <ModeToggle value={selectedMode} onChange={setSelectedMode} />
            <span className="text-[11px] text-fd-muted-foreground ml-auto">
              {searchQuery
                ? `${filteredIcons.length} / ${icons.length}`
                : `${icons.length} icons`}
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
          {filteredIcons.map((icon) => {
            const isExpanded = expandedIcon === icon.name;
            const displayName = icon.label ?? icon.name.split('/').pop() ?? icon.name;
            return (
              <div key={icon.name} className="relative">
                <button
                  onClick={() =>
                    setExpandedIcon(isExpanded ? null : icon.name)
                  }
                  aria-label={displayName}
                  className={cn(
                    'w-full aspect-square flex flex-col items-center justify-start p-3 border rounded-lg transition-all',
                    isExpanded
                      ? 'bg-fd-accent ring-2 ring-fd-ring'
                      : 'hover:bg-fd-accent/50',
                  )}
                >
                  <div className="flex items-center justify-center h-8 mb-1.5">
                    <SVG name={icon.name} size={selectedSize} />
                  </div>
                  <span
                    className="mt-0.5 block w-full truncate px-1 text-center text-[10px] leading-tight text-fd-muted-foreground"
                    title={displayName}
                  >
                    {displayName}
                  </span>
                </button>
                {isExpanded && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 z-20 w-72 p-3 bg-fd-card border rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-fd-muted">
                        <SVG name={icon.name} size="xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {displayName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 mb-3 p-2 rounded-lg bg-fd-muted/50">
                      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
                        <div
                          key={s}
                          className="flex flex-col items-center gap-1"
                        >
                          <SVG name={icon.name} size={s} />
                          <span className="text-[9px] text-fd-muted-foreground">
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <code className="flex-1 text-[9px] p-1.5 rounded bg-fd-muted font-mono truncate">{`<SVG name="${icon.name}" />`}</code>
                      <CopyButton text={`<SVG name="${icon.name}" />`} />
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
