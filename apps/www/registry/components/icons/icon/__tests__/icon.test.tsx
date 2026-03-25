import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  Icon,
  SVG,
  ThemedIcon,
  normalizeIconPath,
  resolveSpriteHref,
} from '../index';

let resolvedTheme: 'light' | 'dark' = 'light';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme,
  }),
}));

describe('SVG', () => {
  beforeEach(() => {
    resolvedTheme = 'light';
  });

  it('renders an svg element', () => {
    const { container } = render(<SVG name="breakpoints/breakpoint" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('uses the top category sprite path', () => {
    const { container } = render(<SVG name="general/actions/add-file" />);
    const use = container.querySelector('use');

    expect(use).toHaveAttribute('href', '/icons/general.svg#add-file_light');
  });

  it('uses the resolved dark theme', () => {
    resolvedTheme = 'dark';

    const { container } = render(<SVG name="plugins/ruby/rhtml" />);
    const use = container.querySelector('use');

    expect(use).toHaveAttribute('href', '/icons/plugins.svg#rhtml_dark');
  });

  it('defaults width and height to 1em', () => {
    const { container } = render(<SVG name="breakpoints/breakpoint" />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '1em');
    expect(svg).toHaveAttribute('height', '1em');
  });

  it('passes width, height and className through', () => {
    const { container } = render(
      <SVG
        name="general/tool-windows/feedback"
        width="16px"
        height="20px"
        className="my-icon"
      />,
    );
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '16px');
    expect(svg).toHaveAttribute('height', '20px');
    expect(svg).toHaveClass('my-icon');
  });

  it('returns null for an invalid icon path', () => {
    const { container } = render(<SVG name="feedback" />);
    expect(container.firstChild).toBeNull();
  });
});

describe('compatibility exports', () => {
  beforeEach(() => {
    resolvedTheme = 'light';
  });

  it('renders Icon with size', () => {
    const { container } = render(
      <Icon name="breakpoints/breakpoint" size={24} />,
    );
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('renders ThemedIcon with the explicit theme', () => {
    const { container } = render(
      <ThemedIcon name="plugins/ruby/rhtml" currentTheme="dark" />,
    );
    const use = container.querySelector('use');

    expect(use).toHaveAttribute('href', '/icons/plugins.svg#rhtml_dark');
  });
});

describe('helpers', () => {
  it('normalizes path segments', () => {
    expect(normalizeIconPath('general/toolWindows/My Icon')).toBe(
      'general/tool-windows/my-icon',
    );
  });

  it('resolves sprite href from the icon path', () => {
    expect(resolveSpriteHref('general/actions/add-file', 'dark')).toBe(
      '/icons/general.svg#add-file_dark',
    );
  });
});
