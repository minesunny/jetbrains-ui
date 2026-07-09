'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export type IconMode = 'light' | 'dark';

export function useIconMode() {
  const { resolvedTheme } = useTheme();
  const [manualMode, setManualMode] = useState<IconMode | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const siteMode: IconMode =
    mounted && resolvedTheme === 'dark' ? 'dark' : 'light';

  return [manualMode ?? siteMode, setManualMode] as const;
}
