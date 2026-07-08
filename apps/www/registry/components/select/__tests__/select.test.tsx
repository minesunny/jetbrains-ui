import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../index';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  // Mock Pointer Events for Radix UI Select
  if (typeof window !== 'undefined') {
    HTMLElement.prototype.hasPointerCapture = vi.fn().mockReturnValue(false);
    HTMLElement.prototype.setPointerCapture = vi.fn();
    HTMLElement.prototype.releasePointerCapture = vi.fn();
    HTMLElement.prototype.scrollIntoView = vi.fn();
  }
});

afterAll(() => {
  vi.unstubAllGlobals();
});

function TestSelect({
  defaultValue,
  onValueChange,
  disabled,
}: {
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  disabled?: boolean;
}) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectTrigger aria-label="select trigger" size="md">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}

describe('Select Component', () => {
  it('renders select trigger successfully', () => {
    render(<TestSelect />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'data-slot',
      'select-trigger',
    );
  });

  it('renders default value when specified', () => {
    render(<TestSelect defaultValue="banana" />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Banana');
  });

  it('displays placeholder when no value is selected', () => {
    render(<TestSelect />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Select an option');
  });

  it('opens content and displays options on click', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    // Check that items are visible in viewport
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Orange' })).toBeInTheDocument();
  });

  it('triggers onValueChange on selecting an option', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();
    render(<TestSelect onValueChange={handleValueChange} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const appleOption = screen.getByRole('option', { name: 'Apple' });
    await user.click(appleOption);

    expect(handleValueChange).toHaveBeenCalledWith('apple');
    expect(trigger).toHaveTextContent('Apple');
  });

  it('respects disabled prop on trigger', async () => {
    const user = userEvent.setup();
    render(<TestSelect disabled />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();

    await user.click(trigger);
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
});
