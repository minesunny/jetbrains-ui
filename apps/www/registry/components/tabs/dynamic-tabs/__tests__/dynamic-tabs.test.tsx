import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  DynamicTabsList,
  type DynamicTabItem,
  type DynamicTabContextMenuFn,
} from '@/registry/components/tabs/dynamic-tabs';

const fixture: DynamicTabItem[] = [
  { id: 'main', label: 'main.ts', pinned: true },
  { id: 'app', label: 'app.tsx' },
  { id: 'utils', label: 'utils.ts' },
  { id: 'styles', label: 'styles.css' },
  { id: 'test', label: 'test.ts', disabled: true },
];

function DynamicTabsTestHarness({
  items = fixture,
  activeTab,
  defaultActiveTab,
  onActiveChange,
  closeTabs,
  togglePin,
  contextMenu,
}: {
  items?: DynamicTabItem[];
  activeTab?: string;
  defaultActiveTab?: string;
  onActiveChange?: (tabId: string) => void;
  closeTabs?: (tabIds: string[]) => void;
  togglePin?: (tabId: string) => void;
  contextMenu?: DynamicTabContextMenuFn | null;
}) {
  return (
    <DynamicTabsList
      items={items}
      activeTab={activeTab}
      defaultActiveTab={defaultActiveTab}
      onActiveChange={onActiveChange}
      closeTabs={closeTabs}
      togglePin={togglePin}
      contextMenu={contextMenu}
    />
  );
}

describe('DynamicTabsList', () => {
  async function openContextMenu(
    user: ReturnType<typeof userEvent.setup>,
    tabLabel: string,
  ) {
    const tab = screen.getByRole('tab', { name: new RegExp(tabLabel) });
    await user.pointer([
      { target: tab },
      { keys: '[MouseRight]', target: tab },
    ]);
  }

  it('renders all tab items', () => {
    render(<DynamicTabsTestHarness />);
    expect(screen.getByRole('tab', { name: /main\.ts/ })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /app\.tsx/ })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /utils\.ts/ })).toBeInTheDocument();
  });

  it('marks the active tab with data-state active', () => {
    render(<DynamicTabsTestHarness activeTab="app" />);
    expect(screen.getByRole('tab', { name: /app\.tsx/ })).toHaveAttribute(
      'data-state',
      'active',
    );
    expect(screen.getByRole('tab', { name: /main\.ts/ })).toHaveAttribute(
      'data-state',
      'inactive',
    );
  });

  it('calls onActiveChange when a tab is clicked', async () => {
    const user = userEvent.setup();
    const onActiveChange = vi.fn();
    render(
      <DynamicTabsTestHarness
        activeTab="main"
        onActiveChange={onActiveChange}
      />,
    );

    await user.click(screen.getByRole('tab', { name: /app\.tsx/ }));
    expect(onActiveChange).toHaveBeenCalledWith('app');
  });

  it('shows pin icon for pinned tabs', () => {
    render(<DynamicTabsTestHarness />);
    const pinnedTab = screen.getByRole('tab', { name: /main\.ts/ });
    expect(pinnedTab).toHaveAttribute('data-pinned');
    expect(pinnedTab.querySelector('[aria-label="Unpin tab"]')).toBeTruthy();
  });

  it('shows close icon for unpinned tabs', () => {
    render(<DynamicTabsTestHarness />);
    const tab = screen.getByRole('tab', { name: /app\.tsx/ });
    expect(tab.querySelector('[aria-label="Close tab"]')).toBeTruthy();
  });

  it('calls closeTabs when close button is clicked', async () => {
    const user = userEvent.setup();
    const closeTabs = vi.fn();
    render(<DynamicTabsTestHarness closeTabs={closeTabs} />);

    const closeBtn = screen
      .getByRole('tab', { name: /app\.tsx/ })
      .querySelector('[aria-label="Close tab"]') as HTMLElement;
    await user.click(closeBtn);

    expect(closeTabs).toHaveBeenCalledWith(['app']);
  });

  it('calls togglePin when pin icon is clicked', async () => {
    const user = userEvent.setup();
    const togglePin = vi.fn();
    render(<DynamicTabsTestHarness togglePin={togglePin} />);

    const pinBtn = screen
      .getByRole('tab', { name: /main\.ts/ })
      .querySelector('[aria-label="Unpin tab"]') as HTMLElement;
    await user.click(pinBtn);

    expect(togglePin).toHaveBeenCalledWith('main');
  });

  it('renders disabled tabs with disabled state', () => {
    render(<DynamicTabsTestHarness />);
    const disabledTab = screen.getByRole('tab', { name: /test\.ts/ });
    expect(disabledTab).toHaveAttribute('data-disabled');
  });

  describe('context menu', () => {
    it('shows default context menu with all actions for unpinned tab', async () => {
      const user = userEvent.setup();
      const closeTabs = vi.fn();
      const togglePin = vi.fn();
      render(
        <DynamicTabsTestHarness closeTabs={closeTabs} togglePin={togglePin} />,
      );

      await openContextMenu(user, 'app.tsx');

      expect(
        await screen.findByRole('menuitem', { name: 'Pin Tab' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', { name: 'Close' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', { name: 'Close Others' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', { name: 'Close Left Tabs' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', { name: 'Close Right Tabs' }),
      ).toBeInTheDocument();
    });

    it('disables Close for pinned tab and shows Unpin', async () => {
      const user = userEvent.setup();
      render(
        <DynamicTabsTestHarness closeTabs={vi.fn()} togglePin={vi.fn()} />,
      );

      await openContextMenu(user, 'main.ts');

      const closeItem = await screen.findByRole('menuitem', { name: 'Close' });
      expect(closeItem).toHaveAttribute('data-disabled');

      expect(
        screen.getByRole('menuitem', { name: 'Unpin Tab' }),
      ).toBeInTheDocument();
    });

    it('close-range actions skip pinned tabs', async () => {
      const user = userEvent.setup();
      const closeTabs = vi.fn();
      render(<DynamicTabsTestHarness closeTabs={closeTabs} />);

      // items: [main(pinned), app, utils, styles, test(disabled)]
      // Right-click "utils" (index 2)
      await openContextMenu(user, 'utils.ts');

      const closeLeftItem = await screen.findByRole('menuitem', {
        name: 'Close Left Tabs',
      });
      await user.click(closeLeftItem);

      // Should skip main (pinned), only close app
      expect(closeTabs).toHaveBeenCalledWith(['app']);
    });

    it('Close Others skips pinned tabs', async () => {
      const user = userEvent.setup();
      const closeTabs = vi.fn();
      render(<DynamicTabsTestHarness closeTabs={closeTabs} />);

      await openContextMenu(user, 'utils.ts');

      const closeOthersItem = await screen.findByRole('menuitem', {
        name: 'Close Others',
      });
      await user.click(closeOthersItem);

      // Skip main (pinned), skip test (disabled is still closable)
      expect(closeTabs).toHaveBeenCalledWith(['app', 'styles', 'test']);
    });

    it('does not render context menu when contextMenu is null', () => {
      render(<DynamicTabsTestHarness contextMenu={null} />);
      expect(
        document.querySelectorAll('[data-slot="context-menu"]').length,
      ).toBe(0);
    });

    it('renders custom context menu from render function', async () => {
      const user = userEvent.setup();
      const customMenu: DynamicTabContextMenuFn = (tab, index, actions) => (
        <>
          <div data-testid="custom-label">
            {tab.label}:{index}
          </div>
          <button
            type="button"
            data-testid="custom-action"
            onClick={() => actions.close?.()}
          >
            Custom Close
          </button>
        </>
      );

      render(
        <DynamicTabsTestHarness contextMenu={customMenu} closeTabs={vi.fn()} />,
      );

      await openContextMenu(user, 'app.tsx');

      expect(await screen.findByTestId('custom-label')).toHaveTextContent(
        'app.tsx:1',
      );
      expect(screen.getByTestId('custom-action')).toHaveTextContent(
        'Custom Close',
      );
    });

    it('disables all close actions when closeTabs is not provided', async () => {
      const user = userEvent.setup();
      render(<DynamicTabsTestHarness togglePin={vi.fn()} />);

      await openContextMenu(user, 'app.tsx');

      const closeItem = await screen.findByRole('menuitem', { name: 'Close' });
      expect(closeItem).toHaveAttribute('data-disabled');

      expect(
        screen.getByRole('menuitem', { name: 'Close Left Tabs' }),
      ).toHaveAttribute('data-disabled');

      expect(
        screen.getByRole('menuitem', { name: 'Close Right Tabs' }),
      ).toHaveAttribute('data-disabled');

      expect(
        screen.getByRole('menuitem', { name: 'Close Others' }),
      ).toHaveAttribute('data-disabled');
    });

    it('disables Pin/Unpin when togglePin is not provided', async () => {
      const user = userEvent.setup();
      render(<DynamicTabsTestHarness closeTabs={vi.fn()} />);

      await openContextMenu(user, 'app.tsx');

      const pinItem = await screen.findByRole('menuitem', { name: 'Pin Tab' });
      expect(pinItem).toHaveAttribute('data-disabled');
    });
  });
});
