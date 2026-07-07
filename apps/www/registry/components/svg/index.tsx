'use client';

import { Suspense, lazy, useEffect, useState, type ComponentType } from 'react';
import { useTheme } from 'next-themes';
import {
  iconRegistry,
  slugIndex,
  type IconPathname,
} from '@/registry/icons/manifest';

const sizeMap = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

export type SvgSize = keyof typeof sizeMap;

interface SVGProps {
  /** Full pathname (`"database/redis"`) or bare slug (`"redis"`). Case-insensitive. */
  name: string;
  size?: SvgSize | number;
  /** Override the icon theme; defaults to the active next-themes resolved theme. */
  mode?: 'light' | 'dark';
  className?: string;
  'aria-label'?: string;
}

/**
 * Resolve a `name` (pathname or bare slug) to a manifest pathname.
 * - Pathname form (`domain/.../icon`) is looked up directly in `iconRegistry`.
 * - Bare slug form is resolved via `slugIndex`; throws if ambiguous.
 */
function resolvePathname(name: string): IconPathname {
  const key = name.toLowerCase();

  if (key.includes('/')) {
    if (!(key in iconRegistry)) {
      throw new Error(`[SVG] Unknown icon pathname: "${name}"`);
    }
    return key as IconPathname;
  }

  const candidates = slugIndex[key];
  if (!candidates || candidates.length === 0) {
    throw new Error(`[SVG] Unknown icon name: "${name}"`);
  }
  if (candidates.length > 1) {
    throw new Error(
      `[SVG] Ambiguous icon name "${name}" matches: ${candidates.join(', ')}. Use the full pathname (e.g. "${candidates[0]}").`,
    );
  }
  return candidates[0];
}

// Cache lazy components per pathname so they don't remount on every render.
const lazyCache = new Map<IconPathname, ComponentType<any>>();

function getLazy(pathname: IconPathname): ComponentType<any> {
  let Component = lazyCache.get(pathname);
  if (!Component) {
    Component = lazy(
      iconRegistry[pathname] as unknown as () => Promise<{
        default: ComponentType<any>;
      }>,
    );
    lazyCache.set(pathname, Component);
  }
  return Component;
}

export function SVG({
  name,
  size = 'md',
  mode,
  className,
  'aria-label': ariaLabel,
}: SVGProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Explicit mode wins; otherwise follow the active theme.
  const resolvedMode =
    mode ?? (mounted && resolvedTheme === 'dark' ? 'dark' : 'light');
  // Icon components take size in px; map the public token (or pass-through number).
  const renderedSize = typeof size === 'number' ? size : sizeMap[size];

  const pathname = resolvePathname(name);
  const LazyIcon = getLazy(pathname);

  return (
    <span
      data-slot="svg"
      className="inline-flex shrink-0 items-center justify-center align-middle leading-none"
      style={{ width: `${renderedSize}px`, height: `${renderedSize}px` }}
    >
      <Suspense fallback={null}>
        {/* Icon components derive role / aria-hidden from aria-label internally. */}
        <LazyIcon
          size={renderedSize}
          mode={resolvedMode}
          className={className}
          aria-label={ariaLabel}
        />
      </Suspense>
    </span>
  );
}

export default SVG;
