// Helpers for deriving icon lists from the manifest, so galleries don't
// hardcode (easily-stale) icon names.

import { iconRegistry } from '@/registry/icons/manifest';

/**
 * All icon pathnames under a given domain (e.g. "database"), sorted.
 * Excludes the `expui` subcategory by default.
 */
export function domainIconNames(
  domain: string,
  { includeExpui = false }: { includeExpui?: boolean } = {},
): string[] {
  return Object.keys(iconRegistry)
    .filter((k) => k.startsWith(`${domain}/`))
    .filter((k) => includeExpui || !k.includes('/expui/'))
    .sort();
}
