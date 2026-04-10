/// <reference types="vitest/globals" />
import '@testing-library/jest-dom/vitest';

class ResizeObserverMock implements ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

// Mock SVG component — the real one uses webpack require.context which
// is unavailable in Vitest. Render a minimal <svg><path /></svg> stub instead.
vi.mock('@/registry/components/svg', async () => {
  const { createElement } = await import('react');
  const MockSVG = (props: {
    name: string;
    size?: string | number;
    className?: string;
    'aria-label'?: string;
  }) =>
    createElement(
      'svg',
      { className: props.className, 'aria-label': props['aria-label'] },
      createElement('path'),
    );
  return { SVG: MockSVG, default: MockSVG };
});

// Mock next-themes — not available in jsdom
vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light', setTheme: vi.fn() }),
}));
