'use client';

import React from 'react';
import * as GeneralIcons from '@/registry/icons/general/general';

const allIconNames = Object.keys(GeneralIcons).filter(
  (k) => !k.endsWith('Props') && typeof (GeneralIcons as any)[k] === 'function',
);

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="px-2 py-0.5 text-[10px] rounded bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function IconsTestPage() {
  const [selectedSize, setSelectedSize] = React.useState<
    'xs' | 'sm' | 'md' | 'lg' | 'xl'
  >('md');
  const [selectedMode, setSelectedMode] = React.useState<'light' | 'dark'>(
    'light',
  );
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isDarkPage, setIsDarkPage] = React.useState(false);
  const [expandedIcon, setExpandedIcon] = React.useState<string | null>(null);

  const filteredIcons = React.useMemo(() => {
    if (!searchQuery) return allIconNames;
    const query = searchQuery.toLowerCase();
    return allIconNames.filter((name) => name.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className={isDarkPage ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <div className="container mx-auto py-12 px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold tracking-tight">
                JetBrains Icons
              </h1>
              <button
                onClick={() => setIsDarkPage(!isDarkPage)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-card hover:bg-accent transition-colors text-sm"
              >
                {isDarkPage ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <p className="text-muted-foreground mb-6">
              {searchQuery
                ? `${filteredIcons.length} / ${allIconNames.length} icons`
                : `${allIconNames.length} icons`}
            </p>

            {/* Search */}
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring mb-4"
            />

            {/* Controls */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-1 border rounded-lg p-1">
                {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                      selectedSize === s
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1 border rounded-lg p-1">
                {(['light', 'dark'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMode(m)}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors capitalize ${
                      selectedMode === m
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {filteredIcons.map((iconName) => {
              const IconComponent = (GeneralIcons as any)[iconName];
              if (!IconComponent) return null;
              const isExpanded = expandedIcon === iconName;

              return (
                <div key={iconName} className="relative">
                  <button
                    onClick={() =>
                      setExpandedIcon(isExpanded ? null : iconName)
                    }
                    className={`w-full flex flex-col items-center p-3 border rounded-lg transition-all ${
                      isExpanded
                        ? 'bg-accent ring-2 ring-ring'
                        : 'hover:bg-accent/50'
                    }`}
                  >
                    <div className="flex items-center justify-center h-8 mb-1.5">
                      <IconComponent size={selectedSize} mode={selectedMode} />
                    </div>
                    <span className="text-[10px] text-center text-muted-foreground leading-tight break-all line-clamp-2">
                      {iconName}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 w-72 p-3 bg-card border rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
                          <IconComponent size="xl" mode={selectedMode} />
                        </div>
                        <p className="text-sm font-medium truncate flex-1">
                          {iconName}
                        </p>
                      </div>
                      <div className="flex items-end gap-3 mb-3 p-2 rounded-lg bg-muted/50">
                        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
                          <div
                            key={s}
                            className="flex flex-col items-center gap-1"
                          >
                            <IconComponent size={s} mode={selectedMode} />
                            <span className="text-[9px] text-muted-foreground">
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <code className="flex-1 text-[10px] p-1.5 rounded bg-muted font-mono truncate">
                          {`import { ${iconName} } from '@/registry/icons/general/general';`}
                        </code>
                        <CopyButton
                          text={`import { ${iconName} } from '@/registry/icons/general/general';`}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-[10px] p-1.5 rounded bg-muted font-mono truncate">
                          {`<${iconName} size="md" />`}
                        </code>
                        <CopyButton text={`<${iconName} size="md" />`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
