import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  DynamicTree,
  type DynamicTreeItemData,
  type DynamicTreeLoadedItem,
} from '../index';

type TreeFixture = {
  items: Record<string, DynamicTreeItemData>;
  children: Record<string, string[]>;
};

function createLoadData(fixture: TreeFixture) {
  return vi.fn(
    async (
      itemId: string | null,
    ): Promise<DynamicTreeLoadedItem<DynamicTreeItemData>[]> => {
      await Promise.resolve();

      return (fixture.children[itemId ?? 'root'] ?? []).map((childId) => ({
        id: childId,
        data: fixture.items[childId] ?? {
          label: childId,
        },
      }));
    },
  );
}

const fixture: TreeFixture = {
  items: {
    root: {
      label: 'workspace',
      isFolder: true,
    },
    src: {
      label: 'src',
      isFolder: true,
    },
    readme: {
      label: 'README.md',
      disabled: true,
    },
    index: {
      label: 'index.tsx',
    },
  },
  children: {
    root: ['src', 'readme'],
    src: ['index'],
  },
};

describe('DynamicTree', () => {
  it('applies width and height constraints to the scroll area wrapper', () => {
    const loadData = createLoadData(fixture);

    render(<DynamicTree loadData={loadData} width="260px" height="140px" />);

    const scrollArea = document.querySelector(
      '[data-slot="jb-tree-scroll-area"]',
    ) as HTMLElement;

    expect(scrollArea.style.width).toBe('260px');
    expect(scrollArea.style.height).toBe('140px');
  });

  it('loads and renders root nodes from loadData', async () => {
    const loadData = createLoadData(fixture);

    render(<DynamicTree loadData={loadData} />);

    expect(await screen.findByText('src')).toBeInTheDocument();
    expect(screen.getByText('README.md')).toBeInTheDocument();
    expect(screen.queryByText('index.tsx')).not.toBeInTheDocument();
    expect(loadData).toHaveBeenCalledWith(null);
  });

  it('loads nested nodes when a folder is expanded', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTree loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = await waitFor(() => {
      const element = document.querySelector(
        '[data-slot="jb-tree-item-disclosure"][data-value="src"]',
      ) as HTMLButtonElement | null;

      expect(element).toBeTruthy();
      return element as HTMLButtonElement;
    });

    await user.click(disclosure);

    expect(await screen.findByText('index.tsx')).toBeInTheDocument();
    expect(loadData).toHaveBeenCalledWith('src');
  });

  it('shows a loading icon in the disclosure while loading children', async () => {
    const user = userEvent.setup();
    let resolveChildrenLoad:
      | ((items: DynamicTreeLoadedItem<DynamicTreeItemData>[]) => void)
      | null = null;
    const loadData = vi.fn(
      async (
        itemId: string | null,
      ): Promise<DynamicTreeLoadedItem<DynamicTreeItemData>[]> => {
        await Promise.resolve();

        if (itemId === null) {
          return (fixture.children.root ?? []).map((childId) => ({
            id: childId,
            data: fixture.items[childId] ?? {
              label: childId,
            },
          }));
        }

        if (itemId === 'src') {
          return new Promise((resolve) => {
            resolveChildrenLoad = resolve;
          });
        }

        return [];
      },
    );

    render(<DynamicTree loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = document.querySelector(
      '[data-slot="jb-tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    await waitFor(() => {
      expect(disclosure).toHaveAttribute('data-loading', 'true');
      expect(disclosure).toHaveAttribute('aria-label', 'Loading src');
      expect(disclosure.querySelector('svg.animate-spin')).toBeTruthy();
    });

    await act(async () => {
      resolveChildrenLoad?.([]);
      await Promise.resolve();
    });
  });

  it('selects enabled items', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTree loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = document.querySelector(
      '[data-slot="jb-tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    await screen.findByText('index.tsx');

    const indexItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="index"]',
    ) as HTMLDivElement;

    await user.click(indexItem);

    expect(indexItem).toHaveAttribute('data-selected', 'true');
  });

  it('does not select disabled items', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTree loadData={loadData} />);

    await screen.findByText('README.md');

    const readmeItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="readme"]',
    ) as HTMLDivElement;

    await user.click(readmeItem);

    expect(readmeItem).toHaveAttribute('data-disabled', 'true');
    expect(readmeItem).not.toHaveAttribute('data-selected', 'true');
  });
});
