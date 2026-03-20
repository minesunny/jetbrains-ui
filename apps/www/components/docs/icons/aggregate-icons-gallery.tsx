'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type IconMode = 'light' | 'dark';
type IconModule = Record<string, unknown>;
type IconComponent = React.ComponentType<{
  size?: IconSize;
  mode?: IconMode;
}>;

export type IconPackLoader = {
  id: string;
  label: string;
  importPath: string;
  load: () => Promise<IconModule>;
};

type IconEntry = {
  key: string;
  name: string;
  packId: string;
  packLabel: string;
  importPath: string;
  component: IconComponent;
};

function isIconExport(
  name: string,
  value: unknown,
): value is React.ComponentType<{
  size?: IconSize;
  mode?: IconMode;
}> {
  return !name.endsWith('Props') && typeof value === 'function';
}

function extractIconsFromPack(
  pack: IconPackLoader,
  mod: IconModule,
): IconEntry[] {
  return Object.entries(mod).reduce<IconEntry[]>((acc, [name, value]) => {
    if (!isIconExport(name, value)) return acc;

    acc.push({
      key: `${pack.id}:${name}`,
      name,
      packId: pack.id,
      packLabel: pack.label,
      importPath: pack.importPath,
      component: value,
    });

    return acc;
  }, []);
}

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

export function AggregateIconsGallery({
  packs,
  searchPlaceholder = 'Search icons or category...',
  emptyText = 'No icons found',
}: {
  packs: readonly IconPackLoader[];
  searchPlaceholder?: string;
  emptyText?: string;
}) {
  const [selectedSize, setSelectedSize] = useState<IconSize>('md');
  const [selectedMode, setSelectedMode] = useIconMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIcon, setExpandedIcon] = useState<string | null>(null);
  const [allIcons, setAllIcons] = useState<IconEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadIcons() {
      setIsLoading(true);
      setLoadError(null);
      try {
        const loaded = await Promise.all(
          packs.map(async (pack) => {
            const mod = await pack.load();
            return extractIconsFromPack(pack, mod);
          }),
        );

        if (!cancelled) {
          const merged = loaded
            .flat()
            .sort(
              (a, b) =>
                a.name.localeCompare(b.name) ||
                a.packLabel.localeCompare(b.packLabel),
            );
          setAllIcons(merged);
        }
      } catch {
        if (!cancelled) {
          setLoadError('Failed to load icon modules.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadIcons();

    return () => {
      cancelled = true;
    };
  }, [packs]);

  const filteredIcons = useMemo(() => {
    if (!searchQuery) return allIcons;
    const query = searchQuery.toLowerCase();

    return allIcons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(query) ||
        icon.packLabel.toLowerCase().includes(query) ||
        icon.packId.toLowerCase().includes(query),
    );
  }, [allIcons, searchQuery]);

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
              {isLoading
                ? 'Loading...'
                : searchQuery
                  ? `${filteredIcons.length} / ${allIcons.length}`
                  : `${allIcons.length} icons`}
            </span>
          </div>
        </div>
      </div>

      {loadError ? (
        <div className="text-center py-16 text-fd-muted-foreground">
          <p className="text-sm font-medium">{loadError}</p>
        </div>
      ) : isLoading ? (
        <div className="text-center py-16 text-fd-muted-foreground">
          <p className="text-sm font-medium">Loading icons...</p>
        </div>
      ) : filteredIcons.length === 0 ? (
        <div className="text-center py-16 text-fd-muted-foreground">
          <p className="text-sm font-medium">{emptyText}</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {filteredIcons.map((icon) => {
            const IconComponent = icon.component;
            const isExpanded = expandedIcon === icon.key;

            return (
              <div key={icon.key} className="relative">
                <button
                  onClick={() => setExpandedIcon(isExpanded ? null : icon.key)}
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
                    {icon.name}
                  </span>
                  <span className="mt-0.5 text-[9px] text-center text-fd-muted-foreground/80 leading-tight break-all line-clamp-1 w-full">
                    {icon.packLabel}
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
                          {icon.name}
                        </p>
                        <p className="text-[10px] text-fd-muted-foreground truncate mt-0.5">
                          {icon.packLabel}
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
                      <code className="flex-1 text-[9px] p-1.5 rounded bg-fd-muted font-mono truncate">
                        {`import { ${icon.name} } from '${icon.importPath}';`}
                      </code>
                      <CopyButton
                        text={`import { ${icon.name} } from '${icon.importPath}';`}
                      />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <code className="flex-1 text-[9px] p-1.5 rounded bg-fd-muted font-mono truncate">
                        {`<${icon.name} size="md" />`}
                      </code>
                      <CopyButton text={`<${icon.name} size="md" />`} />
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
