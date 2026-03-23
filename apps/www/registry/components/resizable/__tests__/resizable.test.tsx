import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../index';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);
});

afterAll(() => {
  vi.unstubAllGlobals();
});

function renderResizable(
  firstPanelProps?: Partial<React.ComponentProps<typeof ResizablePanel>>,
  secondPanelProps?: Partial<React.ComponentProps<typeof ResizablePanel>>,
  handleProps?: Partial<React.ComponentProps<typeof ResizableHandle>>,
) {
  return render(
    <div style={{ width: 640, height: 320 }}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} minSize={20} {...firstPanelProps}>
          <div>Panel A</div>
        </ResizablePanel>
        <ResizableHandle {...handleProps} />
        <ResizablePanel defaultSize={50} minSize={20} {...secondPanelProps}>
          <div>Panel B</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>,
  );
}

describe('Resizable', () => {
  it('renders panel group, panels, and handle with decoupled style classes', () => {
    renderResizable(undefined, undefined, { withHandle: true });

    expect(
      screen.getByText('Panel A').closest('[data-slot="resizable-panel"]'),
    ).toHaveClass('jb-resizable-panel');

    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('data-slot', 'resizable-handle');
    expect(handle).toHaveClass('jb-resizable-handle');
    expect(handle).toHaveAttribute('data-with-handle', 'true');
    expect(
      handle.querySelector('.jb-resizable-handle__grip'),
    ).toBeInTheDocument();
  });

  it('renders panel content directly without the scroll viewport wrapper', () => {
    renderResizable({ defaultSize: 20, minSize: 20 });

    expect(
      screen
        .getByText('Panel A')
        .closest('[data-slot="resizable-panel-viewport"]'),
    ).not.toBeInTheDocument();
  });

  it('uses custom handle children instead of the default grip', () => {
    renderResizable(undefined, undefined, {
      children: <span>Custom Grip</span>,
      withHandle: true,
    });

    const handle = screen.getByRole('separator');
    expect(screen.getByText('Custom Grip')).toBeInTheDocument();
    expect(
      handle.querySelector('.jb-resizable-handle__grip'),
    ).not.toBeInTheDocument();
  });

  it('does not enable drag-to-collapse when only collapsedSize is provided', () => {
    renderResizable({ collapsedSize: 0 });

    expect(
      screen.getByText('Panel A').closest('[data-slot="resizable-panel"]'),
    ).not.toHaveAttribute('data-panel-collapsible');
  });

  it('treats collapsedSize={-1} as collapse disabled', () => {
    renderResizable({ collapsedSize: -1, collapsed: true });

    expect(
      screen.getByText('Panel A').closest('[data-slot="resizable-panel"]'),
    ).not.toHaveAttribute('data-panel-collapsible');
  });

  it('uses 0 as the default collapsedSize', () => {
    renderResizable({ collapsed: true });

    expect(
      screen.getByText('Panel A').closest('[data-slot="resizable-panel"]'),
    ).toHaveAttribute('data-panel-collapsible', 'true');
  });
});
