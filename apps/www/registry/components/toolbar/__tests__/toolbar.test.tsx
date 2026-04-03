import { render, screen } from '@testing-library/react';

import { Toolbar, ToolbarItem } from '../index';

describe('Toolbar', () => {
  it('renders with toolbar semantics', () => {
    render(
      <Toolbar>
        <ToolbarItem aria-label="Settings">S</ToolbarItem>
      </Toolbar>,
    );

    expect(screen.getByRole('toolbar')).toHaveAttribute('data-slot', 'toolbar');
    expect(screen.getByRole('toolbar')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
    expect(screen.getByRole('toolbar')).toHaveAttribute(
      'data-direction',
      'horizontal',
    );
  });

  it('supports vertical direction', () => {
    render(
      <Toolbar direction="vertical">
        <ToolbarItem aria-label="Settings">S</ToolbarItem>
      </Toolbar>,
    );

    expect(screen.getByRole('toolbar')).toHaveAttribute(
      'aria-orientation',
      'vertical',
    );
    expect(screen.getByRole('toolbar')).toHaveAttribute(
      'data-direction',
      'vertical',
    );
  });

  it('supports floating direction', () => {
    render(
      <Toolbar direction="floating">
        <ToolbarItem aria-label="Settings">S</ToolbarItem>
      </Toolbar>,
    );

    expect(screen.getByRole('toolbar')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
    expect(screen.getByRole('toolbar')).toHaveAttribute(
      'data-direction',
      'floating',
    );
  });
});

describe('ToolbarItem', () => {
  it('supports vertical separators on items', () => {
    render(
      <Toolbar>
        <ToolbarItem aria-label="Settings" separator="vertical">
          S
        </ToolbarItem>
      </Toolbar>,
    );

    const item = screen.getByRole('button');
    expect(item).toHaveAttribute('data-separator', 'vertical');
    expect(item.className).toContain('text-ui-default');
  });

  it('supports horizontal separators on items', () => {
    render(
      <Toolbar direction="vertical">
        <ToolbarItem aria-label="Settings" separator="horizontal">
          S
        </ToolbarItem>
      </Toolbar>,
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'data-separator',
      'horizontal',
    );
  });
});
