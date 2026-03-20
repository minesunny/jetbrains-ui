'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

export type IconMode = 'light' | 'dark';

export function useIconMode() {
  const { resolvedTheme } = useTheme();
  const [manualMode, setManualMode] = useState<IconMode | null>(null);

  const siteMode: IconMode = resolvedTheme === 'dark' ? 'dark' : 'light';

  return [manualMode ?? siteMode, setManualMode] as const;
}
