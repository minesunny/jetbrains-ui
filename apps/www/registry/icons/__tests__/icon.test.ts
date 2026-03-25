import { createElement } from 'react';

import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Breakpoint } from '../breakpoints';
import { Debug } from '../run';

let resolvedTheme: 'light' | 'dark' = 'light';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme,
  }),
}));

describe('registry icons', () => {
  beforeEach(() => {
    resolvedTheme = 'light';
  });

  it('renders a generated icon component with the current theme sprite', () => {
    const { container } = render(
      createElement(Breakpoint, {
        'aria-label': 'breakpoint icon',
        title: 'Breakpoint',
      }),
    );
    const svg = container.querySelector('svg');
    const use = container.querySelector('use');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');
    expect(svg).toHaveAttribute('viewBox', '0 0 14 14');
    expect(svg).toHaveAttribute('aria-label', 'breakpoint icon');
    expect(svg?.querySelector('title')).toHaveTextContent('Breakpoint');
    expect(use).toHaveAttribute(
      'href',
      '/icons/breakpoints.svg#breakpoint_light',
    );
  });

  it('prefers the explicit mode prop over the resolved theme', () => {
    const { container } = render(
      createElement(Debug, {
        'aria-label': 'debug icon',
        mode: 'dark',
        size: 'lg',
        title: 'Debug',
      }),
    );
    const svg = container.querySelector('svg');
    const use = container.querySelector('use');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('height', '20');
    expect(svg).toHaveAttribute('viewBox', '0 0 16 16');
    expect(use).toHaveAttribute('href', '/icons/run.svg#debug_dark');
  });
});
