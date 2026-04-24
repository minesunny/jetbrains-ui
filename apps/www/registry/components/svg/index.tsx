'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Auto-import all SVGs from registry/icons via webpack require.context
// svg-sprite-loader processes each into the global sprite sheet
// @ts-expect-error webpack-specific API
const svgIcons = require.context('@registry/icons/', true, /\.svg$/);
svgIcons.keys().forEach(svgIcons);

const sizeMap = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

export function SVG({
  name,
  size = 'md',
  className,
  'aria-label': ariaLabel,
}: {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  'aria-label'?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mode = mounted && resolvedTheme === 'dark' ? 'dark' : 'light';
  const spriteId = `icon-${name.replace(/\//g, '-').toLowerCase()}-${mode}`;

  const renderedSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <span
      data-slot="svg"
      className="inline-flex shrink-0 items-center justify-center align-middle leading-none"
      style={{ width: `${renderedSize}px`, height: `${renderedSize}px` }}
    >
      <svg
        data-slot="svg-artboard"
        className={className}
        width={renderedSize}
        height={renderedSize}
        viewBox="0 0 16 16"
        role={ariaLabel ? 'img' : 'presentation'}
        aria-label={ariaLabel}
      >
        <use href={`#${spriteId}`} />
      </svg>
    </span>
  );
}

export default SVG;
