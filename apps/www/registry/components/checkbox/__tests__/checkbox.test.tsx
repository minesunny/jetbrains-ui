import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../index';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox aria-label="test checkbox" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('is unchecked by default', () => {
    render(<Checkbox aria-label="test" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('supports defaultChecked', () => {
    const { container } = render(<Checkbox aria-label="test" defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(container.querySelector('svg path')).toBeInTheDocument();
  });

  it('toggles on click', async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="test" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('toggles back to unchecked on second click', async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="test" />);
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('calls onCheckedChange', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="test" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('supports controlled checked prop', () => {
    const { rerender } = render(<Checkbox aria-label="test" checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    rerender(<Checkbox aria-label="test" checked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('supports disabled state', () => {
    render(<Checkbox aria-label="test" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Checkbox aria-label="test" disabled onCheckedChange={onCheckedChange} />,
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('passes className through', () => {
    render(<Checkbox aria-label="test" className="my-checkbox" />);
    expect(screen.getByRole('checkbox')).toHaveClass('my-checkbox');
  });

  it('renders data-slot="checkbox"', () => {
    render(<Checkbox aria-label="test" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'data-slot',
      'checkbox',
    );
  });

  it('supports indeterminate checked state', () => {
    const { container } = render(
      <Checkbox aria-label="test" checked="indeterminate" />,
    );
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'data-state',
      'indeterminate',
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('calls onCheckedChange with indeterminate value', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Checkbox
        aria-label="test"
        checked="indeterminate"
        onCheckedChange={onCheckedChange}
      />,
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Checkbox aria-label="test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });
});
