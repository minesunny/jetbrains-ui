import { render, screen } from '@testing-library/react';

import { SVG } from '../index';

describe('SVG', () => {
  it('renders icon with artboard wrapper and correct attributes', async () => {
    const { container } = render(
      <SVG name="search" size="md" aria-label="Search icon" />,
    );

    const icon = await screen.findByRole('img', { name: 'Search icon' });
    expect(icon).toHaveAttribute('data-size', 'md');
    expect(icon).toHaveAttribute('data-mode', 'dark');

    const artboard = container.querySelector('[data-slot="svg"]');
    expect(artboard).toHaveStyle({
      width: '16px',
      height: '16px',
    });

    const svgEl = container.querySelector('[data-slot="svg-artboard"]');
    expect(svgEl).toHaveAttribute('viewBox', '0 0 16 16');
    expect(svgEl).toHaveAttribute('width', '16');
    expect(svgEl).toHaveAttribute('height', '16');
  });

  it('supports numeric icon sizes', async () => {
    const { container } = render(
      <SVG name="search" size={20} aria-label="Numeric icon" />,
    );

    const icon = await screen.findByRole('img', { name: 'Numeric icon' });
    expect(icon).toHaveAttribute('data-size', 'lg');

    const artboard = container.querySelector('[data-slot="svg"]');
    expect(artboard).toHaveStyle({
      width: '20px',
      height: '20px',
    });
  });

  it('renders svg element even for unregistered icon name', () => {
    const { container } = render(<SVG name="missing-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.getAttribute('aria-label')).toBeNull();
  });
});
