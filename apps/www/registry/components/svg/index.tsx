'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import {
  ICON_REGISTRY,
  type IconComponentProps,
  type IconSize,
} from './registry';

function toIconSize(size: IconSize | number = 'md'): IconSize {
  if (typeof size !== 'number') {
    return size;
  }

  if (size <= 12) {
    return 'xs';
  }

  if (size <= 14) {
    return 'sm';
  }

  if (size <= 18) {
    return 'md';
  }

  if (size <= 22) {
    return 'lg';
  }

  return 'xl';
}

export type SVGProps = Pick<
  IconComponentProps,
  'className' | 'title' | 'aria-label'
> & {
  name: string;
  size?: IconSize | number;
};

export function SVG({
  name,
  size = 'md',
  className,
  title,
  'aria-label': ariaLabel,
}: SVGProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const loader = ICON_REGISTRY[name];
  const LazyIcon = React.useMemo(
    () => (loader ? React.lazy(loader) : null),
    [loader],
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!LazyIcon) {
    return null;
  }

  const mode = mounted && resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <React.Suspense fallback={null}>
      <LazyIcon
        size={toIconSize(size)}
        mode={mode}
        className={className}
        title={title}
        aria-label={ariaLabel}
      />
    </React.Suspense>
  );
}

export default SVG;
