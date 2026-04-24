/// <reference types="vitest/globals" />
import '@testing-library/jest-dom/vitest';

class ResizeObserverMock implements ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

// Mock SVG component — the real one uses webpack require.context which
// is unavailable in Vitest. Render a minimal stub that mirrors key attributes.
vi.mock('@/registry/components/svg', async () => {
  const { createElement } = await import('react');

  const sizeMap: Record<string, number> = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  };

  const MockSVG = (props: {
    name: string;
    size?: string | number;
    className?: string;
    'aria-label'?: string;
  }) => {
    const ariaLabel = props['aria-label'];
    const resolvedSize =
      typeof props.size === 'number'
        ? props.size
        : (sizeMap[props.size ?? 'md'] ?? 16);

    return createElement(
      'span',
      {
        'data-slot': 'svg',
        style: { width: `${resolvedSize}px`, height: `${resolvedSize}px` },
      },
      createElement(
        'svg',
        {
          'data-slot': 'svg-artboard',
          'data-size': typeof props.size === 'number' ? 'lg' : props.size,
          'data-mode': 'dark',
          className: props.className,
          width: resolvedSize,
          height: resolvedSize,
          viewBox: '0 0 16 16',
          role: ariaLabel ? 'img' : 'presentation',
          'aria-label': ariaLabel,
        },
        createElement('path'),
      ),
    );
  };
  return { SVG: MockSVG, default: MockSVG };
});

// Mock next-themes — not available in jsdom
vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light', setTheme: vi.fn() }),
}));
