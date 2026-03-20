import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ComboBox,
  ComboBoxTrigger,
  ComboBoxValue,
  ComboBoxContent,
  ComboBoxItem,
  ComboBoxGroup,
  ComboBoxLabel,
  ComboBoxSeparator,
} from '../index';

// Polyfill pointer capture methods for jsdom (required by Radix Select)
beforeAll(() => {
  Element.prototype.hasPointerCapture = vi.fn(() => false);
  Element.prototype.setPointerCapture = vi.fn();
  Element.prototype.releasePointerCapture = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
  // ResizeObserver polyfill (must be a class for `new ResizeObserver()`)
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

function renderComboBox(props: Record<string, any> = {}) {
  return render(
    <ComboBox {...props}>
      <ComboBoxTrigger aria-label="Fruit">
        <ComboBoxValue placeholder="Pick a fruit" />
      </ComboBoxTrigger>
      <ComboBoxContent>
        <ComboBoxItem value="apple">Apple</ComboBoxItem>
        <ComboBoxItem value="banana">Banana</ComboBoxItem>
        <ComboBoxItem value="cherry">Cherry</ComboBoxItem>
      </ComboBoxContent>
    </ComboBox>,
  );
}

async function openComboBox(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('combobox'));
  await screen.findByRole('listbox');
}

describe('ComboBox', () => {
  it('renders trigger', () => {
    renderComboBox();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows placeholder text', () => {
    renderComboBox();
    expect(screen.getByText('Pick a fruit')).toBeInTheDocument();
  });

  it('opens dropdown on trigger click', async () => {
    const user = userEvent.setup();
    renderComboBox();

    await openComboBox(user);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('selects an item on click', async () => {
    const user = userEvent.setup();
    renderComboBox();

    await openComboBox(user);
    await user.click(screen.getByText('Banana'));

    expect(screen.getByRole('combobox')).toHaveTextContent('Banana');
  });

  it('calls onValueChange when item is selected', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderComboBox({ onValueChange });

    await openComboBox(user);
    await user.click(screen.getByText('Apple'));
    expect(onValueChange).toHaveBeenCalledWith('apple');
  });

  it('supports controlled value', () => {
    render(
      <ComboBox value="banana">
        <ComboBoxTrigger aria-label="Fruit">
          <ComboBoxValue />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="apple">Apple</ComboBoxItem>
          <ComboBoxItem value="banana">Banana</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );
    expect(screen.getByRole('combobox')).toHaveTextContent('Banana');
  });

  it('supports defaultValue', () => {
    render(
      <ComboBox defaultValue="cherry">
        <ComboBoxTrigger aria-label="Fruit">
          <ComboBoxValue />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="cherry">Cherry</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );
    expect(screen.getByRole('combobox')).toHaveTextContent('Cherry');
  });
});

describe('ComboBoxTrigger', () => {
  it('supports invalid state', () => {
    render(
      <ComboBox>
        <ComboBoxTrigger aria-label="Fruit" aria-invalid>
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="a">A</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );

    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('supports disabled state', () => {
    render(
      <ComboBox disabled>
        <ComboBoxTrigger aria-label="Fruit">
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="a">A</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('passes className through', () => {
    render(
      <ComboBox>
        <ComboBoxTrigger aria-label="Fruit" className="custom-trigger">
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="a">A</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom-trigger');
  });

  it('sets displayName', () => {
    expect(ComboBoxTrigger.displayName).toBeDefined();
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(
      <ComboBox disabled>
        <ComboBoxTrigger aria-label="Fruit">
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="a">A</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );
    await user.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('supports active trigger style flag', () => {
    render(
      <ComboBox>
        <ComboBoxTrigger aria-label="Fruit" active>
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="a">A</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );

    expect(screen.getByRole('combobox')).toHaveAttribute('data-active', 'true');
  });

  it('supports trigger size preset', () => {
    render(
      <ComboBox>
        <ComboBoxTrigger aria-label="Fruit" size="md">
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="a">A</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );

    expect(screen.getByRole('combobox')).toHaveClass('jb-cbx-trigger--size-md');
  });
});

describe('ComboBoxItem', () => {
  it('supports disabled item', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <ComboBox onValueChange={onValueChange}>
        <ComboBoxTrigger aria-label="Fruit">
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxItem value="apple" disabled>
            Apple
          </ComboBoxItem>
          <ComboBoxItem value="banana">Banana</ComboBoxItem>
        </ComboBoxContent>
      </ComboBox>,
    );

    await openComboBox(user);
    await user.click(screen.getByText('Apple'));
    // Disabled item should not trigger value change
    expect(onValueChange).not.toHaveBeenCalledWith('apple');
  });

  it('sets displayName', () => {
    expect(ComboBoxItem.displayName).toBeDefined();
    expect(ComboBoxContent.displayName).toBeDefined();
    expect(ComboBoxLabel.displayName).toBeDefined();
    expect(ComboBoxSeparator.displayName).toBeDefined();
  });
});

describe('ComboBoxGroup and ComboBoxLabel', () => {
  it('renders group with label', async () => {
    const user = userEvent.setup();
    render(
      <ComboBox>
        <ComboBoxTrigger aria-label="Food">
          <ComboBoxValue placeholder="Pick" />
        </ComboBoxTrigger>
        <ComboBoxContent>
          <ComboBoxGroup>
            <ComboBoxLabel>Fruits</ComboBoxLabel>
            <ComboBoxItem value="apple">Apple</ComboBoxItem>
          </ComboBoxGroup>
        </ComboBoxContent>
      </ComboBox>,
    );

    await openComboBox(user);
    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });
});
