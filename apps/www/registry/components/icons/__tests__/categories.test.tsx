import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Breakpoints, General, Plugins, RunConfigurations } from '../index';

let resolvedTheme: 'light' | 'dark' = 'light';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme,
  }),
}));

describe('category icon wrappers', () => {
  beforeEach(() => {
    resolvedTheme = 'light';
  });

  it('resolves single-segment names for flat categories', () => {
    const { container } = render(<Breakpoints name="breakpoint" />);
    const use = container.querySelector('use');

    expect(use).toHaveAttribute(
      'href',
      '/icons/breakpoints.svg#breakpoint_light',
    );
  });

  it('resolves nested names for general category wrappers', () => {
    const { container } = render(<General name="tool-windows/feedback" />);
    const use = container.querySelector('use');

    expect(use).toHaveAttribute('href', '/icons/general.svg#feedback_light');
  });

  it('keeps the general/general subgroup accessible', () => {
    const { container } = render(<General name="general/chevron-down" />);
    const use = container.querySelector('use');

    expect(use).toHaveAttribute(
      'href',
      '/icons/general.svg#chevron-down_light',
    );
  });

  it('resolves nested plugin paths with the current theme', () => {
    resolvedTheme = 'dark';

    const { container } = render(<Plugins name="ruby/rhtml" />);
    const use = container.querySelector('use');

    expect(use).toHaveAttribute('href', '/icons/plugins.svg#rhtml_dark');
  });

  it('supports categories with hyphenated top-level sprite names', () => {
    const { container } = render(
      <RunConfigurations name="application-remote" />,
    );
    const use = container.querySelector('use');

    expect(use).toHaveAttribute(
      'href',
      '/icons/run-configurations.svg#application-remote_light',
    );
  });
});
