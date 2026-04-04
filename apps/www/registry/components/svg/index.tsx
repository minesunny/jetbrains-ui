'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { SVG_REGISTRY } from './registry';
import type { SvgProps, IconSize } from '@/registry/icons/general/types';

const iconPixelSizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

const ARTBOARD_RATIO = 14 / 16;

function toIconSize(size: IconSize | number = 'md'): IconSize {
  if (typeof size !== 'number') {
    return size;
  }

  if (size <= 12) return 'xs';
  if (size <= 14) return 'sm';
  if (size <= 18) return 'md';
  if (size <= 22) return 'lg';
  return 'xl';
}

export type SVGProps = Pick<SvgProps, 'className' | 'aria-label'> & {
  name: string;
  size?: IconSize | number;
};

export function SVG({
  name,
  size = 'md',
  className,
  'aria-label': ariaLabel,
}: SVGProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const loader = SVG_REGISTRY[name];
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
  const iconSize = toIconSize(size);
  const artboardSize = typeof size === 'number' ? size : iconPixelSizeMap[size];
  const renderedSize = iconPixelSizeMap[iconSize];
  const scale = (artboardSize * ARTBOARD_RATIO) / renderedSize;

  return (
    <React.Suspense fallback={null}>
      <span
        data-slot="svg"
        className="inline-flex shrink-0 items-center justify-center align-middle leading-none"
        style={{ width: `${artboardSize}px`, height: `${artboardSize}px` }}
      >
        <span
          data-slot="svg-artboard"
          className="inline-flex items-center justify-center"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
        >
          <LazyIcon
            size={iconSize}
            mode={mode}
            className={className}
            aria-label={ariaLabel}
          />
        </span>
      </span>
    </React.Suspense>
  );
}

export default SVG;
