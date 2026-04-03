import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DynamicTreeDemo from '../index';

describe('DynamicTreeDemo', () => {
  it('renders async tree content and expands folders', async () => {
    const user = userEvent.setup();

    render(<DynamicTreeDemo />);

    expect(await screen.findByText('src')).toBeInTheDocument();
    expect(screen.getByText('README.md')).toBeInTheDocument();
    expect(screen.queryByText('components')).not.toBeInTheDocument();

    const disclosure = await waitFor(() => {
      const element = document.querySelector(
        '[data-slot="tree-item-disclosure"][data-value="dynamic-src"]',
      ) as HTMLButtonElement | null;

      expect(element).toBeTruthy();
      return element as HTMLButtonElement;
    });

    await user.click(disclosure);

    expect(await screen.findByText('components')).toBeInTheDocument();
  });
});
