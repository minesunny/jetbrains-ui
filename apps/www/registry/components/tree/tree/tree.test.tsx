import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tree, TreeItem } from './index';

describe('Tree', () => {
  it('renders root items and keeps nested items collapsed by default', () => {
    render(
      <Tree>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    expect(screen.getByText('Root')).toBeInTheDocument();
    expect(screen.queryByText('Child')).not.toBeInTheDocument();
  });

  it('applies width and height constraints to the scroll area wrapper', () => {
    render(
      <Tree width="240px" height="120px">
        <TreeItem value="root" label="Root" />
      </Tree>,
    );

    const scrollArea = document.querySelector(
      '[data-slot="jb-tree-scroll-area"]',
    ) as HTMLElement;

    expect(scrollArea.style.width).toBe('240px');
    expect(scrollArea.style.height).toBe('120px');
  });

  it('expands nested items when disclosure is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Tree>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const disclosure = document.querySelector(
      '[data-slot="jb-tree-item-disclosure"][data-value="root"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('calls onSelectedIdChange when selecting an item', async () => {
    const user = userEvent.setup();
    const onSelectedIdChange = vi.fn();

    render(
      <Tree
        defaultExpandedIds={['root']}
        onSelectedIdChange={onSelectedIdChange}
      >
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const item = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="child"]',
    ) as HTMLDivElement;

    await user.click(item);

    expect(onSelectedIdChange).toHaveBeenCalledWith('child');
  });

  it('does not select disabled items', async () => {
    const user = userEvent.setup();
    const onSelectedIdChange = vi.fn();

    render(
      <Tree onSelectedIdChange={onSelectedIdChange}>
        <TreeItem value="root" label="Root" disabled />
      </Tree>,
    );

    const item = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    await user.click(item);

    expect(item).toHaveAttribute('data-disabled', 'true');
    expect(onSelectedIdChange).not.toHaveBeenCalled();
  });

  it('supports keyboard expand and collapse on parent item', async () => {
    const user = userEvent.setup();

    render(
      <Tree>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const parent = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    parent.focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByText('Child')).toBeInTheDocument();

    await user.keyboard('{ArrowLeft}');

    await waitFor(() => {
      expect(screen.queryByText('Child')).not.toBeInTheDocument();
    });
  });
});
