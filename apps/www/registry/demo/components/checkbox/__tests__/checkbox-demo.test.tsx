import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckboxDemo from '../index';

describe('CheckboxDemo', () => {
  it('toggles between checked and unchecked by default', async () => {
    const user = userEvent.setup();
    render(<CheckboxDemo state="unchecked" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'checked');

    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('cycles through three states when initialState is indeterminate', async () => {
    const user = userEvent.setup();
    render(<CheckboxDemo state="indeterminate" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');

    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'checked');

    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  it('starts checked when state is checked', () => {
    render(<CheckboxDemo state="checked" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'data-state',
      'checked',
    );
  });
});
