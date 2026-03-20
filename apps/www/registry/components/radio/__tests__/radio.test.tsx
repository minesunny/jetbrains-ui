import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem } from '../index';

function renderRadioGroup(props: Record<string, any> = {}) {
  return render(
    <RadioGroup aria-label="options" {...props}>
      <RadioGroupItem value="a" aria-label="Option A" />
      <RadioGroupItem value="b" aria-label="Option B" />
      <RadioGroupItem value="c" aria-label="Option C" />
    </RadioGroup>,
  );
}

describe('RadioGroup', () => {
  it('renders all radio items', () => {
    renderRadioGroup();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('has no selection by default', () => {
    renderRadioGroup();
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).not.toBeChecked();
    });
  });

  it('supports defaultValue', () => {
    renderRadioGroup({ defaultValue: 'b' });
    expect(screen.getByLabelText('Option B')).toBeChecked();
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  it('selects item on click', async () => {
    const user = userEvent.setup();
    renderRadioGroup();

    await user.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).toBeChecked();
  });

  it('switches selection on click', async () => {
    const user = userEvent.setup();
    renderRadioGroup();

    await user.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).toBeChecked();

    await user.click(screen.getByLabelText('Option B'));
    expect(screen.getByLabelText('Option B')).toBeChecked();
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  it('calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderRadioGroup({ onValueChange });

    await user.click(screen.getByLabelText('Option A'));
    expect(onValueChange).toHaveBeenCalledWith('a');
  });

  it('supports controlled value', () => {
    const { rerender } = render(
      <RadioGroup aria-label="options" value="a">
        <RadioGroupItem value="a" aria-label="Option A" />
        <RadioGroupItem value="b" aria-label="Option B" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText('Option A')).toBeChecked();

    rerender(
      <RadioGroup aria-label="options" value="b">
        <RadioGroupItem value="a" aria-label="Option A" />
        <RadioGroupItem value="b" aria-label="Option B" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText('Option B')).toBeChecked();
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  it('passes className to RadioGroup', () => {
    const { container } = render(
      <RadioGroup aria-label="options" className="my-group">
        <RadioGroupItem value="a" aria-label="A" />
      </RadioGroup>,
    );
    expect(container.firstChild).toHaveClass('my-group');
  });
});

describe('RadioGroupItem', () => {
  it('supports disabled state', () => {
    render(
      <RadioGroup aria-label="options">
        <RadioGroupItem value="a" aria-label="A" disabled />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('does not select when disabled', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <RadioGroup aria-label="options" onValueChange={onValueChange}>
        <RadioGroupItem value="a" aria-label="A" disabled />
      </RadioGroup>,
    );

    await user.click(screen.getByRole('radio'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('passes className to RadioGroupItem', () => {
    render(
      <RadioGroup aria-label="options">
        <RadioGroupItem value="a" aria-label="A" className="my-item" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio')).toHaveClass('my-item');
  });

  it('sets displayName', () => {
    expect(RadioGroup.displayName).toBeDefined();
    expect(RadioGroupItem.displayName).toBeDefined();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <RadioGroup aria-label="options">
        <RadioGroupItem value="a" aria-label="A" ref={ref} />
      </RadioGroup>,
    );
    expect(ref).toHaveBeenCalled();
  });
});
