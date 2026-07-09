import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState, useCallback } from 'react';

import {
  DynamicTabsList,
  type DynamicTabsProps,
} from '@/registry/components/tabs/dynamic-tabs';

// ---------------------------------------------------------------------------
// 8.4 — Modified indicator tests (on DynamicTabsProps)
// ---------------------------------------------------------------------------

describe('DynamicTabsList — modified indicator', () => {
  const items: DynamicTabsProps[] = [
    { id: 'main', label: 'main.ts' },
    { id: 'app', label: 'app.tsx', modified: true },
    { id: 'pinned', label: 'config.ts', pinned: true, modified: true },
  ];

  it('renders ● dot for modified tabs', () => {
    render(<DynamicTabsList items={items} defaultActiveTab="main" />);
    const appTab = screen.getByRole('tab', { name: /app\.tsx/i });
    expect(appTab).toHaveAttribute('data-modified');
    expect(appTab).toHaveTextContent('●');
  });

  it('does not render ● dot for unmodified tabs', () => {
    render(<DynamicTabsList items={items} defaultActiveTab="main" />);
    const mainTab = screen.getByRole('tab', { name: /main\.ts/i });
    expect(mainTab).not.toHaveAttribute('data-modified');
    expect(mainTab.textContent).not.toContain('●');
  });

  it('does not render ● dot for pinned+modified tabs (pin icon takes precedence)', () => {
    render(<DynamicTabsList items={items} defaultActiveTab="main" />);
    const pinnedTab = screen.getByRole('tab', { name: /config\.ts/i });
    expect(pinnedTab).toHaveAttribute('data-pinned');
    // Pinned tabs show the pin icon, not the modified dot
    expect(pinnedTab.textContent).not.toContain('●');
  });

  it('modified tab also shows close button', () => {
    render(
      <DynamicTabsList
        items={items}
        defaultActiveTab="main"
        onClose={() => {}}
      />,
    );
    const appTab = screen.getByRole('tab', { name: /app\.tsx/i });
    // Should have both ● and ×
    expect(appTab).toHaveTextContent('●');
    expect(screen.getAllByLabelText('Close tab').length).toBeGreaterThan(0);
  });
});
