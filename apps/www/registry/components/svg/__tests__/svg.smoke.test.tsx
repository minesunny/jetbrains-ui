import { waitFor, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// setup.ts globally mocks @/registry/components/svg so the wider test suite
// doesn't pull in the icon graph. This file exercises the REAL dispatcher
// (manifest resolution + React.lazy) as a Phase 0 smoke check.
vi.unmock('@/registry/components/svg');

import { SVG } from '@/registry/components/svg';

describe('SVG dispatcher — real (smoke)', () => {
  it('renders a real icon component by pathname', async () => {
    const { container } = render(<SVG name="database/redis" />);
    // The lazy chunk resolves async inside <Suspense fallback={null}>.
    // Cold-loading the database barrel (216 modules) can be slow under the
    // full suite, so allow a generous timeout.
    await waitFor(
      () => {
        expect(container.querySelector('svg')).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  }, 10000);

  it('renders an expui icon via the subcategory pathname', async () => {
    const { container } = render(<SVG name="database/expui/access-method" />);
    await waitFor(
      () => {
        expect(container.querySelector('svg')).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  }, 10000);

  it('renders an empty fallback (no throw) for unknown pathname', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<SVG name="nope/nope" />);
    // No <svg> rendered — just the sized fallback span.
    expect(container.querySelector('svg')).not.toBeInTheDocument();
    expect(container.querySelector('[data-slot="svg"]')).toBeInTheDocument();
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/Unknown icon name/));
    warn.mockRestore();
  });

  it('warns and picks the first candidate for an ambiguous bare slug', async () => {
    // 'commit' exists in vcs, database, and general/tool-windows.
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<SVG name="commit" />);
    await waitFor(
      () => {
        expect(container.querySelector('svg')).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/Ambiguous/));
    warn.mockRestore();
  }, 10000);
});
