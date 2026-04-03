import { render, screen } from '@testing-library/react';

import { SVG } from '../index';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme: 'dark',
  }),
}));

vi.mock('../registry', async () => {
  const React = await import('react');

  function MockIcon({
    size,
    mode,
    className,
    title,
    'aria-label': ariaLabel,
  }: {
    size?: string;
    mode?: string;
    className?: string;
    title?: string;
    'aria-label'?: string;
  }) {
    return (
      <svg
        data-testid="mock-icon"
        data-size={size}
        data-mode={mode}
        className={className}
        role={ariaLabel ? 'img' : 'presentation'}
        aria-label={ariaLabel}
      >
        {title ? <title>{title}</title> : null}
      </svg>
    );
  }

  return {
    ICON_REGISTRY: {
      search: () => Promise.resolve({ default: MockIcon }),
    },
  };
});

describe('SVG', () => {
  it('renders icons inside a square artboard with inset padding', async () => {
    const { container } = render(
      <SVG name="search" size="md" aria-label="Search icon" />,
    );

    const icon = await screen.findByRole('img', { name: 'Search icon' });
    expect(icon).toHaveAttribute('data-size', 'md');
    expect(icon).toHaveAttribute('data-mode', 'dark');

    const artboard = container.querySelector('[data-slot="svg"]');
    const scaledLayer = container.querySelector('[data-slot="svg-artboard"]');

    expect(artboard).toHaveStyle({
      width: '16px',
      height: '16px',
    });
    expect(scaledLayer).toHaveStyle({
      transform: 'scale(0.875)',
      transformOrigin: 'center',
    });
  });

  it('supports numeric icon sizes while preserving the padded artboard ratio', async () => {
    const { container } = render(
      <SVG name="search" size={20} aria-label="Numeric icon" />,
    );

    const icon = await screen.findByRole('img', { name: 'Numeric icon' });
    expect(icon).toHaveAttribute('data-size', 'lg');

    const artboard = container.querySelector('[data-slot="svg"]');
    const scaledLayer = container.querySelector('[data-slot="svg-artboard"]');

    expect(artboard).toHaveStyle({
      width: '20px',
      height: '20px',
    });
    expect(scaledLayer).toHaveStyle({
      transform: 'scale(0.875)',
    });
  });

  it('returns null when the icon name is not registered', () => {
    const { container } = render(<SVG name="missing-icon" />);
    expect(container).toBeEmptyDOMElement();
  });
});
