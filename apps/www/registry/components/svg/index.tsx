'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import {
  ICON_REGISTRY,
  type IconComponentProps,
  type IconSize,
} from './registry';

const iconPixelSizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

const DEFAULT_VISIBLE_ARTBOARD_RATIO = 14 / 16;

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

function toArtboardSize(size: IconSize | number = 'md') {
  if (typeof size === 'number') {
    return size;
  }

  return iconPixelSizeMap[size];
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
  const resolvedIconSize = toIconSize(size);
  const artboardSize = toArtboardSize(size);
  const renderedIconSize = iconPixelSizeMap[resolvedIconSize];
  const iconScale =
    (artboardSize * DEFAULT_VISIBLE_ARTBOARD_RATIO) / renderedIconSize;

  return (
    <React.Suspense fallback={null}>
      <span
        data-slot="svg"
        className="inline-flex shrink-0 items-center justify-center align-middle leading-none"
        style={{
          width: `${artboardSize}px`,
          height: `${artboardSize}px`,
        }}
      >
        <span
          data-slot="svg-artboard"
          className="inline-flex items-center justify-center"
          style={{
            transform: `scale(${iconScale})`,
            transformOrigin: 'center',
          }}
        >
          <LazyIcon
            size={resolvedIconSize}
            mode={mode}
            className={className}
            title={title}
            aria-label={ariaLabel}
          />
        </span>
      </span>
    </React.Suspense>
  );
}

export default SVG;
