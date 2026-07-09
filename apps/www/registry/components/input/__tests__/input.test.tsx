import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../index';

describe('Input', () => {
  it('renders with default type text', () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('sets data-slot="input"', () => {
    render(<Input aria-label="field" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input');
  });

  it('forwards className', () => {
    render(<Input className="w-full" aria-label="wide" />);
    expect(screen.getByRole('textbox')).toHaveClass('w-full');
  });

  it('supports controlled value updates', async () => {
    const user = userEvent.setup();
    render(<Input defaultValue="a" aria-label="controlled" />);
    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });

  it('respects disabled', () => {
    render(<Input disabled aria-label="off" />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
