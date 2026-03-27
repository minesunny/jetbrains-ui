'use client';

import { Switch } from '@/components/radix/switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SVG } from '@/registry/components/svg';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Switch
        className={className}
        leftIcon={<SVG name="general/new-ui/light-theme" />}
        rightIcon={<SVG name="general/new-ui/dark-theme" />}
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
    )
  );
};
