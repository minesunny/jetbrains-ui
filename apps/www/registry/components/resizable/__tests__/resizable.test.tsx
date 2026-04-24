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
  handleProps?: Partial<React.ComponentProps<typeof ResizableHandle>>,
  groupProps?: Partial<React.ComponentProps<typeof ResizablePanelGroup>>,
) {
  return render(
    <div style={{ width: 640, height: 320 }}>
      <ResizablePanelGroup orientation="horizontal" {...groupProps}>
        <ResizablePanel defaultSize={50} minSize={20}>
          <div>Panel A</div>
        </ResizablePanel>
        <ResizableHandle {...handleProps} />
        <ResizablePanel defaultSize={50} minSize={20}>
          <div>Panel B</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>,
  );
}

describe('Resizable', () => {
  it('renders panel group, panels, and handle', () => {
    renderResizable({ withHandle: true });

    const group = screen
      .getByText('Panel A')
      .closest('[data-slot="resizable-panel-group"]');
    expect(group).toBeInTheDocument();

    const panel = screen
      .getByText('Panel A')
      .closest('[data-slot="resizable-panel"]');
    expect(panel).toBeInTheDocument();

    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('data-slot', 'resizable-handle');
    expect(handle).toHaveAttribute('data-with-handle', 'true');
  });

  it('renders grip when withHandle is true', () => {
    renderResizable({ withHandle: true });

    const handle = screen.getByRole('separator');
    const grip = handle.querySelector('[class*="rounded"]');
    expect(grip).toBeInTheDocument();
  });

  it('renders custom handle children', () => {
    renderResizable({
      children: <span>Custom Grip</span>,
      withHandle: true,
    });

    expect(screen.getByText('Custom Grip')).toBeInTheDocument();
  });

  it('applies flex-col for vertical orientation', () => {
    renderResizable(undefined, { orientation: 'vertical' });

    const group = document.querySelector('[data-slot="resizable-panel-group"]');
    expect(group).toHaveClass('flex-col');
  });

  it('sets displayName for all components', () => {
    expect(ResizablePanelGroup.displayName).toBeDefined();
    expect(ResizablePanel.displayName).toBeDefined();
    expect(ResizableHandle.displayName).toBeDefined();
  });
});
